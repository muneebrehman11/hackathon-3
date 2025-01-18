import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { Eye, Heart, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
const HomeProducts = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params
    const homeProducts = await client.fetch(
        `*[_type == "product" && _id == $id][0]{
            title,
  price,
  "imageUrl": productImage.asset->url,
  tags,
  dicountPercentage,
  description,
  isNew
        }`,
        { id }

    );
    if (!homeProducts) {
        return (
            <div className='place-items-center'>
                <Image src={'/assets/page-not-found.png'} alt={'abc'} width={800} height={800} />
            </div>
        )
    }
    return (
        <div className='flex flex-col lg:flex-row justify-center  md:py-4 md:px-6 sm:px-10 gap-28'>
            {/* left content */}
            <div className='relative'>
                <button className={`bg-green-500 hover:bg-opacity-90 inline-block absolute m-2 z-10 w-14 bg-opacity-70 rounded-sm text-white  ${homeProducts.isNew == true ? 'block' : 'hidden'}`}>
                    new
                </button>
                <Image src={urlFor(homeProducts.imageUrl).url()} alt={homeProducts.title} width={506} height={540} className='hover:opacity-90 bg-black ' />

                <div className='flex py-5 gap-5'>
                    <Image src={urlFor(homeProducts.imageUrl).url()} alt={homeProducts.title} width={100} height={75} />
                    <Image src={urlFor(homeProducts.imageUrl).url()} alt={homeProducts.title} width={100} height={75} />
                </div>

            </div>

            {/* right content  */}
            <div className='flex-1  space-y-5 '>
                <h3 className='text-2xl text-slate-600 font-bold'>{homeProducts.title}</h3>
                <div className='flex items-center '>

                    <Image src='/assets/Four-Star.png' alt='four stars' width={130.07} height={22} />
                    <p className='text-slate-600 font-semibold'>10 reviews</p>
                </div>
                <p className='font-bold text-2xl'>{`Price: $${homeProducts.price}`}</p>                
                <p className=' font-bold space-x-2 text-2xl'>
                    {/* <span className='text-slate-400 line-through'>{`$${homeProducts.price}`} </span> */}
                    <span className='text-green-600 '>{`Price: $${homeProducts.price}`}</span>
                </p>
                <p className='text-slate-600 font-semibold '>Availability : <span className='text-blue-400 font-bold cursor-pointer'>In Stock</span></p>
                <p className='text-gray-400 '>{homeProducts.description}
                </p>
                <hr />
                <div className='flex gap-1'>
                    <div className='w-[30px] h-[30px] rounded-full bg-blue-400 cursor-pointer'> </div>
                    <div className='w-[30px] h-[30px] rounded-full bg-green-400 cursor-pointer'> </div>
                    <div className='w-[30px] h-[30px] rounded-full bg-orange-400 cursor-pointer'> </div>
                    <div className='w-[30px] h-[30px] rounded-full bg-black cursor-pointer'> </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <button className="px-6 md:px-8 py-2 md:py-3 bg-blue-400 text-white font-medium rounded-lg hover:bg-blue-600 transition">
                        Select Options
                    </button>
                    <abbr title="Add to Wishlist" >

                        <div className=' border-2 rounded-full p-2 hover:bg-slate-200 cursor-pointer'>
                            <Heart />

                        </div>
                    </abbr>


                    <abbr title="Add to Cart" >
                        <div className=' border-2 rounded-full p-2 hover:bg-slate-200 cursor-pointer'>
                            <ShoppingCart />
                        </div>
                    </abbr>
                    <abbr title="Watch" >
                        <div className=' border-2 rounded-full p-2 hover:bg-slate-200 cursor-pointer'>
                            <Eye />
                        </div>
                    </abbr>
                </div>

            </div>

        </div>
    )
}

export default HomeProducts



