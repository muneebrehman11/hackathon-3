import { ChevronRight } from 'lucide-react';

const clothImages = [
    { image: "/assets/col-md-4.png", alt: "img" },
    { image: "/assets/col-md-6 (2).png", alt: "img" },
    { image: "/assets/col-md-5.png", alt: "img" },
    { image: "/assets/col-md-3 (2).png", alt: "img" },
    { image: "/assets/card-cover-7.png", alt: "img" },
];

const clientsLogos = [
    { image: "/assets/clien1.png", alt: "clients1" },
    { image: "/assets/clien2.png", alt: "clients2" },
    { image: "/assets/clien3.png", alt: "clients3" },
    { image: "/assets/clien4.png", alt: "clients4" },
    { image: "/assets/clien5.png", alt: "clients5" },
    { image: "/assets/clien6.png", alt: "clients6" },
];

export default function Shop() {
    return (
        <section>
            {/* Header Section */}
            <div className="flex justify-between px-10 sm:px-[270px] max-w-screen-2xl mx-auto">
                <h1 className="font-bold text-2xl">Shop</h1>
                <div className="flex items-center gap-2">
                    <button className="text-[14px] font-bold">Home</button>
                    <ChevronRight className="text-[#BDBDBD]" />
                    <button className="text-[14px] font-bold text-[#BDBDBD]">
                        Shop
                    </button>
                </div>
            </div>

            {/* Clothing Images */}
            <div className="flex flex-wrap justify-center gap-4 py-10">
                {clothImages.map((img, index) => (
                    <div key={`cloth-${index}`} className="w-1/2 sm:w-1/3 lg:w-1/6">
                        <img 
                            src={img.image}
                            alt={img.alt}
                            
                            // priority={true}
                            className="object-cover w-full h-full"
                        />
                    </div>
                ))}
            </div>

            {/* Filter Section */}
            <div className="bg-white py-4 shadow-sm px-10 sm:px-[270px] max-w-screen-2xl mx-auto">
                <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
                    <p className="text-gray-600">Showing all 12 results</p>
                    <div className="flex items-center space-x-4">
                        <div className="flex space-x-2 items-center">
                            <p className="text-[#737373] font-bold text-sm">Views</p>
                            <button className="p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <img 
                                    src="/assets/btn-sm-24.png"
                                    alt=""
                                    
                                />
                            </button>
                            <button className="p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <img
                                 
                                    src="/assets/btn-sm-24 (1).png"
                                    alt=""
                                    
                                />
                            </button>
                        </div>

                        <div className="relative">
                            <select className="border rounded px-3 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[141px] h-12">
                                <option>Popularity</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Newest</option>
                            </select>
                        </div>

                        <button className="w-[94px] h-12 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Filter
                        </button>
                    </div>
                </div>
            </div>

            {/* Clients Logos */}
            <div className="bg-[#FAFAFA] py-10 flex flex-wrap justify-center gap-10">
                {clientsLogos.map((logo, index) => (
                    <div key={`logo-${index}`} className="w-1/2 sm:w-1/12 md:w-1/12">
                        <img 
                            src={logo.image}
                            alt={logo.alt}
                            
                            // priority={true}
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>

            {/* Product Cards */}
            {/* <div className="mt-5">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 place-content-center">
                    <img src="/assets/col-md-3.png" alt="" className="cursor-pointer" />
                    <img src="/assets/Product card.png" alt="" className="cursor-pointer" />
                    <img src="/assets/Product card (1).png" alt="" className="cursor-pointer" />
                    <img src="/assets/Product card (2).png" alt="" className="cursor-pointer" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
                    <img src="/assets/col-md-3.png" alt="" className="cursor-pointer" />
                    <img src="/assets/Product card.png" alt="" className="cursor-pointer" />
                    <img src="/assets/Product card (1).png" alt="" className="cursor-pointer" />
                    <img src="/assets/Product card (2).png" alt="" className="cursor-pointer" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
                    <img src="/assets/col-md-3.png" alt="" className="cursor-pointer" />
                    <img src="/assets/Product card.png" alt="" className="cursor-pointer" />
                    <img src="/assets/Product card (1).png" alt="" className="cursor-pointer" />
                    <img src="/assets/Product card (2).png" alt="" className="cursor-pointer" />
                </div>
            </div> */}

            {/* <div className="mt-5">

                <div className='flex justify-center gap-8'>
                    <img src="/assets/col-md-3.png" alt="" className="cursor-pointer" />
                    <img src="/assets/Product card.png" alt="" className="cursor-pointer" />
                    <img src="/assets/Product card (1).png" alt="" className="cursor-pointer" />
                    <img src="/assets/Product card (2).png" alt="" className="cursor-pointer" />
                </div>
                <div className='flex justify-center gap-8'>
                    <img src="/assets/col-md-3.png" alt="" className="cursor-pointer" />
                    <img src="/assets/Product card.png" alt="" className="cursor-pointer" />
                    <img src="/assets/Product card (1).png" alt="" className="cursor-pointer" />
                    <img src="/assets/Product card (2).png" alt="" className="cursor-pointer" />
                </div>
                <div className='flex justify-center gap-8'>
                    <img src="/assets/col-md-3.png" alt="" className="cursor-pointer" />
                    <img src="/assets/Product card.png" alt="" className="cursor-pointer" />
                    <img src="/assets/Product card (1).png" alt="" className="cursor-pointer" />
                    <img src="/assets/Product card (2).png" alt="" className="cursor-pointer" />
                </div>
            </div> */}
            <div className="mt-5">
                {/* First Row of Images */}
                <div className="flex flex-wrap justify-center gap-8">
                    <img  src="/assets/col-md-3.png" alt="" className="cursor-pointer w-1/3 sm:w-1/4 md:w-1/5" />
                    <img  src="/assets/Product card.png" alt="" className="cursor-pointer w-1/3 sm:w-1/4 md:w-1/5" />
                    <img  src="/assets/Product card (1).png" alt="" className="cursor-pointer w-1/3 sm:w-1/4 md:w-1/5" />
                    <img  src="/assets/Product card (2).png" alt="" className="cursor-pointer w-1/3 sm:w-1/4 md:w-1/5" />
                </div>

                {/* Second Row of Images */}
                <div className="flex flex-wrap justify-center gap-8 mt-5">
                    <img  src="/assets/col-md-3.png" alt="" className="cursor-pointer w-1/3 sm:w-1/4 md:w-1/5" />
                    <img  src="/assets/Product card.png" alt="" className="cursor-pointer w-1/3 sm:w-1/4 md:w-1/5" />
                    <img  src="/assets/Product card (1).png" alt="" className="cursor-pointer w-1/3 sm:w-1/4 md:w-1/5" />
                    <img  src="/assets/Product card (2).png" alt="" className="cursor-pointer w-1/3 sm:w-1/4 md:w-1/5" />
                </div>

                {/* Third Row of Images */}
                <div className="flex flex-wrap justify-center gap-8 mt-5">
                    <img  src="/assets/col-md-3.png" alt="" className="cursor-pointer w-1/3 sm:w-1/4 md:w-1/5" />
                    <img  src="/assets/Product card.png" alt="" className="cursor-pointer w-1/3 sm:w-1/4 md:w-1/5" />
                    <img  src="/assets/Product card (1).png" alt="" className="cursor-pointer w-1/3 sm:w-1/4 md:w-1/5" />
                    <img  src="/assets/Product card (2).png" alt="" className="cursor-pointer w-1/3 sm:w-1/4 md:w-1/5" />
                </div>
            </div>

            {/* Pagination */}
            <div className="p-4 bg-gray-100 rounded-md shadow">
                <div className="flex items-center justify-center rounded-md">
                    <button
                        className="px-4 py-2 text-gray-400 bg-white border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none"
                        disabled
                    >
                        First
                    </button>
                    <button className="w-10 h-10 text-blue-500 hover:text-white border border-gray-300 rounded-md hover:bg-blue-500 focus:outline-none">
                        1
                    </button>
                    <button className="w-10 h-10 text-blue-500 hover:text-white hover:bg-blue-500 border border-gray-300 rounded-md shadow focus:outline-none">
                        2
                    </button>
                    <button className="w-10 h-10 text-blue-500 hover:text-white border border-gray-300 rounded-md hover:bg-blue-500 focus:outline-none">
                        3
                    </button>
                    <button className="px-4 py-2 text-blue-500 hover:text-white bg-white border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none">
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
}

