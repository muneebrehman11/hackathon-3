
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section>
      {/* Hero Section */}
       <div className="flex flex-col md:flex-row items-center justify-center text-center  bg-[#00b0d7]">
         <Image
           src={'/assets/hero-img.png'}
           alt="Hero Background"
           width={1440}
           height={716}
           className="w-full h-full object-cover" />
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
             <Link href="/shop">
               <button className="px-6 md:px-8 py-2  md:py-3 my-5  bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition">
                 Shop Now
               </button>
             </Link>
           </div>
         </div>
       </div>

      {/* Editor's Pick Section */}
      <div className="bg-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
              EDITOR&apos;S PICK
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mt-2">
              Problems trying to resolve the conflict between
            </p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Large Image */}
            <div className="md:col-span-2">
              <Image
                src="/assets/col-md-6.png"
                alt="Editor's Pick 1"
                width={509}
                height={500}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Medium Image */}
            <div>
              <Image
                src="/assets/card-item.png"
                alt="Editor's Pick 2"
                width={239}
                height={500}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Small Images */}
            <div className="space-y-6">
              <div>
                <Image
                  src="/assets/filter.png"
                  alt="Editor's Pick 3"
                  width={239}
                  height={240}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <Image
                  src="/assets/mediabg-cover.png"
                  alt="Editor's Pick 4"
                  width={239}
                  height={240}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}