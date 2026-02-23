import {
    Wifi,
    Car,
    Coffee,
    ShieldCheck,
    Fan,
    Clock,
    Users,
    PhoneCall,
  } from "lucide-react";
  
  const amenities = [
    {
      icon: Wifi,
      title: "Free High-Speed Wi-Fi",
      desc: "Stay connected with reliable internet access throughout the hotel.",
    },
    {
      icon: Car,
      title: "Parking Facility",
      desc: "Safe and convenient parking space available for guests.",
    },
    {
      icon: Coffee,
      title: "Complimentary Tea / Coffee",
      desc: "Enjoy a refreshing start to your day with complimentary beverages.",
    },
    {
      icon: Fan,
      title: "Air-Conditioned Rooms",
      desc: "Comfortable rooms with proper ventilation and cooling.",
    },
    {
      icon: ShieldCheck,
      title: "Safe & Secure Stay",
      desc: "Peaceful environment with attention to guest safety.",
    },
    {
      icon: Clock,
      title: "24×7 Front Desk",
      desc: "Assistance available round-the-clock for your convenience.",
    },
    {
      icon: Users,
      title: "Family Friendly",
      desc: "Comfortable environment suitable for families and groups.",
    },
    {
      icon: PhoneCall,
      title: "Room Service Support",
      desc: "Quick response and support whenever you need assistance.",
    },
  ];
  
  export default function AmenitiesSection() {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
  
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <span className="inline-block w-16 h-1 bg-yellow-400 rounded-full mb-4" />
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Amenities & Facilities
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We provide all essential facilities to ensure a comfortable,
              convenient, and worry-free stay for every guest.
            </p>
          </div>
  
          {/* Amenities Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {amenities.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-gray-50 rounded-xl p-6 border border-gray-100
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
  
                  {/* Text */}
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
      </section>
    );
  }