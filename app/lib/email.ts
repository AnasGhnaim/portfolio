import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactEmail {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(payload: ContactEmail): Promise<void> {
  const { name, email, message } = payload;

  await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: ["ghnaimanas20@gmail.com"],
    subject: `New Message from ${name}`,
    replyTo: email,
    html: `
      <h3>New Contact Message</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });
}
