import Hero from "./components/widgets/hero";
// import HomePage from "@/app/components/homeProducts/bestSeller";
import Hero2 from "./components/widgets/hero2";
import FeaturedPosts from "./components/widgets/featuredPosts";
import BestSeller from "@/app/components/widgets/bestSeller";

export default async function Home() {
 
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

