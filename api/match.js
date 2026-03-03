export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { taskId, taskTitle, taskRole, taskBudget, freelancers } = req.body;

  if (!taskId || !freelancers?.length) {
    return res.status(400).json({ error: 'taskId and freelancers are required' });
  }

  const freelancerList = freelancers
    .map(f => `- ${f.name} | Role: ${f.role} | Score: ${f.score}/10 | Status: ${f.status}`)
    .join('\n');

  const prompt = `You are the Matcher Agent for CreatorOS, an AI platform for Indian content creators.

Your job is to find the best freelancer for a specific task from the available pool.

Task: ${taskTitle}
Required Role: ${taskRole}
Budget: ₹${taskBudget || 'flexible'}

Available Freelancers:
${freelancerList}

Return ONLY a valid JSON object. No explanation, no markdown, just raw JSON:
{
  "matched_name": "Full name of best match",
  "matched_email": "their email",
  "match_score": 95,
  "reason": "One sentence explaining why this person is the best fit"
}

Rules:
- Match primarily by role (exact or closest match)
- Use score to break ties
- Only pick from the available freelancers list above
- match_score is 0-100 representing how well they fit this specific task`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 500,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const data = await response.json();
    if (!response.ok) return res.status(500).json({ error: data.error?.message });

    const text = data.content[0].text.trim();
    const clean = text.replace(/```json|```/g, '').trim();
    const match = JSON.parse(clean);

    return res.status(200).json({ match });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
