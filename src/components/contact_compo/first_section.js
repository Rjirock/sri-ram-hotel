import {
    PhoneCall,
    Mail,
    MapPin,
    MessageCircle,
    Clock,
    ShieldCheck,
  } from "lucide-react";
  import Link from "next/link";
  
  export default function ContactSupportSection() {
    return (
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
  
          {/* TOP INTRO */}
          <div className="max-w-4xl mb-16">
            <span className="inline-block px-4 py-1.5 text-xs font-medium
            bg-yellow-100 text-yellow-700 rounded-full mb-4">
              GUEST SUPPORT DESK
            </span>
  
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-gray-900 leading-tight">
              Contact & Guest Assistance
            </h1>
  
            <p className="mt-5 text-gray-600 leading-relaxed text-lg">
              Our guest support desk is available to assist you with bookings,
              room availability, stay-related questions, directions, and special
              requests. Choose the most convenient way to reach us.
            </p>
          </div>
  
          {/* HORIZONTAL ACTION BAR */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
  
            {/* Call */}
            <a
              href="tel:+91 963128156"
              className="group flex items-center gap-5 bg-gray-50
              border border-gray-200 rounded-2xl p-6
              hover:bg-yellow-50 hover:border-yellow-200
              transition-all"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl
              bg-yellow-100 text-yellow-600 group-hover:bg-yellow-400 group-hover:text-black transition">
                <PhoneCall size={24} />
              </div>
              <div>
                <h3 className="text-gray-900 font-medium">
                  Call Front Desk
                </h3>
                <p className="text-sm text-gray-600">
                  Immediate assistance & booking help
                </p>
              </div>
            </a>
  
            {/* WhatsApp */}
            <Link
              href="https://wa.me/+91 963128156"
              target="_blank"
              className="group flex items-center gap-5 bg-gray-50
              border border-gray-200 rounded-2xl p-6
              hover:bg-green-50 hover:border-green-200
              transition-all"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl
              bg-green-100 text-green-600">
                <MessageCircle size={24} />
              </div>
              <div>
                <h3 className="text-gray-900 font-medium">
                  WhatsApp Support
                </h3>
                <p className="text-sm text-gray-600">
                  Quick messages & document sharing
                </p>
              </div>
            </Link>
  
            {/* Email */}
            <a
              href="mailto:sriramhotel@gmail.com"
              className="group flex items-center gap-5 bg-gray-50
              border border-gray-200 rounded-2xl p-6
              hover:bg-blue-50 hover:border-blue-200
              transition-all"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl
              bg-blue-100 text-blue-600">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-gray-900 font-medium">
                  Email Support
                </h3>
                <p className="text-sm text-gray-600">
                  Detailed queries & confirmations
                </p>
              </div>
            </a>
          </div>
  
          {/* DETAILED OPTIONS */}
          <div className="grid lg:grid-cols-3 gap-10">
  
            {/* Address */}
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl
              bg-yellow-100 text-yellow-600 mb-4">
                <MapPin size={22} />
              </div>
              <h4 className="text-gray-900 font-medium mb-2">
                Hotel Location
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Ranchi Road, Ramgarh Cantonment, Jharkhand 829117
              </p>
            </div>
  
            {/* Working Hours */}
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl
              bg-yellow-100 text-yellow-600 mb-4">
                <Clock size={22} />
              </div>
              <h4 className="text-gray-900 font-medium mb-2">
                Support Hours
              </h4>
              <p className="text-sm text-gray-600">
                Front Desk: 24×7  
                <br />
                Check-in Assistance: Anytime
              </p>
            </div>
  
            {/* Trust */}
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl
              bg-green-100 text-green-600 mb-4">
                <ShieldCheck size={22} />
              </div>
              <h4 className="text-gray-900 font-medium mb-2">
                Reliable Guest Support
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Clear communication, fast responses, and professional service —
                before, during, and after your stay.
              </p>
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }