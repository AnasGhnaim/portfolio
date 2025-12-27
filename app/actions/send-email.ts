/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { headers } from "next/headers";
import { sendContactEmail } from "@/app/lib/email";

interface ActionResult {
  success: boolean;
  error?: string;
}

const rateLimit: Map<string, number> = (global as any).rateLimit || new Map();

(global as any).rateLimit = rateLimit;

const LIMIT_TIME = 10 * 60 * 1000;

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(text: string): string {
  return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function sendEmail(
  _prevState: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for")?.split(",")[0] || "unknown";

  const now = Date.now();
  const lastSent = rateLimit.get(ip);

  if (lastSent && now - lastSent < LIMIT_TIME) {
    return {
      success: false,
      error: "Please wait a few minutes before sending another message.",
    };
  }

  let name = formData.get("name") as string;
  let email = formData.get("email") as string;
  let message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }

  if (name.length < 2 || name.length > 50) {
    return { success: false, error: "Invalid name length." };
  }

  if (!isValidEmail(email)) {
    return { success: false, error: "Invalid email address." };
  }

  if (message.length < 10 || message.length > 1000) {
    return { success: false, error: "Invalid message length." };
  }

  name = sanitize(name);
  email = sanitize(email);
  message = sanitize(message);

  try {
    await sendContactEmail({ name, email, message });
    rateLimit.set(ip, now);
    return { success: true };
  } catch (error) {
    console.error("Email send error:", error);
    return {
      success: false,
      error: "Failed to send message. Please try again later.",
    };
  }
}
