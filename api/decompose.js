export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { title, brief, budget } = req.body;

  if (!title || !brief) {
    return res.status(400).json({ error: 'Title and brief are required' });
  }

  const prompt = `You are the Decomposer Agent for CreatorOS, an AI platform for Indian content creators.

A creator has submitted a campaign brief. Break it down into specific tasks needed to execute this campaign.

Campaign Title: ${title}
Brief: ${brief}
Total Budget: ₹${budget || 'not specified'}

Return ONLY a valid JSON array of tasks. No explanation, no markdown, just raw JSON like this:
[
  {
    "title": "Task name",
    "role": "Role needed (e.g. Video Editor, Scriptwriter, Thumbnail Designer, Voiceover Artist)",
    "budget": 5000,
    "status": "pending"
  }
]

Rules:
- Create 2-5 tasks based on the brief
- Split the budget across tasks realistically (numbers only, no ₹ symbol)
- Be specific about roles relevant to Indian content creation
- If budget is not specified, estimate reasonable amounts in INR`;

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
        max_tokens: 1000,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(500).json({ error: data.error?.message || 'Anthropic API error' });
    }

    const text = data.content[0].text.trim();
    const clean = text.replace(/```json|```/g, '').trim();
    const tasks = JSON.parse(clean);

    return res.status(200).json({ tasks });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
