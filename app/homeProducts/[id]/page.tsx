// import { client } from '@/sanity/lib/client'
// import { urlFor } from '@/sanity/lib/image'
// import { Eye, Heart, ShoppingCart } from 'lucide-react'
// import Image from 'next/image'
// const HomeProducts = async ({ params }: { params: Promise<{ id: string }> }) => {
//     const { id } = await params
//     const homeProducts = await client.fetch(
//         `*[_type == "product" && _id == $id][0]{
//             title,
//   price,
//   "imageUrl": productImage.asset->url,
//   tags,
//   dicountPercentage,
//   description,
//   isNew
//         }`,
//         { id }

//     );
//     if (!homeProducts) {
//         return (
//             <div className='place-items-center'>
//                 <Image src={'/assets/page-not-found.png'} alt={'abc'} width={800} height={800} />
//             </div>
//         )
//     }
//     return (
//         <div className='flex flex-col lg:flex-row justify-center  md:py-4 md:px-6 sm:px-10 gap-28'>
//             {/* left content */}
//             <div className='relative'>
//                 <button className={`bg-green-500 hover:bg-opacity-90 inline-block absolute m-2 z-10 w-14 bg-opacity-70 rounded-sm text-white  ${homeProducts.isNew == true ? 'block' : 'hidden'}`}>
//                     new
//                 </button>
//                 <Image src={urlFor(homeProducts.imageUrl).url()} alt={homeProducts.title} width={506} height={540} className='hover:opacity-90 bg-black ' />

//                 <div className='flex py-5 gap-5'>
//                     <Image src={urlFor(homeProducts.imageUrl).url()} alt={homeProducts.title} width={100} height={75} />
//                     <Image src={urlFor(homeProducts.imageUrl).url()} alt={homeProducts.title} width={100} height={75} />
//                 </div>

//             </div>

//             {/* right content  */}
//             <div className='flex-1  space-y-5 '>
//                 <h3 className='text-2xl text-slate-600 font-bold'>{homeProducts.title}</h3>
//                 <div className='flex items-center '>

//                     <Image src='/assets/Four-Star.png' alt='four stars' width={130.07} height={22} />
//                     <p className='text-slate-600 font-semibold'>10 reviews</p>
//                 </div>
//                 <p className='font-bold text-2xl'>{`Price: $${homeProducts.price}`}</p>                
//                 <p className=' font-bold space-x-2 text-2xl'>
//                     {/* <span className='text-slate-400 line-through'>{`$${homeProducts.price}`} </span> */}
//                     <span className='text-green-600 '>{`Price: $${homeProducts.price}`}</span>
//                 </p>
//                 <p className='text-slate-600 font-semibold '>Availability : <span className='text-blue-400 font-bold cursor-pointer'>In Stock</span></p>
//                 <p className='text-gray-400 '>{homeProducts.description}
//                 </p>
//                 <hr />
//                 <div className='flex gap-1'>
//                     <div className='w-[30px] h-[30px] rounded-full bg-blue-400 cursor-pointer'> </div>
//                     <div className='w-[30px] h-[30px] rounded-full bg-green-400 cursor-pointer'> </div>
//                     <div className='w-[30px] h-[30px] rounded-full bg-orange-400 cursor-pointer'> </div>
//                     <div className='w-[30px] h-[30px] rounded-full bg-black cursor-pointer'> </div>
//                 </div>
//                 <div className='flex gap-2 items-center'>
//                     <button className="px-6 md:px-8 py-2 md:py-3 bg-blue-400 text-white font-medium rounded-lg hover:bg-blue-600 transition">
//                         Select Options
//                     </button>
//                     <abbr title="Add to Wishlist" >

//                         <div className=' border-2 rounded-full p-2 hover:bg-slate-200 cursor-pointer'>
//                             <Heart />

//                         </div>
//                     </abbr>


//                     <abbr title="Add to Cart" >
//                         <div className=' border-2 rounded-full p-2 hover:bg-slate-200 cursor-pointer'>
//                             <ShoppingCart />
//                         </div>
//                     </abbr>
//                     <abbr title="Watch" >
//                         <div className=' border-2 rounded-full p-2 hover:bg-slate-200 cursor-pointer'>
//                             <Eye />
//                         </div>
//                     </abbr>
//                 </div>

//             </div>

//         </div>
//     )
// }

// export default HomeProducts









// app/shop/[id]/page.tsx
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import ProductActions from '@/app/component/productActions';
import ProductAddToCart from '@/app/component/ProductAddToCart';
import Link from 'next/link';
import { Eye } from 'lucide-react';

export default async function ProductDetails({ params }: { params: { id: string } }) {
    const { id } = params;

    const shopProduct = await client.fetch(
        `*[_type == "product" && _id == $id][0]{
      title,
      price,
      "imageUrl": productImage.asset->url,
      tags,
      discountPercentage,
      description,
      isNew
    }`,
        { id }
    );

    if (!shopProduct) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen text-center">
                <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
                <p className="text-gray-600 mb-6">Sorry, we couldn't find the product you were looking for.</p>
                <Link href="/shop" className="text-blue-500 hover:text-blue-600">
                    Go back to Shop
                </Link>
            </div>
        );
    }

    const {
        title,
        price,
        imageUrl,
        tags,
        discountPercentage,
        description,
        isNew,
    } = shopProduct;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                    <Image
                        src={imageUrl}
                        alt={title}
                        width={500}
                        height={500}
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="lg:w-1/2 flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold mb-4">{title}</h1>
                        <p className="text-xl font-semibold text-gray-700 mb-2">${price.toFixed(2)}</p>
                        {discountPercentage && (
                            <p className="text-green-500 font-semibold">
                                Save {discountPercentage}% on this product!
                            </p>
                        )}
                        {isNew && <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-bold">New</span>}
                        <p className="text-gray-600 mt-4">{description}</p>
                    </div>
                    <div className="mt-6 flex gap-4">
                        <button className="px-6 md:px-8 py-2 md:py-3 bg-blue-400 text-white font-medium rounded-lg hover:bg-blue-600 transition">
                            Select Options
                        </button>
                        {/* <ProductAddToCart product={{ _id: id, title, price, imageUrl }} /> */}
                        <ProductActions product={{ _id: id, title, price, imageUrl }} />
                    <abbr title="Watch" >
                        <div className=' border-2 rounded-full p-2 hover:bg-slate-200 cursor-pointer'>
                            <Eye />
                        </div>
                    </abbr>
                    </div>
                    <div className="mt-4">
                        <p className="text-gray-500 text-sm">Tags: {tags?.join(', ') || 'No tags available'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
