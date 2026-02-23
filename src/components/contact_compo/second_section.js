"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Send,
  CheckCircle,
  XCircle,
  PhoneCall,
  MessageCircle,
} from "lucide-react";

export default function ContactFormSection() {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null); // success | error
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus(null);

    emailjs
      .sendForm(
        "service_gpm1ptg",
        "template_y0h3df5",
        formRef.current,
        "D3lCJ7nw48FWkfwe1"
      )
      .then(
        () => {
          setStatus("success");
          setMessage(
            "Thank you for contacting us. We will get back to you shortly."
          );
          formRef.current.reset();
          setTimeout(() => setStatus(null), 5000);
        },
        () => {
          setStatus("error");
          setMessage("Something went wrong. Please try again later.");
          setTimeout(() => setStatus(null), 5000);
        }
      );
  };

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block w-16 h-1 bg-yellow-400 rounded-full mb-4" />
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Send Us a Message
          </h2>
          <p className="mt-4 text-gray-600">
            Have a question or special request? Fill out the form below and our
            team will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* FORM */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">

              <input
                type="text"
                name="from_name"
                required
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none"
              />

              <input
                type="tel"
                name="phone"
                required
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none"
              />

              <input
                type="email"
                name="from_email"
                required
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none"
              />

              <textarea
                name="message"
                rows="5"
                required
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none resize-none"
              />

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3 bg-yellow-500 text-black font-medium rounded-md hover:bg-yellow-400 transition"
              >
                Send Message
                <Send size={18} />
              </button>

              {/* INLINE ALERT */}
              {status && (
                <div
                  className={`mt-4 flex items-start gap-3 p-4 rounded-lg text-sm transition-all
                  ${
                    status === "success"
                      ? "bg-green-50 border border-green-200 text-green-700"
                      : "bg-red-50 border border-red-200 text-red-700"
                  }`}
                >
                  {status === "success" ? (
                    <CheckCircle size={20} />
                  ) : (
                    <XCircle size={20} />
                  )}
                  <span>{message}</span>
                </div>
              )}
            </form>
          </div>

          {/* QUICK HELP */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">
                Prefer Quick Assistance?
              </h3>

              <div className="mt-6 space-y-4">
                <a href="tel:+919631281526" className="flex items-center gap-3 hover:text-yellow-600">
                  <PhoneCall size={20} />
                  Call Front Desk
                </a>

                <a href="https://wa.me/919631281526" target="_blank" className="flex items-center gap-3 hover:text-green-600">
                  <MessageCircle size={20} />
                  WhatsApp Support
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}