import Hero from "./components/widgets/hero";
// import HomePage from "@/app/components/homeProducts/bestSeller";
import Hero2 from "./components/widgets/hero2";
import FeaturedPosts from "./components/widgets/featuredPosts";
import BestSeller from "@/app/components/widgets/bestSeller";
import { client } from "@/sanity/lib/client";

export default async function Home() {
  const res = await client.fetch(`*[_type == "product"] {
    _id,
    title,
    price,
    "imageUrl": productImage.asset->url,
    tags,
    dicountPercentage,
    description,
    isNew
  }`)
  console.log(res._id);


  return (
    <main>
      <div>

        <Hero />
        <BestSeller />
        <Hero2 />
        <FeaturedPosts />

      </div>


    </main>
  )
}

