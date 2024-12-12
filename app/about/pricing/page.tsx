import Image from 'next/image';
import img1 from "@/assets/row (3).png"
import { ChevronRight } from 'lucide-react';
import { StaticImageData } from "next/image";
const cientsLogos = [
    {
        image: "/assets/clien1.png",
        alt: "clients"
    },
    {
        image: "/assets/clien2.png",
        alt: "clients"
    },
    {
        image: "/assets/clien3.png",
        alt: "clients"
    },
    {
        image: "/assets/clien4.png",
        alt: "clients"
    },
    {
        image: "/assets/clien5.png",
        alt: "clients"
    },
    {
        image: "/assets/clien6.png",
        alt: "clients"
    },
]

export default function Pricing() {
    return (
        <section>
            {/* Simple Pricing */}
            <div className="flex flex-col h-[280px] justify-center leading-[100px]">
                <div className="text-center">
                    <h3 className="text-base font-bold">PRICING</h3>
                    <h1 className="text-6xl font-semibold">Simple Pricing</h1>
                </div>
                <div className="space-x-2 flex justify-center">
                    <button className="font-bold">Home</button>
                    <p>{">"}</p>
                    <button className="font-bold text-slate-500">Pricing</button>
                </div>
            </div>

            {/* Pricing Section */}
            <div className="flex flex-col items-center justify-center text-center gap-7 bg-gray-100">
                <div>
                    <h2 className="font-bold text-[40px] sm:text-[36px] md:text-[40px] lg:text-[45px]">
                        Pricing
                    </h2>
                    <p className="w-[463px] text-sm text-slate-400 font-medium sm:w-[80%] md:w-[70%]">
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>
                <div className="flex gap-5 items-center">
                    <p className="font-bold text-base">Monthly</p>
                    <button>----</button>
                    <p className="font-bold text-base">Yearly</p>
                    <button className="w-28 h-10 bg-gray-300 hover:bg-blue-100 rounded-full text-black hover:text-blue-800 font-semibold">Save 25%</button>
                </div>
                <div className="flex justify-center">
                    <Image src={img1} alt={'a'} />
                </div>

                {/* Clients Section */}
                <div className="h-[365px] flex flex-col justify-center">
                     <p>Trusted By Over 4000 Big Companies</p>
                     <div className=" flex items-center justify-center gap-20 mt-10">
                         {
                             cientsLogos.map((cimages, i) => (
                                 <div key={i} >
                                     <Image src={cimages.image} alt={cimages.alt} />
                                 </div>
                             ))
                         }
                     </div>
                 </div>
            </div>

            {/* Pricing FAQs */}
            <div>
                <div className="text-center space-y-5">
                    <h2 className="font-semibold text-5xl">Pricing FAQs</h2>
                    <p className="font-medium text-sm text-gray-500">
                        Problems trying to resolve the conflict between the two major realms of Classical physics
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <p className="w-full sm:w-8/12 lg:w-8/12 flex hover:shadow-2xl rounded-xl p-14 transition duration-300 ease-in-out">
                        <span><ChevronRight className="text-blue-500" /></span>
                        the quick fox jumps over the lazy dog <br />
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                    </p>
                    <p className="w-full sm:w-8/12 lg:w-8/12 flex hover:shadow-2xl rounded-xl p-14 transition duration-300 ease-in-out">
                        <span><ChevronRight className="text-blue-500" /></span>
                        the quick fox jumps over the lazy dog <br />
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                    </p>
                    <p className="w-full sm:w-8/12 lg:w-8/12 flex hover:shadow-2xl rounded-xl p-14 transition duration-300 ease-in-out">
                        <span><ChevronRight className="text-blue-500" /></span>
                        the quick fox jumps over the lazy dog <br />
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                    </p>
                    <p className="w-full sm:w-8/12 lg:w-8/12 flex hover:shadow-2xl rounded-xl p-14 transition duration-300 ease-in-out">
                        <span><ChevronRight className="text-blue-500" /></span>
                        the quick fox jumps over the lazy dog <br />
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                    </p>
                    <p className="w-full sm:w-8/12 lg:w-8/12 flex hover:shadow-2xl rounded-xl p-14 transition duration-300 ease-in-out">
                        <span><ChevronRight className="text-blue-500" /></span>
                        the quick fox jumps over the lazy dog <br />
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                    </p>
                    <p className="w-full sm:w-8/12 lg:w-8/12 flex hover:shadow-2xl rounded-xl p-14 transition duration-300 ease-in-out">
                        <span><ChevronRight className="text-blue-500" /></span>
                        the quick fox jumps over the lazy dog <br />
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                    </p>
                </div>
                <p className="text-center">
                    Haven’t got your answer? Contact our support
                </p>
            </div>

            {/* Start Free Trial Section */}
            <div className="place-items-center space-y-10">
                <div className="place-items-center text-center space-y-8">
                    <h4 className="text-4xl font-bold sm:text-3xl">Start your 14 days free trial</h4>
                    <p className="text-base text-gray-500 max-w-[406px] sm:max-w-full">
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
                    </p>
                </div>
                <button className="px-8 py-3 bg-blue-500 text-white font-medium rounded hover:bg-green-600 transition w-44 sm:w-full">
                    Try it for now
                </button>
                <div className="flex gap-3 py-5">
                    <Image src="/assets/Vector (2).png" alt="" />
                    <Image src="/assets/logos_facebook.png" alt="" />
                    <Image src="/assets/Vector (3).png" alt="" />
                    <Image src="/assets/Vector (4).png" alt="" />
                </div>
            </div>
        </section>
    );
}
