"use client";

import { useState } from "react";
import { sendEmail } from "@/app/actions/send-email";

type EmailStatus = { success?: boolean; error?: string } | null;

export default function EmailForm() {
  const [status, setStatus] = useState<EmailStatus>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function action(formData: any) {
    const result = (await sendEmail(formData)) as {
      success?: boolean;
      error?: string;
    } | null;
    setStatus(result);
  }

  return (
    <div className="relative z-10 mt-16 flex justify-center px-6">
      <form
        action={action}
        className="w-full max-w-xl bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-indigo-500/20"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-indigo-400">
          Send Me a Message
        </h2>

        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-gray-300">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-lg bg-black/60 border border-indigo-500/30 text-white"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-gray-300">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 rounded-lg bg-black/60 border border-indigo-500/30 text-white"
          />
        </div>

        <div className="mb-8">
          <label htmlFor="message" className="block mb-2 text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-3 rounded-lg bg-black/60 border border-indigo-500/30 text-white resize-none"
          />
        </div>

        {status?.success && (
          <p className="mb-4 text-green-400 text-center">
            Message sent successfully ✅
          </p>
        )}

        {status?.error && (
          <p className="mb-4 text-red-400 text-center">{status.error}</p>
        )}

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
