const express = require('express');
const router = express.Router();
const Anthropic = require('@anthropic-ai/sdk');

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// POST /api/ai/recommend
// Returns AI-powered next course recommendation
router.post('/recommend', async (req, res) => {
  const { completedCourses, inProgressCourses, remainingCourses, program, pace } = req.body;

  if (!remainingCourses?.length) {
    return res.json({ recommendation: null, message: 'No remaining courses!' });
  }

  const prompt = `You are an academic advisor for WGU (Western Governors University), helping a student decide which course to take next.

Student profile:
- Program: ${program}
- Monthly pace: ${pace} credit units/month
- Completed courses: ${completedCourses.map((c) => `${c.code} - ${c.name}`).join(', ') || 'None yet'}
- Currently in progress: ${inProgressCourses.map((c) => c.code).join(', ') || 'None'}

Available remaining courses (pick the BEST next one):
${remainingCourses
  .map(
    (c) =>
      `- ${c.code}: ${c.name} | ${c.creditUnits} CUs | Difficulty: ${c.difficulty}/5 | Avg: ${c.avgDays} days | Type: ${c.type}`
  )
  .join('\n')}

Recommend the single best course to take next. Consider:
1. Prerequisites are already satisfied
2. Quick wins build momentum
3. Balance difficulty with pace
4. Group related courses when possible

Respond in JSON format:
{
  "courseCode": "XXXX",
  "courseName": "...",
  "reason": "2-3 sentence explanation",
  "tip": "One practical study tip for this specific course",
  "estimatedDays": number
}`;

  try {
    const message = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 500,
      messages: [{ role: 'user', content: prompt }],
    });

    const text = message.content[0].text;
    // Parse JSON from response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const recommendation = JSON.parse(jsonMatch[0]);
      res.json({ recommendation });
    } else {
      res.json({ recommendation: null, raw: text });
    }
  } catch (err) {
    console.error('AI recommend error:', err.message);
    res.status(500).json({ error: 'AI recommendation failed', detail: err.message });
  }
});

// POST /api/ai/summarize-reddit
// Summarizes top Reddit posts for a course into key tips
router.post('/summarize-reddit', async (req, res) => {
  const { courseCode, courseName, posts } = req.body;

  if (!posts?.length) {
    return res.json({ summary: null });
  }

  const postsText = posts
    .slice(0, 5)
    .map((p) => `Title: ${p.title}\n${p.selftext}`)
    .join('\n\n---\n\n');

  const prompt = `Summarize the key study tips and advice from these WGU student Reddit posts about the course "${courseCode} - ${courseName}".

Posts:
${postsText}

Extract:
1. Top 3-5 actionable study tips
2. Common pitfalls to avoid
3. Best free resources mentioned
4. Realistic time estimate

Be concise, practical, and student-focused. Format as JSON:
{
  "tips": ["tip1", "tip2", ...],
  "pitfalls": ["pitfall1", ...],
  "resources": ["resource1", ...],
  "timeEstimate": "X-Y weeks"
}`;

  try {
    const message = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 600,
      messages: [{ role: 'user', content: prompt }],
    });

    const text = message.content[0].text;
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      res.json({ summary: JSON.parse(jsonMatch[0]) });
    } else {
      res.json({ summary: null, raw: text });
    }
  } catch (err) {
    console.error('AI summarize error:', err.message);
    res.status(500).json({ error: 'AI summarization failed' });
  }
});

module.exports = router;
