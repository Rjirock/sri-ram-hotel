import Image from "next/image";

export default function AboutOwnerSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block w-16 h-1 bg-yellow-400 rounded-full mb-4" />
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Leadership & Our Hotel
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Behind every comfortable stay is a commitment to honest service,
            responsible management, and guest satisfaction.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Owner Section */}
          <div className="flex flex-col sm:flex-row gap-8 items-start">

            {/* Owner Image */}
            <div className="relative w-full sm:w-60 h-80 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/about/owner.jpeg"
                alt="Owner of Sri Ram Hotel"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Owner Content */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">
                Message from the Owner
              </h3>

              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                Sri Ram Hotel was established with a clear vision — to offer a
                clean, comfortable, and trustworthy place for guests who value
                peace, safety, and honest hospitality.
              </p>

              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                Our focus has always been on maintaining quality standards,
                listening to guest feedback, and ensuring that every visitor
                feels respected and well cared for during their stay.
              </p>

              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                We personally oversee our services to ensure consistency,
                cleanliness, and a welcoming environment for all.
              </p>

              <p className="mt-5 font-medium text-gray-900">
                — Owner, Sri Ram Hotel
              </p>
            </div>
          </div>

          {/* Hotel Images */}
          <div className="grid grid-cols-2 gap-4">

            {/* Large Image */}
            <div className="relative col-span-2 h-56 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/about/img_about_1.jpeg"
                alt="Sri Ram Hotel Exterior"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Small Images */}
            <div className="relative h-40 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/about/img_about_2.jpeg"
                alt="Sri Ram Hotel Room"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="relative h-40 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/about/img_about_3.jpeg"
                alt="Sri Ram Hotel Interior"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}