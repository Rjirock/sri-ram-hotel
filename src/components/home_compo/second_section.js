import {
  Building2,
  BedDouble,
  ShieldCheck,
  MapPin,
  Users,
  Wallet,
} from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 relative">
          {/* Accent Line */}
          <span className="inline-block w-16 h-1 bg-yellow-400 mb-4 rounded-full" />

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Why Choose Sri Ram Hotel
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Comfort, convenience, and honest hospitality — everything you need
            for a pleasant and peaceful stay.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* Left Content */}
          <div className="space-y-6 text-gray-600 leading-relaxed text-[15.5px]">
            <p>
              Sri Ram Hotel offers a comfortable and peaceful stay for business travelers,
              families, and solo guests. Our focus is on cleanliness, essential amenities,
              and warm hospitality to ensure every guest feels relaxed and well cared for.
            </p>

            <p>
              Thoughtfully designed to provide a premium experience without unnecessary
              luxury, our hotel maintains honest pricing while delivering reliable comfort
              and a welcoming atmosphere.
            </p>

            <p>
              Conveniently located with easy access to key areas of the city, Sri Ram Hotel
              provides a calm environment where guests can rest, recharge, and enjoy a
              worry-free stay — whether visiting for work or leisure.
            </p>

            <p>
              Our commitment to consistency, comfort, and guest satisfaction has made us a
              trusted choice for travelers seeking quality accommodation with genuine
              service.
            </p>
          </div>

          {/* Right Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: BedDouble,
                title: "Clean & Comfortable Rooms",
                desc: "Well-maintained rooms designed for rest and relaxation.",
              },
              {
                icon: ShieldCheck,
                title: "Peaceful Environment",
                desc: "A calm setting ideal for families and business travelers.",
              },
              {
                icon: Building2,
                title: "Modern Essentials",
                desc: "Wi-Fi, power backup, and everyday comforts included.",
              },
              {
                icon: MapPin,
                title: "Easy City Access",
                desc: "Conveniently located with smooth connectivity.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-6 rounded-xl border border-gray-100
                    shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div className="w-11 h-11 flex items-center justify-center rounded-lg
                    bg-yellow-100 text-yellow-600 mb-4 group-hover:bg-yellow-400 group-hover:text-black transition">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-gray-900 font-medium">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
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
