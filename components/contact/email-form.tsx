"use client";

import { useActionState } from "react";
import { sendEmail } from "@/app/actions/send-email";
import Spinner from "./spinner";

type EmailState = {
  success: boolean;
  error?: string;
};

const initialState: EmailState = { success: false };

export default function EmailForm() {
  const [state, action, pending] = useActionState(sendEmail, initialState);

  return (
    <div className="relative z-10 mt-16 flex justify-center px-6">
      <form
        action={action}
        className="w-full max-w-xl bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-indigo-500/20"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-indigo-400">
          Send Me a Message
        </h2>

        {/* Name */}
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

        {/* Email */}
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

        {/* Message */}
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

        {/* Feedback */}
        {state.success && (
          <p className="mb-4 text-green-400 text-center">
            Message sent successfully ✅
          </p>
        )}

        {state.error && (
          <p className="mb-4 text-red-400 text-center">{state.error}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={pending}
          className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition flex items-center justify-center gap-2 disabled:opacity-60"
        >
          {pending ? (
            <>
              <Spinner />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
}
