import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const {
      name,
      email,
      company,
      website,
      automationGoals,
      currentAiUse
    } = req.body;

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Stratagentic <hello@stratagentic.ai>",
      to: "hello@stratagentic.ai",
      subject: "New Lead – Stratagentic",
      html: `
        <h2>New Lead</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Automation Goals:</strong><br>${automationGoals}</p>
        <p><strong>Current AI Use:</strong><br>${currentAiUse}</p>
      `
    });

    res.status(200).json({ ok: true });

  } catch (err) {
    res.status(500).json({
      error: err.message || "Internal Server Error"
    });
  }
}
