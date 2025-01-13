import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
const clothImages = [
    { image: "/assets/col-md-4.jpg", alt: "Image" },
    { image: "/assets/col-md-6(2).jpg", alt: "Image" },
    { image: "/assets/col-md-5.jpg", alt: "Image" },
    { image: "/assets/col-md-3(2).jpg", alt: "Image" },
    { image: "/assets/card-cover-7.jpg", alt: "Image" },
];

const clientsLogos = [
    { image: "/assets/clien1.png", alt: "clients1" },
    { image: "/assets/clien2.png", alt: "clients2" },
    { image: "/assets/clien3.png", alt: "clients3" },
    { image: "/assets/clien4.png", alt: "clients4" },
    { image: "/assets/clien5.png", alt: "clients5" },
    { image: "/assets/clien6.png", alt: "clients6" },
];

interface Data {
    _id: string;
    name: string;
    title: string;
    price_before: number;
    price_after: number;
    imageUrl: string;
  }
  

export default async function Shop() {
    const res = await client.fetch(
        `*[_type == "shop_products"]{
  _id,
  name,
  title,
  price_before,
  price_after,
  "imageUrl" : image.asset->url
}
`
    )
    return (
        <section >
            {/* Header Section */}
            <div className="flex justify-between px-10 sm:px-[270px] max-w-screen-2xl mx-auto mt-5">
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
                {/* <div className="mt-10 flex justify-center items-center gap-2 flex-wrap">
            <div className='relative group w-full sm:w-[calc(20%-1rem)] md:w-[calc(20%-1rem)]'> */}
                {clothImages.map((imgs, index) => (
                    <div key={`${index}`} className=" w-1/2 sm:w-1/3 lg:w-1/6 flex relative group">
                        <Image
                            src={imgs.image}
                            alt={imgs.alt}
                            width={240}
                            height={223}
                            // priority={true}
                            className="object-cover w-full h-full "
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-[#FFFFFF] transition-opacity duration-300"><h3 className="text-[16px] font-bold">Unique Designs </h3><p className="text-[14px]">Explore it Now</p></div>

                    </div>
                ))}
                {/* </div> */}
            </div>

            {/* Filter Section */}
            <div className="bg-white py-4 shadow-sm px-10 sm:px-[270px] max-w-screen-2xl mx-auto">
                <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
                    <p className="text-gray-600">Showing all 12 results</p>
                    <div className="flex items-center space-x-4">
                        <div className="flex space-x-2 items-center">
                            <p className="text-[#737373] font-bold text-sm">Views</p>
                            <button className="p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <Image
                                    src="/assets/btn-sm-24.png"
                                    alt="abc"
                                    width={46}
                                    height={46}

                                />
                            </button>
                            <button className="p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <Image

                                    src="/assets/btn-sm-24(1).png"
                                    alt="abc"
                                    width={46}
                                    height={46}

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
            <div className="flex flex-col md:flex-row items-center justify-center gap-14 my-10">
                {
                    clientsLogos.map((cimages, i) => (
                        <div key={i}>
                            <Image src={cimages.image} alt={cimages.alt} width={100} height={50} />
                        </div>
                    ))
                }
            </div>


            {/* <div className="mt-5"> */}
            <div className='mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center '>

                {
                    res.map((data: Data) =>
                        <Link href={`/shop/${data._id}`} key={res._id} >
                        <div  className=' max-w-[239px] text-center leading-8 cursor-pointer hover:scale-105 hover:shadow-md active:scale-100  duration-500  mt-8 object-contain'>
                            <Image src={urlFor(data.imageUrl).url()} alt={data.name} width={239} height={300} />
                            <div className='  my-4'>
                                <p className='font-bold text-sm hover:text-red-600'>{data.name}</p>
                                <p className='font-semibold text-slate-500cursor-none'>{data.title}</p>
                                <p className=' font-bold space-x-2'>
                                    <span className='text-slate-400 line-through'>{data.price_before} </span>
                                    <span className='text-green-600 '>{data.price_after}</span>
                                </p>
                            </div>
                            <div className='flex gap-1 justify-center mb-6 '>
                                <div className='w-[15px] h-[15px] rounded-full bg-blue-400 cursor-pointer'> </div>
                                <div className='w-[15px] h-[15px] rounded-full bg-green-400 cursor-pointer'> </div>
                                <div className='w-[15px] h-[15px] rounded-full bg-orange-400 cursor-pointer'> </div>
                                <div className='w-[15px] h-[15px] rounded-full bg-black cursor-pointer'> </div>
                            </div>
                        </div>
                        </Link>


                    )

                }
            </div>

            {/* Pagination */}
            <div className="p-4 bg-gray-100 rounded-md shadow mt-5">
                <div className="flex items-center justify-center rounded-md">
                    <button className="px-4 py-2 text-gray-400 bg-white border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none">
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

