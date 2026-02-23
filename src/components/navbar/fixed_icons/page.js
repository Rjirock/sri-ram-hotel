"use client";

import { useState } from "react";
import {
  ChevronUp,
  ChevronDown,
  MessageCircle,
  Instagram,
  Facebook,
} from "lucide-react";

export default function FloatingSocialBar() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="fixed right-6 bottom-6 z-50 flex flex-col items-center"
      aria-label="Social contact buttons"
    >
      {/* SOCIAL ICONS */}
      <div
        className={`flex flex-col gap-4 mb-4 transition-all duration-500 ease-out
        ${open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"}
        `}
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/+91 9631281526"
          target="_blank"
          className="w-14 h-14 flex items-center justify-center rounded-full
          bg-green-500 text-white shadow-2xl
          hover:scale-110 transition-transform"
        >
          <MessageCircle size={24} />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          className="w-14 h-14 flex items-center justify-center rounded-full
          bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500
          text-white shadow-2xl hover:scale-110 transition-transform"
        >
          <Instagram size={24} />
        </a>

        {/* Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          className="w-14 h-14 flex items-center justify-center rounded-full
          bg-blue-600 text-white shadow-2xl
          hover:scale-110 transition-transform"
        >
          <Facebook size={24} />
        </a>
      </div>

      {/* TOGGLE BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 flex items-center justify-center rounded-full
        bg-gray-900 text-white shadow-2xl
        hover:bg-gray-800 transition"
        aria-label="Toggle social buttons"
      >
        {open ? <ChevronDown size={24} /> : <ChevronUp size={24} />}
      </button>
    </div>
  );
}