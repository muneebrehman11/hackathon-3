
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
type Product = {
  imageUrl: string;
  price: number;
  tags: string[];
  dicountPercentage: number;
  description: string;
  isNew: boolean;
  _id: string;
  title: string;
};

const bestSeller: React.FC = async () => {
  const res = await client.fetch(
    (`*[_type == "product" ] {
      _id,
      title,
      price,
      "imageUrl": productImage.asset->url,
      tags,
      dicountPercentage,
      description,
      isNew
    }`))

  return (
    <div className="container mx-auto px-4 place-items-center">
      <h1 className="text-3xl font-bold my-8 text-center">Bestseller Products</h1>
      <p className="text-gray-600 mb-8 text-center">Problems trying to resolve the conflict between.</p>

      <div className='mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center '>

        {
          res.map((data: Product) =>
            <Link href={`/shop/${data._id}`} key={res._id} >

              <div key={res._id} className=' max-w-[239px] text-center leading-8 cursor-pointer hover:scale-105 hover:shadow-md active:scale-100  duration-500  my-8 object-contain '>
                {/* <Image src={urlFor(data.imageUrl).url()} alt={data.name} width={239} height={300} /> */}
                <div className='w-[239px] h-[300px] overflow-hidden relative '>
                  <button className={`bg-green-500 hover:bg-opacity-90 inline-block absolute left-1 top-1 w-14 bg-opacity-70 rounded-sm text-white  ${data.isNew == true ? 'black' : 'hidden'}`}>
                    new
                  </button>
                  <Image src={data.imageUrl} alt={data.title} width={239} height={300} />
                </div>
                <div className='my-5'>
                  <p className='font-bold font-mono text-lg hover:text-red-600'>{data.title}</p>
                  <p className='font-semibold text-slate-500 cursor-none'>{"our top products"}</p>
                  <p className=' font-bold space-x-2'>
                    <span className='text-slate-400 line-through'>{`$${data.price}`} </span>
                    <span className='text-green-600'>{`$${data.dicountPercentage}`}</span>
                  </p>

                </div>
                <div className='flex gap-2 justify-center pb-8 '>
                  <div className='w-[20px] h-[20px] rounded-full bg-blue-400 cursor-pointer hover:border-2 border-blue-600'> </div>
                  <div className='w-[20px] h-[20px] rounded-full bg-green-400 cursor-pointer hover:border-2 border-green-600'> </div>
                  <div className='w-[20px] h-[20px] rounded-full bg-orange-400 cursor-pointer hover:border-2 border-orange-600'> </div>
                  <div className='w-[20px] h-[20px] rounded-full bg-black cursor-pointer hover:border-black'> </div>
                </div>
              </div>
            </Link>


          )


        }
        {console.log('asdf:', res._id)
        }
      </div>

    </div>
  );
};

export default bestSeller;
