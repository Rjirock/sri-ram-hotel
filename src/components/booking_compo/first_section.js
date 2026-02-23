import {
    CalendarCheck,
    CreditCard,
    ShieldCheck,
    CheckCircle,
    ArrowRight,
  } from "lucide-react";
  import Link from "next/link";
  
  export default function BookingHeroSection() {
    return (
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 py-32">
        
        {/* Decorative Gradient Shape */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-yellow-200/40 rounded-full blur-3xl" />
  
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
  
            {/* LEFT CONTENT */}
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-yellow-600 mb-4">
                <span className="w-10 h-[2px] bg-yellow-400" />
                SECURE HOTEL BOOKING
              </span>
  
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold text-gray-900 leading-tight">
                Book Your Stay <br />
                <span className="text-yellow-500">With Complete Confidence</span>
              </h1>
  
              <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
                Sri Ram Hotel offers a seamless room booking experience with
                transparent pricing, instant confirmation, and secure online
                payments — designed to make your stay stress-free from the very
                beginning.
              </p>
  
              {/* Narrative Points */}
              <div className="mt-8 space-y-4 text-gray-600">
                <p>
                  Browse our curated list of rooms with complete details and clear
                  per-day pricing. No hidden charges. No confusion.
                </p>
                <p>
                  Once selected, complete your booking securely using our trusted
                  payment gateway and receive instant confirmation.
                </p>
              </div>
  
              {/* CTA */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#rooms"
                  className="inline-flex items-center gap-2 px-8 py-4
                  bg-yellow-500 text-black rounded-md font-medium
                  hover:bg-yellow-400 transition"
                >
                  View Available Rooms
                  <ArrowRight size={18} />
                </Link>
  
                <span className="text-sm text-gray-500 flex items-center">
                  ✔ Secure Payments &nbsp; ✔ Instant Confirmation
                </span>
              </div>
            </div>
  
            {/* RIGHT PREMIUM FEATURE CARDS */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: CalendarCheck,
                  title: "Easy Room Selection",
                  desc: "Compare rooms with clear pricing and complete details.",
                },
                {
                  icon: CreditCard,
                  title: "Secure Online Payment",
                  desc: "Trusted and encrypted payment process.",
                },
                {
                  icon: ShieldCheck,
                  title: "Transparent Pricing",
                  desc: "No hidden charges or last-minute surprises.",
                },
                {
                  icon: CheckCircle,
                  title: "Instant Confirmation",
                  desc: "Your booking is confirmed immediately after payment.",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white/80 backdrop-blur
                    border border-white rounded-2xl p-6 shadow-lg
                    hover:shadow-2xl transition-all duration-300
                    hover:-translate-y-1"
                  >
                    {/* Icon */}
                    <div
                      className="w-14 h-14 flex items-center justify-center rounded-xl
                      bg-yellow-100 text-yellow-600 mb-5
                      group-hover:bg-yellow-400 group-hover:text-black transition"
                    >
                      <Icon size={24} />
                    </div>
  
                    <h3 className="text-gray-900 font-medium text-lg">
                      {item.title}
                    </h3>
  
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
  
          </div>
        </div>
      </section>
    );
  }