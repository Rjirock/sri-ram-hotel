"use client";
import Link from "next/link";
import Image from "next/image";

const rooms = [
  {
    name: "Deluxe Room",
    image: "/hotel_logo.png",
    price: 1800,
    mrp: 2200,
    features: ["Free Wi-Fi", "Air Conditioning", "Room Service"],
  },
  {
    name: "Super Deluxe Room",
    image: "/hotel_logo.png",
    price: 2200,
    mrp: 2600,
    features: ["King Bed", "AC", "Free Wi-Fi"],
  },
  {
    name: "Executive Room",
    image: "/hotel_logo.png",
    price: 2500,
    mrp: 3000,
    features: ["Work Desk", "Breakfast Included", "Power Backup"],
  },
  {
    name: "Premium Executive Room",
    image: "/hotel_logo.png",
    price: 2800,
    mrp: 3400,
    features: ["Extra Space", "Premium Bedding", "AC"],
  },
  {
    name: "Family Room",
    image: "/hotel_logo.png",
    price: 3200,
    mrp: 3800,
    features: ["Spacious Room", "Extra Bedding", "Family Friendly"],
  },
  {
    name: "Luxury Family Suite",
    image: "/hotel_logo.png",
    price: 3800,
    mrp: 4500,
    features: ["Large Suite", "Sofa Area", "Ideal for Families"],
  },
  {
    name: "Business Class Room",
    image: "/hotel_logo.png",
    price: 2600,
    mrp: 3100,
    features: ["Work Desk", "High-Speed Wi-Fi", "Quiet Environment"],
  },
  {
    name: "Economy Room",
    image: "/hotel_logo.png",
    price: 1400,
    mrp: 1700,
    features: ["Budget Friendly", "Clean & Comfortable", "Wi-Fi"],
  },
];

export default function RoomsBookingSection() {
  return (
    <section id="rooms" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block w-16 h-1 bg-yellow-400 rounded-full mb-4" />
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Choose Your Room
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Select from our wide range of well-maintained rooms designed to suit
            different needs, preferences, and budgets.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl overflow-hidden
              border border-gray-100 hover:shadow-2xl transition-all duration-300
              hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6 bg-white">
                <h3 className="text-lg font-semibold text-gray-900">
                  {room.name}
                </h3>

                {/* Pricing */}
                <div className="mt-3 flex items-center gap-3">
                  <span className="text-2xl font-semibold text-gray-900">
                    ₹{room.price}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    ₹{room.mrp}
                  </span>
                  <span className="text-xs text-green-600 font-medium">
                    per night
                  </span>
                </div>

                {/* Features */}
                <ul className="mt-4 space-y-1 text-sm text-gray-600">
                  {room.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href="/contact_us">
                <button
                  className="mt-6 w-full py-3 rounded-md
                  bg-yellow-500 text-black font-medium
                  hover:bg-yellow-400 transition"
                >
                  Book Now
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}