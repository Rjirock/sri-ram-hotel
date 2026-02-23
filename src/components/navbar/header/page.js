"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
const menuItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about_us" },
  { name: "Booking", path: "/booking" },
  { name: "Contact Us", path: "/contact_us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="bg-black/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-5 h-16 md:h-20 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center">


            <Image
              src="/hotel_logo.png"
              alt="Sri Ram Hotel Logo"
              width={500}
              height={150}
              priority
              className="h-9 sm:h-10 md:h-12 lg:h-14 w-auto object-cover"
            />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-10 text-white">
            {menuItems.map((item) => {
              const isActive = pathname === item.path;

              return (
                <li key={item.name} className="relative group">
                  <Link
                    href={item.path}
                    className={`text-sm font-medium transition-colors
                      ${isActive ? "text-yellow-400" : "hover:text-yellow-400"}
                    `}
                  >
                    {item.name}
                  </Link>

                  <span
                    className={`absolute left-0 -bottom-2 h-[2px] bg-yellow-400 transition-all
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  />
                </li>
              );
            })}

            {/* CTA */}
            <li className="ml-4">
              <Link
                href="/booking"
                className="px-6 py-2.5 border border-yellow-400 text-yellow-400 rounded-md
                hover:bg-yellow-400 hover:text-black transition"
              >
                Book Now
              </Link>
            </li>
          </ul>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col justify-center gap-1.5"
            aria-label="Menu"
          >
            <span
              className={`w-6 h-[2px] bg-white transition-all
              ${open ? "rotate-45 translate-y-[6px]" : ""}`}
            />
            <span
              className={`w-6 h-[2px] bg-white transition-all
              ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`w-6 h-[2px] bg-white transition-all
              ${open ? "-rotate-45 -translate-y-[6px]" : ""}`}
            />
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden bg-black/95 transition-all duration-300 ease-out
          ${open ? "max-h-[360px] opacity-100" : "max-h-0 opacity-0"}
          overflow-hidden`}
        >
          <ul className="flex flex-col px-6 py-6 gap-5 text-white text-base">
            {menuItems.map((item) => {
              const isActive = pathname === item.path;

              return (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    onClick={() => setOpen(false)}
                    className={`block transition
                      ${isActive ? "text-yellow-400" : "hover:text-yellow-400"}
                    `}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}

            {/* MOBILE CTA */}
            <li className="pt-4">
              <Link
                href="/booking"
                onClick={() => setOpen(false)}
                className="block text-center px-6 py-3 bg-yellow-500 text-black rounded-md"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}