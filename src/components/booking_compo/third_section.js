import {
    Search,
    BedDouble,
    CreditCard,
    CheckCircle,
    ShieldCheck,
  } from "lucide-react";
  
  export default function BookingStepsSection() {
    return (
      <section className="py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
  
          {/* Section Header */}
          <div className="max-w-3xl mb-20">
            <span className="inline-block w-16 h-1 bg-yellow-400 rounded-full mb-4" />
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              How Our Booking Process Works
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Booking your stay at Sri Ram Hotel is simple, secure, and transparent.
              Follow these easy steps to confirm your room in minutes.
            </p>
          </div>
  
          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-8">
  
            {[
              {
                icon: Search,
                title: "Browse Rooms",
                desc: "Explore available rooms with clear pricing and room details.",
                step: "01",
              },
              {
                icon: BedDouble,
                title: "Select Your Room",
                desc: "Choose the room that best fits your comfort and budget.",
                step: "02",
              },
              {
                icon: CreditCard,
                title: "Secure Payment",
                desc: "Pay safely using our trusted and encrypted payment gateway.",
                step: "03",
              },
              {
                icon: CheckCircle,
                title: "Instant Confirmation",
                desc: "Receive immediate booking confirmation after payment.",
                step: "04",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="relative group bg-white rounded-2xl p-8
                  border border-gray-100 shadow-sm
                  hover:shadow-xl transition-all duration-300
                  hover:-translate-y-1"
                >
                  {/* Step Number */}
                  <span className="absolute -top-4 -right-4 w-10 h-10
                  rounded-full bg-yellow-400 text-black
                  flex items-center justify-center font-semibold text-sm">
                    {item.step}
                  </span>
  
                  {/* Icon */}
                  <div
                    className="w-14 h-14 flex items-center justify-center rounded-xl
                    bg-yellow-100 text-yellow-600 mb-6
                    group-hover:bg-yellow-400 group-hover:text-black transition"
                  >
                    <Icon size={26} />
                  </div>
  
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
  
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
  
          {/* Trust Statement */}
          <div className="mt-20 bg-white rounded-2xl border border-gray-100
          shadow-sm p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg
              bg-green-100 text-green-600">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="text-gray-900 font-medium">
                  100% Secure & Trusted Booking
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  Your payment information is protected with industry-standard
                  security. No hidden charges, no surprises.
                </p>
              </div>
            </div>
  
            <p className="text-sm text-gray-500">
              ✔ Secure Payment &nbsp; ✔ Transparent Pricing &nbsp; ✔ Instant Confirmation
            </p>
          </div>
  
        </div>
      </section>
    );
  }