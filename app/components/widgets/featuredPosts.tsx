import Image from 'next/image';
import { Clock1 } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { ChartArea } from 'lucide-react';

const images = [
  {
    src: "/assets/fixed-height",
    title: "fixed height",
  },
  {
    src: "/assets/fixed-height(1)",
    title: "fixed height",
  },
  {
    src: "/assets/unsplash_dEGu-oCuB1Y",
    title: "fixed height",
  },
];

export default function FeaturedPosts() {
  return (
    <div className="mt-10 py-12 px-6 lg:px-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-blue-500 font-semibold uppercase">Practice Advice</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">Featured Posts</h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
        </p>
      </div>

      {/* Posts Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Post Card */}
        {images.map((_, i) => (
          <div key={i} className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 ">
            <div className="relative">
              <Image 
                src={`${images[i].src}.png`} // Ensure the images are correctly placed in the public folder
                alt={images[i].title}
                width={348}
                height={606}
                className="w-full object-cover max-h-72 sm:max-h-96 lg:max-h-[400px]"
              />
              <span className="absolute top-4 left-4 bg-red-500 text-white text-sm font-semibold py-1 px-3 rounded">
                NEW
              </span>
            </div>
            <div className="p-6">
              <p className="text-sm text-slate-400 font-medium space-x-4">
                <span className="hover:text-blue-500">Google</span>
                <span className="hover:text-blue-500">Trending</span>
                <span className="hover:text-blue-500">New</span>
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mt-2">
                Loudest à la Madison #1 (L-integral)
              </h3>
              <p className="text-gray-500 mt-2">
                We focus on ergonomics and meeting you where you work. It-s only a keystroke away.
              </p>

              <div className="flex items-center mt-4 text-sm text-gray-400 justify-between">
                <span className="flex items-center gap-1">
                  <Clock1 className="text-[#23A6F0]" />
                  22 April 2021
                </span>
                <span className="flex items-center gap-1">
                  <ChartArea className="text-green-600" />
                  10 comments
                </span>
              </div>
              <a href="#" className="flex items-center mt-4 text-slate-500 font-bold">
                Learn More <ChevronRight className="text-blue-400" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
