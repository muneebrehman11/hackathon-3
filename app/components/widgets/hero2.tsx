

export default function Hero2() {
  return (
    <section>
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center bg-[#23856D]">
        {/* Left Section */}
        <div className="flex flex-col lg:flex-row items-center w-full max-w-7xl px-6 lg:px-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="uppercase text-sm tracking-wide text-white font-medium mb-4">Summer 2020</p>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Vita Classic Product
            </h1>
            <p className="text-lg text-white leading-relaxed mb-8">
              We know how large objects will act, but things on a small scale.
            </p>
            <div className="flex items-center gap-6">
              <p className="text-white font-semibold text-[24px]">$16.48</p>
              <button className="px-8 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition">
                ADD TO CART
              </button>
            </div>
          </div>
          {/* Right Section with img  */}
          <div className="lg:w-1/2 flex justify-center mb-[-93px]">
            <img 
              src="/assets/col-md-6 (1).png"
              alt="New Collection"
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* 2nd Part / Subsection */}
      <div className="flex flex-col lg:flex-row items-center justify-between text-black px-6 lg:px-16">
        {/* Left img  Section */}
        <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <img 
            src="/assets/hero-cover-1.png"
            alt="Couple with Scarf"
            className="max-w-full h-auto object-contain"
            // Adjusting image  size for breakpoints
            style={{ maxWidth: "600px", width: "100%" }}
          />
        </div>

        {/* Right Text Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-12 flex flex-col items-start">
          <p className="text-sm tracking-wide uppercase text-gray-400">Summer 2020</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mt-2">
            Part of the Neural Universe
          </h1>
          <p className="text-gray-400 mt-4 text-lg">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-green-500 text-white font-semibold py-2 px-6 rounded hover:bg-green-600">
              Buy Now
            </button>
            <button className="bg-transparent border-2 border-green-500 text-green-500 font-semibold py-2 px-6 rounded hover:bg-green-600 hover:text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
