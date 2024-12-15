
import Image from "next/image";
export default function Hero() {
  return (
    <section>
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center relative">
        <Image
          src="/assets/shop-hero-1-product-slide-1.jpg"
          alt="Hero Background"
          width={1440}
          height={716}

          className="w-full h-full object-cover"
        />

        <div className="flex flex-col lg:flex-row items-center w-full max-w-7xl px-6 lg:px-12 z-10 absolute">
          <div className="lg:w-1/2 text-center lg:text-left space-y-4">
            <p className="uppercase text-sm tracking-wide text-white font-medium">
              Summer 2020
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight">
              New Collection
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-white leading-relaxed">
              We know how large objects will act, but things on a small scale.
            </p>
            <button className="px-6 md:px-8 py-2 md:py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Editor's Pick Section */}
      <div className="bg-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Title */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800">
              EDITOR-S PICK
            </h2>
            <p className="text-sm md:text-base text-gray-500 mt-2">
              Problems trying to resolve the conflict between
            </p>
          </div>

          {/* Content */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  bg-green-400"> */}
            <div className="flex gap-5 justify-center ">
            <div>
              <Image
                src="/assets/col-md-6.png"
                alt="Editor's Pick 1"
                width={509}
                height={500}
                className="h-full object-cover" />
            </div>
            <div>
              <Image
                src="/assets/card-item.png"
                alt="Editor's Pick 2"
                width={239}
                height={500}
                // className="w-full  h-auto max-w-[300px] sm:max-w-[350px] md:max-w-[400px]"
              />
            </div>
            <div className="space-y-4">
              <div>
                <Image
                  src="/assets/filter.png"
                  alt="Editor's Pick 3"
                  width={239}
                  height={500}
                  // className="w-full h-auto max-w-[300px] sm:max-w-[350px] md:max-w-[400px]"
                />
              </div>
              <div>
                <Image
                  src="/assets/media bg-cover.png"
                  alt="Editor's Pick 4"
                  width={239}
                  height={500}
                  // className="w-full h-auto max-w-[300px] sm:max-w-[350px] md:max-w-[400px] "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
