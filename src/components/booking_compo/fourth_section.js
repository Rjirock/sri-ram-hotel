import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function BookingFinalCTA() {
  return (
    <section className="relative overflow-hidden py-28 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      
      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 text-center text-white">

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-tight">
          Ready to Confirm Your Stay?
        </h2>

        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Choose your preferred room, enjoy transparent pricing, and complete
          your booking securely with instant confirmation at Sri Ram Hotel.
        </p>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="#rooms"
            className="inline-flex items-center gap-3 px-10 py-4
            bg-yellow-500 text-black font-medium rounded-md
            hover:bg-yellow-400 transition"
          >
            Book Your Room Now
            <ArrowRight size={18} />
          </Link>

          <div className="flex items-center gap-2 text-sm text-gray-300">
            <ShieldCheck size={16} />
            Secure Payment • Instant Confirmation
          </div>
        </div>

      </div>
    </section>
  );
}