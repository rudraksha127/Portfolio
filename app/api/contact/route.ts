import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, 5000);
}

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const payload = body as Record<string, unknown>;
  const name = sanitize(payload.name);
  const email = sanitize(payload.email);
  const subject = sanitize(payload.subject);
  const message = sanitize(payload.message);

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { success: false, message: "All fields are required." },
      { status: 422 }
    );
  }

  if (name.length < 2) {
    return NextResponse.json(
      { success: false, message: "Name must be at least 2 characters." },
      { status: 422 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { success: false, message: "Please provide a valid email address." },
      { status: 422 }
    );
  }

  if (subject.length < 3) {
    return NextResponse.json(
      { success: false, message: "Subject must be at least 3 characters." },
      { status: 422 }
    );
  }

  if (message.length < 10) {
    return NextResponse.json(
      { success: false, message: "Message must be at least 10 characters." },
      { status: 422 }
    );
  }

  const contactData: ContactPayload = { name, email, subject, message };

  // If SMTP env vars are configured, you can add nodemailer here.
  // npm install nodemailer @types/nodemailer
  // Then uncomment and implement the transporter below.
  // See .env.example for the required SMTP_HOST, SMTP_USER, SMTP_PASS variables.
  if (
    process.env.SMTP_HOST &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS
  ) {
    // Example (requires nodemailer package):
    // const nodemailer = require("nodemailer");
    // const transporter = nodemailer.createTransport({ ... });
    // await transporter.sendMail({ ... });
    console.info("[contact] SMTP configured but nodemailer not installed. Run: npm install nodemailer");
  } else {
    // No SMTP configured — log the submission (visible in server logs / Vercel dashboard)
    console.info("[contact] New message received:", {
      name: contactData.name,
      email: contactData.email,
      subject: contactData.subject,
      preview: contactData.message.slice(0, 80),
    });
  }

  return NextResponse.json(
    {
      success: true,
      message:
        "Thanks for reaching out! I'll get back to you within 24–48 hours.",
    },
    { status: 200 }
  );
}
