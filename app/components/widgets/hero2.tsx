import Image from "next/image";

export default function Hero2() {
  return (
    <section>
      {/* Hero Section */}
      <div className="flex items-center justify-center bg-[#23856D] py-12 md:py-16 lg:py-20  overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Section - Text */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <p className="uppercase text-sm md:text-base tracking-wide text-white font-medium mb-4">
                Summer 2020
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
                Vita Classic Product
              </h1>
              <p className="text-lg text-white leading-relaxed mb-8">
                We know how large objects will act, but things on a small scale.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <p className="text-white font-semibold text-2xl sm:text-3xl">$16.48</p>
                <button className="px-8 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition duration-300">
                  ADD TO CART
                </button>
              </div>
            </div>

            {/* Right Section - Image */}
            <div className="lg:w-1/2 flex justify-center mb-[-49px] md:mb-[-65px] lg:mb-[-80px]">
              <Image
                src="/assets/col-md-6(1).png"
                alt="New Collection"
                width={443}
                height={709}
                className="w-full max-w-[443px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2nd Part / Subsection */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Section - Image */}
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src="/assets/hero-cover-1.png"
              alt="Couple with Scarf"
              width={704}
              height={682}
              className="w-full max-w-[600px] h-auto object-contain"
            />
          </div>

          {/* Right Section - Text */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-sm uppercase tracking-wide text-gray-400">Summer 2020</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mt-4">
              Part of the Neural Universe
            </h1>
            <p className="text-gray-400 mt-4 text-lg">
              We know how large objects will act, but things on a small scale.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-3 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition duration-300">
                Buy Now
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-green-500 text-green-500 font-semibold rounded hover:bg-green-600 hover:text-white transition duration-300">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}