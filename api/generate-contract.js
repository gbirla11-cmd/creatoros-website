export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { taskTitle, taskRole, taskBudget, deadline, freelancerName, freelancerEmail, campaignTitle, creatorName } = req.body;

  const prompt = `You are the Contract Agent for CreatorOS, an AI platform for Indian content creators.

Generate a clean, professional Statement of Work (SOW) contract for the following:

Campaign: ${campaignTitle}
Task: ${taskTitle}
Role: ${taskRole}
Freelancer: ${freelancerName} (${freelancerEmail})
Creator/Client: ${creatorName}
Payment: ₹${taskBudget ? Number(taskBudget).toLocaleString('en-IN') : 'TBD'}
Deadline: ${deadline || 'To be agreed'}

Write a professional but simple SOW in plain English. Include:
1. Project Overview
2. Deliverables (specific to the role and task)
3. Timeline & Deadline
4. Payment Terms (50% upfront via escrow, 50% on delivery)
5. Revision Policy (2 rounds of revisions included)
6. Ownership & Rights (creator owns all work on payment)
7. Cancellation Policy

Keep it concise — under 400 words. Professional but friendly tone. 
Format with clear section headers using **bold**.
End with signature lines for both parties.`;

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
    if (!response.ok) return res.status(500).json({ error: data.error?.message });

    const contract = data.content[0].text.trim();
    return res.status(200).json({ contract });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
