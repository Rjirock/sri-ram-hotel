import { HeartHandshake, ShieldCheck, Sparkles, Smile } from "lucide-react";

export default function AboutValuesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block w-16 h-1 bg-yellow-400 rounded-full mb-4" />
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Our Values & Hospitality Philosophy
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            At Sri Ram Hotel, our approach to hospitality is guided by simple,
            honest values that prioritize comfort, trust, and guest satisfaction.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            {
              icon: HeartHandshake,
              title: "Warm Hospitality",
              desc: "We believe every guest deserves respectful, friendly, and attentive service throughout their stay.",
            },
            {
              icon: ShieldCheck,
              title: "Trust & Transparency",
              desc: "Clear communication, honest pricing, and no hidden charges form the foundation of our operations.",
            },
            {
              icon: Sparkles,
              title: "Cleanliness & Comfort",
              desc: "We maintain high standards of hygiene and room care to ensure a safe and pleasant environment.",
            },
            {
              icon: Smile,
              title: "Guest Satisfaction",
              desc: "Your comfort and peace of mind guide every decision we make, big or small.",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-gray-50 p-6 rounded-xl border border-gray-100
                hover:bg-white hover:shadow-lg transition-all duration-300
                hover:-translate-y-1"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-lg
                  bg-yellow-100 text-yellow-600 mb-4
                  group-hover:bg-yellow-400 group-hover:text-black transition"
                >
                  <Icon size={22} />
                </div>

                <h3 className="text-gray-900 font-medium text-lg">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>

        {/* Closing Statement */}
        <div className="max-w-4xl mt-16 text-gray-600 leading-relaxed">
          <p>
            These values shape the way we serve our guests every day. From the
            moment you arrive until your departure, our goal is to provide a
            calm, comfortable, and dependable stay that feels both welcoming
            and reassuring.
          </p>
        </div>

      </div>
    </section>
  );
}