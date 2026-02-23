import { Hotel, Users, ShieldCheck, ThumbsUp } from "lucide-react";

export default function AboutHeroSection() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-4xl mb-16">
          <span className="inline-block w-16 h-1 bg-yellow-400 rounded-full mb-4" />

          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
            About Sri Ram Hotel
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            A trusted destination for comfortable stays, honest service,
            and peaceful hospitality.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Content */}
          <div className="space-y-6 text-gray-600 leading-relaxed text-[15.5px]">
            <p>
              Sri Ram Hotel is a thoughtfully managed hotel dedicated to providing
              a comfortable, clean, and peaceful stay for guests visiting the city
              for business, family occasions, or leisure travel.
            </p>

            <p>
              Our focus has always been on delivering what truly matters —
              well-maintained rooms, essential modern amenities, honest pricing,
              and respectful service. We believe that a premium stay does not
              require unnecessary luxury, but rather consistency, cleanliness,
              and care.
            </p>

            <p>
              Conveniently located with easy access to major transport points and
              city attractions, Sri Ram Hotel offers a calm environment where
              guests can relax, recharge, and feel at home throughout their stay.
            </p>

            <p>
              Over time, we have earned the trust of travelers by maintaining
              high standards of hospitality and creating a welcoming atmosphere
              for individuals, families, and business professionals alike.
            </p>
          </div>

          {/* Right Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">

            {[
              {
                icon: Hotel,
                title: "Comfort-Oriented Stay",
                desc: "Designed to provide rest, relaxation, and everyday comfort.",
              },
              {
                icon: Users,
                title: "Guest-Centered Service",
                desc: "Friendly staff focused on making every stay pleasant.",
              },
              {
                icon: ShieldCheck,
                title: "Safe & Reliable",
                desc: "A secure and peaceful environment for all guests.",
              },
              {
                icon: ThumbsUp,
                title: "Trusted by Travelers",
                desc: "Preferred by business and family guests alike.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-100
                  shadow-sm hover:shadow-lg transition-all duration-300
                  hover:-translate-y-1"
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-lg
                    bg-yellow-100 text-yellow-600 mb-4"
                  >
                    <Icon size={22} />
                  </div>

                  <h3 className="text-gray-900 font-medium">
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