import { Resend } from "resend";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const body = req.body || JSON.parse(await streamToString(req));

    const {
      name,
      email,
      company,
      website,
      automationGoals,
      currentAiUse
    } = body;

    if (!name || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return res.status(500).json({ error: "Missing API key" });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const result = await resend.emails.send({
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

    console.log("RESEND RESULT:", result);

    return res.status(200).json({ ok: true });

  } catch (err) {
    console.error("API ERROR:", err);
    return res.status(500).json({
      error: err.message || "Internal Server Error"
    });
  }
}

async function streamToString(readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString("utf8");
}
