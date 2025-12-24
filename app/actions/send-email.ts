"use server";

import { Resend } from "resend";
import { headers } from "next/headers";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limit
const rateLimit = new Map();
const LIMIT_TIME = 10 * 60 * 1000; // 10 minutes

//blocks obvious fake emails
function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

//prevents HTML / script injection
function sanitize(text: string) {
  return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function sendEmail(formData: FormData) {
  const headersList = headers();
  const ip =
    (await headersList).get("x-forwarded-for")?.split(",")[0] || "unknown";

  const now = Date.now();
  const lastSent = rateLimit.get(ip);

  if (lastSent && now - lastSent < LIMIT_TIME) {
    return {
      success: false,
      error: "Please wait a few minutes before sending another message.",
    };
  }

  const rawName = formData.get("name");
  const rawEmail = formData.get("email");
  const rawMessage = formData.get("message");

  if (
    !rawName ||
    !rawEmail ||
    !rawMessage ||
    typeof rawName !== "string" ||
    typeof rawEmail !== "string" ||
    typeof rawMessage !== "string"
  ) {
    return { success: false, error: "All fields are required" };
  }

  let name = rawName.trim();
  let email = rawEmail.trim();
  let message = rawMessage.trim();

  if (name.length < 2 || name.length > 50) {
    return {
      success: false,
      error: "Name must be between 2 and 50 characters.",
    };
  }

  if (!isValidEmail(email) || email.length > 100) {
    return {
      success: false,
      error: "Please enter a valid email address.",
    };
  }

  if (message.length < 10 || message.length > 1000) {
    return {
      success: false,
      error: "Message must be between 10 and 1000 characters.",
    };
  }

  name = sanitize(name);
  email = sanitize(email);
  message = sanitize(message);

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["ghnaimanas20@gmail.com"],
      subject: `New Message from ${name}`,
      replyTo: String(email),
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    rateLimit.set(ip, now);

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to send email" };
  }
}
