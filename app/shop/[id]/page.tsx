import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import ProductActions from '@/app/component/productActions';
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
                <p className="text-gray-600 mb-6">Sorry, we couldn`&apos;`t find the product you were looking for.</p>
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
