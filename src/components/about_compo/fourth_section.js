import Link from "next/link";
import { ShieldCheck, ThumbsUp, Users } from "lucide-react";

export default function AboutFinalSection() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="inline-block w-16 h-1 bg-yellow-400 rounded-full mb-4" />
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Why Guests Trust Sri Ram Hotel
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Trust is built through consistency, care, and genuine hospitality.
            At Sri Ram Hotel, every detail is focused on making your stay safe,
            comfortable, and worry-free.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* Left Content */}
          <div className="space-y-6 text-gray-600 leading-relaxed text-[15.5px]">
            <p>
              Over the years, Sri Ram Hotel has become a preferred choice for
              travelers who value cleanliness, peaceful surroundings, and honest
              service. Our guests trust us because we deliver what we promise —
              a comfortable stay without unnecessary complications.
            </p>

            <p>
              We maintain high standards of hygiene, transparency in pricing,
              and respectful guest service. Whether you are staying for a short
              visit or an extended period, our team ensures a calm and welcoming
              environment throughout your stay.
            </p>

            <p>
              From solo travelers and business professionals to families, our
              hotel is designed to meet practical needs while providing a
              premium experience that feels reassuring and dependable.
            </p>
          </div>

          {/* Right Highlights */}
          <div className="space-y-6">

            {[
              {
                icon: ShieldCheck,
                title: "Reliable & Safe Stay",
                desc: "A secure environment with consistent service standards.",
              },
              {
                icon: ThumbsUp,
                title: "Proven Guest Satisfaction",
                desc: "Trusted by returning guests for comfort and peace of mind.",
              },
              {
                icon: Users,
                title: "Suitable for All Travelers",
                desc: "Ideal for business, family, and solo stays.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-100
                  shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 flex items-center justify-center rounded-lg
                    bg-yellow-100 text-yellow-600">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-medium">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>

        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-gray-900">
            Experience Comfort You Can Trust
          </h3>
          <p className="mt-3 text-gray-600">
            Book your stay with confidence and enjoy a peaceful, reliable
            hospitality experience at Sri Ram Hotel.
          </p>

          <Link
            href="/booking"
            className="inline-block mt-8 px-8 py-3
            bg-yellow-500 text-black font-medium rounded-md
            hover:bg-yellow-400 transition"
          >
            Book Your Stay
          </Link>
        </div>

      </div>
    </section>
  );
}