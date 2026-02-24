import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Top Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Hotel Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Sri Ram Hotel
            </h3>
            <p className="text-sm leading-relaxed">
              Sri Ram Hotel offers a comfortable and peaceful stay with essential
              amenities, warm hospitality, and easy city access for business and
              family travelers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-yellow-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about_us" className="hover:text-yellow-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-yellow-400 transition">
                  Booking
                </Link>
              </li>
              <li>
                <Link href="/contact_us" className="hover:text-yellow-400 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-yellow-400 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-yellow-400 transition">
                Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/refund-and-cancellation" className="hover:text-yellow-400 transition">
                Refund & Cancellation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-medium mb-4">
              Contact Information
            </h4>
            <ul className="space-y-4 text-sm">

              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-yellow-400 mt-1" />
                <span>
                 Ranchi Road, Ramgarh Cantonment, Jharkhand 829117
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-yellow-400" />
                <a
                  href="tel:+91 9631281526"
                  className="hover:text-yellow-400 transition"
                >
                  +91 9631281526
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="text-yellow-400" />
                <a
                  href="mailto:ashokathegreat02@gmail.com"
                  className="hover:text-yellow-400 transition"
                >
                  ashokathegreat02@gmail.com
                </a>
              </li>

            </ul>
          </div>

          {/* Check-in Info */}
          <div>
            <h4 className="text-white font-medium mb-4">
              Check-in & Support
            </h4>
            <ul className="space-y-4 text-sm">

              <li className="flex items-center gap-3">
                <Clock size={18} className="text-yellow-400" />
                <span>
                  Check-in: 8:00 PM  
                  <br />
                  Check-out: 11:00 AM
                </span>
              </li>

              <li>
                <Link
                  href="/booking"
                  className="inline-block mt-4 px-5 py-2.5
                  border border-yellow-400 text-yellow-400 rounded-md
                  hover:bg-yellow-400 hover:text-black transition"
                >
                  Book Your Stay
                </Link>
              </li>

            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-16 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Sri Ram Hotel. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
