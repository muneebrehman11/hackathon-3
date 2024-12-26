import Hero from "./components/widgets/hero";
import HomePage from "@/app/components/widgets/bestSeller";
import Hero2 from "./components/widgets/hero2";
import FeaturedPosts from "./components/widgets/featuredPosts";


export default function Home(){
  return(
    <main>
      <div>

      <Hero/>
      <HomePage/>
      {/* <BestSeller/> */}
      <Hero2/>
      <FeaturedPosts/>
      </div>
   
    </main>
  )
}