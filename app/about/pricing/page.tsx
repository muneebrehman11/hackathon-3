
'use client';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';


const clientsLogos = [
    { image: "/assets/clien1.png", alt: "clients" },
    { image: "/assets/clien2.png", alt: "clients" },
    { image: "/assets/clien3.png", alt: "clients" },
    { image: "/assets/clien4.png", alt: "clients" },
    { image: "/assets/clien5.png", alt: "clients" },
    { image: "/assets/clien6.png", alt: "clients" },
];

export default function Pricing() {
    const [isYearly, setIsYearly] = useState(false);

    const handleToggle = () => {
        setIsYearly(!isYearly);
    };
    return (
        <section className="bg-white">
            {/* Simple Pricing Section */}
            <div className="flex flex-col items-center justify-center h-[280px] text-center">
                <h3 className="text-base font-bold text-gray-900">PRICING</h3>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 mt-2">
                    Simple Pricing
                </h1>
                <div className="flex items-center space-x-2 mt-4">
                    <button className="font-bold text-gray-900">Home</button>
                    <p>{">"}</p>
                    <button className="font-bold text-slate-500">Pricing</button>
                </div>
            </div>

            {/* Pricing Section */}
            <div className="bg-[#fafafa] py-16 px-4 sm:px-8 lg:px-16">
                <div className="text-center space-y-6">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                        Pricing
                    </h2>
                    <p className="text-sm text-slate-400 font-medium max-w-[463px] mx-auto">
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>

                {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <p className="font-bold text-base text-gray-900">Monthly</p>
          <button className="w-12 h-6 bg-gray-300 rounded-full relative">
            <div className="w-6 h-6 bg-white rounded-full absolute left-0 transition-transform duration-300"></div>
          </button>
          <p className="font-bold text-base text-gray-900">Yearly</p>
          <button className="w-28 h-10 bg-gray-300 hover:bg-blue-100 rounded-full text-black hover:text-blue-800 font-semibold">
            Save 25%
        //  </button>
        </div> */}

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                    <p className="font-bold text-base text-gray-900">Monthly</p>
                    <button
                        onClick={handleToggle}
                        className="w-12 h-6 bg-blue-300 rounded-full relative focus:outline-none"
                    >
                        <div
                            className={`w-6 h-6 bg-blue-600 rounded-full absolute left-0 transition-transform duration-300 transform  top-0 ${isYearly ? 'translate-x-6' : 'translate-x-0'
                                } hover:shadow-md`}
                        ></div>
                    </button>
                    <p className="font-bold text-base text-gray-900">Yearly</p>
                    <button className="w-28 h-10 bg-gray-300 hover:bg-blue-100 rounded-full text-black hover:text-blue-800 font-semibold transition duration-300 ease-in-out focus:outline-none">
                        Save 25%
                    </button>
                </div>
                <div className="flex justify-center mt-10">
                    <Image
                        src="/assets/row(3).png"
                        alt="pricing-table"
                        width={985}
                        height={704}
                        className="w-full max-w-[985px] h-auto"
                    />
                </div>
            </div>

            {/* Clients Section */}
            <div className="py-16 px-4 sm:px-8 lg:px-16">
                <p className="text-center text-gray-600 font-medium">
                    Trusted By Over 4000 Big Companies
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 mt-10">
                    {clientsLogos.map((cimages, i) => (
                        <div key={i} className="flex justify-center">
                            <Image
                                src={cimages.image}
                                alt={cimages.alt}
                                width={100}
                                height={50}
                                className="w-auto h-8"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Pricing FAQs Section */}
            <div className="py-16 px-4 sm:px-8 lg:px-16">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                        Pricing FAQs
                    </h2>
                    <p className="text-sm text-gray-500 font-medium max-w-[600px] mx-auto">
                        Problems trying to resolve the conflict between the two major realms of Classical physics
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="flex items-start p-6 hover:shadow-md rounded-xl transition duration-300 ease-in-out"
                        >
                            <ChevronRight className="text-blue-500 mt-1" />
                            <div className="ml-4">
                                <p className="text-gray-900 font-medium">
                                    The quick fox jumps over the lazy dog
                                </p>
                                <p className="text-sm text-gray-500 mt-2">
                                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center text-gray-600 font-medium mt-10">
                    Haven’t got your answer? Contact our support
                </p>
            </div>

            {/* Start Free Trial Section */}
            <div className="bg-[#fafafa] py-16 px-4 sm:px-8 lg:px-16">
                <div className="text-center space-y-6">
                    <h4 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                        Start your 14 days free trial
                    </h4>
                    <p className="text-sm text-gray-500 max-w-[406px] mx-auto">
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
                    </p>
                    <button className="px-8 py-3 bg-blue-500 text-white font-medium rounded hover:bg-blue-700 transition">
                        Try it for now
                    </button>
                </div>

                <div className="flex justify-center gap-4 mt-10">
                    <Image
                        src="/assets/Vector(2).png"
                        alt="social-icon"
                        width={30}
                        height={30}
                        className="hover:opacity-80 cursor-pointer"
                    />
                    <Image
                        src="/assets/logos_facebook.png"
                        alt="social-icon"
                        width={30}
                        height={30}
                        className="hover:opacity-80 cursor-pointer"
                    />
                    <Image
                        src="/assets/Vector(3).png"
                        alt="social-icon"
                        width={30}
                        height={30}
                        className="hover:opacity-80 cursor-pointer"
                    />
                    <Image
                        src="/assets/Vector(4).png"
                        alt="social-icon"
                        width={30}
                        height={30}
                        className="hover:opacity-80 cursor-pointer"
                    />
                </div>
            </div>
        </section>
    );
}