export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, role, experience, rate, portfolio, bio, niches, tools } = req.body;

  const prompt = `You are the Scorer Agent for CreatorOS, an AI platform that connects Indian Instagram creators with skilled freelancers.

A freelancer has applied to join the talent pool. Score their application.

Applicant Details:
- Name: ${name}
- Role: ${role}
- Experience: ${experience} years
- Rate per project: ₹${rate}
- Portfolio: ${portfolio}
- About their work: ${bio}
- Niches: ${niches || 'not specified'}
- Tools: ${tools || 'not specified'}

Score them from 1-10 based on:
1. Clarity and specificity of their work description (are they specific about results?)
2. Relevance to Instagram/Reels content creation
3. Experience level and rate reasonableness for Indian market
4. Portfolio provided (any link is better than none)
5. Niche specialisation (specific niches score higher)

Return ONLY valid JSON, no markdown:
{
  "score": 8,
  "feedback": "One sentence of honest feedback about their application strength"
}

Be strict — most applicants should score 5-7. Only exceptional ones get 8-10.`;

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
        max_tokens: 200,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const data = await response.json();
    if (!response.ok) return res.status(500).json({ error: data.error?.message });

    const text = data.content[0].text.trim().replace(/```json|```/g, '').trim();
    const result = JSON.parse(text);
    return res.status(200).json(result);

  } catch (err) {
    // Return default score if AI fails
    return res.status(200).json({ score: 6, feedback: 'Application received and will be reviewed manually.' });
  }
}
