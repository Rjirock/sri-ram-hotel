import Image from "next/image";
import Link from "next/link";

const rooms = [
  {
    title: "Deluxe Room",
    image: "/rooms/deluxe.jpg",
    desc: "Spacious and comfortable room with modern amenities, ideal for couples and business travelers.",
    features: ["Free Wi-Fi", "Air Conditioning", "Room Service"],
  },
  {
    title: "Executive Room",
    image: "/rooms/executive.jpg",
    desc: "Premium comfort with extra space, peaceful ambience, and added convenience for longer stays.",
    features: ["Breakfast Included", "Power Backup", "Work Desk"],
  },
  {
    title: "Family Room",
    image: "/rooms/family.jpg",
    desc: "Perfect choice for families, offering ample space, comfort, and a relaxed environment.",
    features: ["Spacious Layout", "Extra Bedding", "Family Friendly"],
  },
];

export default function RoomsSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block w-16 h-1 bg-yellow-400 rounded-full mb-4" />
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Comfortable Rooms for Every Stay
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Choose from our thoughtfully designed rooms that offer comfort,
            cleanliness, and essential amenities for a peaceful stay.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-sm
              hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900">
                  {room.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {room.desc}
                </p>

                {/* Features */}
                <ul className="mt-4 space-y-1 text-sm text-gray-500">
                  {room.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/booking"
                  className="inline-block mt-6 text-sm font-medium text-yellow-600
                  hover:text-yellow-500 transition"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}