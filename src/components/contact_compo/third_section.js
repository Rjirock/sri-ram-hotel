import { MapPin, Train, Bus, Navigation, Clock } from "lucide-react";

export default function ContactLocationSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block w-16 h-1 bg-yellow-400 rounded-full mb-4" />
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Location & How to Reach Us
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Sri Ram Hotel is conveniently located with easy access to major
            transport points, making your arrival smooth and hassle-free.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT – LOCATION DETAILS */}
          <div className="space-y-8">

            {/* Address Card */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl
                bg-yellow-100 text-yellow-600">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="text-gray-900 font-medium text-lg">
                    Hotel Address
                  </h3>
                  <p className="mt-2 text-gray-600 leading-relaxed text-sm">
                    Ranchi Road,<br />
                    Ramgarh Cantonment,<br />
                    Jharkhand 829117, India
                  </p>
                </div>
              </div>
            </div>

            {/* Connectivity Cards */}
            <div className="grid sm:grid-cols-2 gap-6">

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg
                bg-yellow-100 text-yellow-600 mb-3">
                  <Train size={20} />
                </div>
                <h4 className="text-gray-900 font-medium text-sm">
                  Railway Station
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  Approx. 1.5 km from hotel
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg
                bg-yellow-100 text-yellow-600 mb-3">
                  <Bus size={20} />
                </div>
                <h4 className="text-gray-900 font-medium text-sm">
                  Bus Stand
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  Approx. 2 km from hotel
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg
                bg-yellow-100 text-yellow-600 mb-3">
                  <Navigation size={20} />
                </div>
                <h4 className="text-gray-900 font-medium text-sm">
                  Easy Navigation
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  Well-connected roads & landmarks
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg
                bg-yellow-100 text-yellow-600 mb-3">
                  <Clock size={20} />
                </div>
                <h4 className="text-gray-900 font-medium text-sm">
                  Check-in Support
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  24×7 front desk assistance
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT – MAP CTA */}
          <div
            className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm
  flex flex-col h-full"
          >
            {/* Heading */}
            <div>
              <h3 className="text-xl font-medium text-gray-900">
                Find Us on Google Maps
              </h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                Easily navigate to Sri Ram Hotel using Google Maps for a smooth
                and hassle-free arrival.
              </p>
            </div>

            {/* MAP */}
            <div className="mt-6 relative w-full h-[280px] rounded-lg overflow-hidden border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d234134.7842208793!2d85.23833360505742!3d23.51969476402286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d23.3804439!2d85.3330517!4m5!1s0x39f4f3ed50f12da7%3A0x70e9809a707b6697!2sSri%20Ram%20Hotel%2C%20Ranchi%20Road%2C%20Ramgarh%20Cantonment%2C%20Jharkhand%20829117!3m2!1d23.662293599999998!2d85.5138344!5e0!3m2!1sen!2sin!4v1771552074095!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            {/* CTA */}
            <a
              href="https://maps.app.goo.gl/EgmKLeXgGuwyCnkZ7"
              target="_blank"
              className="mt-6 inline-flex items-center justify-center gap-2
    px-6 py-3 bg-yellow-500 text-black rounded-md font-medium
    hover:bg-yellow-400 transition"
            >
              View on Google Maps
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}