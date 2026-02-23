"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/about/img_about_1.jpeg",
    title: "Comfortable Stay in the Heart of the City",
    desc: "Clean rooms, essential amenities, and warm hospitality.",
  },
  {
    image: "/about/img_about_2.jpeg",
    title: "Perfect for Business & Family Stay",
    desc: "Peaceful environment with modern facilities.",
  },
  {
    image: "/about/img_about_2.jpeg",
    title: "Affordable Comfort with Premium Experience",
    desc: "Quality stay without unnecessary luxury.",
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setAnimate(true);
      }, 300);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[85vh] lg:h-screen overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={slides[index].image}
          alt="Sri Ram Hotel"
          fill
          priority
          className={`object-cover transition-all duration-[2500ms] ease-out
            ${animate ? "scale-105 opacity-100" : "scale-100 opacity-0"}
          `}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div
          className={`max-w-7xl mx-auto px-6 text-white transition-all duration-700 ease-out
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          <p className="text-sm md:text-base tracking-widest text-yellow-400 mb-3">
            WELCOME TO SRI RAM HOTEL
          </p>

          <h1 className="text-3xl md:text-5xl font-semibold leading-tight max-w-2xl">
            {slides[index].title}
          </h1>

          <p className="mt-4 text-base md:text-lg max-w-xl text-gray-200">
            {slides[index].desc}
          </p>

          {/* CTA */}
          <div
            className={`mt-8 flex gap-4 flex-wrap transition-all duration-700 delay-200
              ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            <Link
              href="/contact_us"
              className="px-6 py-3 bg-yellow-500 text-black font-medium rounded-md hover:bg-yellow-400 transition"
            >
              Book Now
            </Link>

            <a
              href="tel:+91 9631281526"
              className="px-6 py-3 border border-white rounded-md hover:bg-white hover:text-black transition"
            >
              Call Hotel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
