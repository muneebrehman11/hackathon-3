import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import ProductActions from '@/app/component/productActions';
import Link from 'next/link';
// import { Eye } from 'lucide-react';

interface ProductDetailsParams {
    params: Promise<{ id: string }>;
}

export default async function ProductDetails({ params }: ProductDetailsParams) {
    const { id } = await params;

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
            <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
                <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
                <p className="text-gray-600 mb-6">
                    Sorry, we couldn&apos;t find the product you were looking for.
                </p>
                <Link
                    href="/shop"
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                    Go back to Shop
                </Link>
            </div>
        );
    }

    const { title, price, imageUrl, discountPercentage, description, isNew } =
        shopProduct;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Product Image */}
                <div className="lg:w-1/2">
                    <div className="relative aspect-square w-full rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Product Details */}
                <div className="lg:w-1/2 flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold mb-4">{title}</h1>
                        <div className="flex items-center gap-4 mb-4">
                            <p className="text-xl font-semibold text-gray-700">
                                ${price.toFixed(2)}
                            </p>
                            {discountPercentage && (
                                <p className="text-green-500 font-semibold">
                                    Save {discountPercentage}%
                                </p>
                            )}
                            {isNew && (
                                <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-bold">
                                    New
                                </span>
                            )}
                        </div>
                        <p className="text-justify text-gray-600 mb-6">{description}</p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col xs:flex-row gap-4">
                        <button className="w-44  py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors">
                            Select Options
                        </button>
                        <ProductActions product={{ _id: id, title, price, imageUrl }} />

                    </div>
                </div>
            </div>
        </div>
    );
}





