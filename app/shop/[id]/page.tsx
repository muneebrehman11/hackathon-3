import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { Eye, Heart, ShoppingCart } from 'lucide-react';
import Image from 'next/image';

export default async function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const shopProduct = await client.fetch(
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

    if (!shopProduct) {

        return (
            <div className='place-items-center'>
                <Image src={'/assets/page-not-found.png'} alt={'abc'} width={800} height={800} />
            </div>
        )
    }

    return (

        <div className='flex flex-col lg:flex-row justify-center items-center md:py-4 md:px-6 sm:px-10 gap-28'>
            {/* left content */}
            <div className='relative'>
                <button className={`bg-green-500 hover:bg-opacity-90 inline-block absolute m-2 z-10 w-14 bg-opacity-70 rounded-sm text-white  ${shopProduct.isNew == true ? 'black' : 'hidden'}`}>
                    new
                </button>
                <Image src={urlFor(shopProduct.imageUrl).url()} alt={shopProduct.name} width={506} height={540} className='hover:opacity-90 bg-black z-0' />

                <div className='flex py-5 gap-5'>
                    <Image src={urlFor(shopProduct.imageUrl).url()} alt={shopProduct.title} width={100} height={75} />
                    <Image src={urlFor(shopProduct.imageUrl).url()} alt={shopProduct.title} width={100} height={75} />
                </div>

            </div>

            {/* right content  */}
            <div className='flex-1  space-y-5 relative bottom-5'>

                <h3 className='text-xl text-slate-600 font-bold'>{shopProduct.title}</h3>
                <div className='flex items-center '>
                    <Image src='/assets/Four-Star.png' alt='four stars' width={130.07} height={22} />
                    <p className='text-slate-600 font-semibold'>10 reviews</p>
                </div>
                <p className='font-bold text-2xl'>{`Price: $${shopProduct.price}`}</p>
                <p className=' font-bold space-x-2 text-2xl'>
                    <span className='text-slate-400 line-through'>{shopProduct.price_before} </span>
                    <span className='text-green-600 '>{shopProduct.price_after}</span>
                </p>
                <p className='text-slate-600 font-semibold '>Availability : <span className='text-blue-400 font-bold cursor-pointer'>In Stock</span></p>
                <p className='text-gray-400 '>{shopProduct.description}
                </p>
                <hr />
                <div className='flex gap-1'>
                    <div className='w-[30px] h-[30px] rounded-full bg-blue-400 cursor-pointer hover:border-2 border-blue-600'> </div>
                    <div className='w-[30px] h-[30px] rounded-full bg-green-400 cursor-pointer hover:border-2 border-green-600'> </div>
                    <div className='w-[30px] h-[30px] rounded-full bg-orange-400 cursor-pointer hover:border-2 border-orange-600'> </div>
                    <div className='w-[30px] h-[30px] rounded-full bg-black cursor-pointer hover:border-black'> </div>
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
    );
}

// "use client"

// // commited for testing cart from chatgpt$^^^^^
// import { useCart } from "@/app/context/CartContext";

// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';
// import { Eye, Heart, ShoppingCart } from 'lucide-react';
// import Image from 'next/image';

// export default async function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
//     const { id } = await params;
//     const { addToCart } = useCart();


//     const shopProduct = await client.fetch(
//         `*[_type == "product" && _id == $id][0]{
//             _id,
//   title,
//   price,
//   "imageUrl": productImage.asset->url,
//   tags,
//   dicountPercentage,
//   description,
//   isNew
//         }`,
//         { id }

//     );

//     if (!shopProduct) {

//         return (
//             <div className='place-items-center'>
//                 <Image src={'/assets/page-not-found.png'} alt={'abc'} width={800} height={800} />
//             </div>
//         )
//     }
//     const handleAddToCart = () => {
//         addToCart({
//             id: shopProduct._id,
//             name: shopProduct.name,
//             price: shopProduct.price_after,
//             quantity: 1,
//             imageUrl: shopProduct.imageUrl,
//         });
//     };

//     return (

//         <div className='flex flex-col lg:flex-row justify-center items-center md:py-4 md:px-6 sm:px-10 gap-28'>
//             {/* left content */}
//             <div className=''>
//                 <Image src={urlFor(shopProduct.imageUrl).url()} alt={shopProduct.name} width={506} height={540} className='hover:opacity-90 bg-black ' />

//                 <div className='flex py-5 gap-5'>
//                     <Image src='/assets/single-product-1-cover-1.jpg' alt='product' width={100} height={75} />
//                     <Image src='/assets/product-inner.png' alt='product' width={100} height={75} />
//                 </div>

//             </div>

//             {/* right content  */}
//             <div className='flex-1  space-y-5 '>
//                 <h3 className='text-xl text-slate-600'>{shopProduct.name}</h3>
//                 <div className='flex items-center'>
//                     <Image src='/assets/Four-Star.png' alt='four stars' width={130.07} height={22} />
//                     <p className='text-slate-600 font-semibold'>10 reviews</p>
//                 </div>
//                 {/* <p className='font-bold text-2xl'>{product.price_before}</p> */}
//                 <p className=' font-bold space-x-2 text-2xl'>
//                     <span className='text-slate-400 line-through'>{shopProduct.price_before} </span>
//                     <span className='text-green-600 '>{shopProduct.price_after}</span>
//                 </p>
//                 <p className='text-slate-600 font-semibold '>Availability : <span className='text-blue-400 font-bold cursor-pointer'>In Stock</span></p>
//                 <p className='text-gray-400 '>{shopProduct.description}
//                 </p>
//                 <hr />
//                 <div className='flex gap-1'>
//                     <div className='w-[30px] h-[30px] rounded-full bg-blue-400 cursor-pointer hover:border-2 border-blue-600'> </div>
//                     <div className='w-[30px] h-[30px] rounded-full bg-green-400 cursor-pointer hover:border-2 border-green-600'> </div>
//                     <div className='w-[30px] h-[30px] rounded-full bg-orange-400 cursor-pointer hover:border-2 border-orange-600'> </div>
//                     <div className='w-[30px] h-[30px] rounded-full bg-black cursor-pointer hover:border-black'> </div>
//                 </div>
//                 <div className='flex gap-2 items-center'>
//                     <button className="px-6 md:px-8 py-2 md:py-3 bg-blue-400 text-white font-medium rounded-lg hover:bg-blue-600 transition">
//                         Select Options
//                     </button>
//                     <div className=' border-2 rounded-full p-2 hover:bg-slate-200 cursor-pointer'>
//                         <Heart />
//                     </div>
//                     {/* <div className=' border-2 rounded-full p-2 hover:bg-slate-200 cursor-pointer'>
//                         <ShoppingCart />
//                     </div> */}
//                     <div>
//                         <h1>{shopProduct.name}</h1>
//                         <button onClick={handleAddToCart}>
//                             <ShoppingCart />
//                         </button>
//                     </div>
//                     <div className=' border-2 rounded-full p-2 hover:bg-slate-200 cursor-pointer'>
//                         <Eye />
//                     </div>
//                 </div>

//             </div>

//         </div>
//     );
// }