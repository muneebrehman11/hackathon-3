
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
interface Data {
  _id: string;
  name: string;
  title: string;
  price_before: number;
  price_after: number;
  imageUrl: string;
}
const bestSeller: React.FC = async () => {
  const res = await client.fetch(
    `*[_type == "home_products"]{
    _id,
    name,
    title,
    price_before,
    price_after,
    "imageUrl" : image.asset->url
  }
  `)
  console.log(res);
  
  return (
    <div className="container mx-auto px-4 place-items-center">
      <h1 className="text-3xl font-bold my-8 text-center">Bestseller Products</h1>
      <p className="text-gray-600 mb-8 text-center">Problems trying to resolve the conflict between.</p>
      <div className='mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center '>

        {
          res.map((data: Data) =>
            <Link href={`/homeProducts/${data._id}`} key={res._id}>
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

    </div>
  );
};

export default bestSeller;
