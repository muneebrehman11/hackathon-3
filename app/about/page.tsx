
import Image from "next/image";
const clientsLogos = [
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


export default function About() {
    return (
        <div className="min-h-screen bg-white text-gray-800">


            {/* About Section */}
            <div className="flex flex-col md:flex-row justify-center  ">
                {/* Left Section */}
                {/* <div className=" flex flex-col text-left leading-10 w-6/12 "> */}
                <div className=" w-6/12 flex flex-col justify-center items-center leading-10 ">
                    <h2 className="text-base text-black font-bold uppercase">
                        About Company
                    </h2>
                    <h1 className="text-6xl font-semibold text-gray-900 mt-2">About Us</h1>
                    <p className="mt-4 text-gray-600">
                        We know how large objects will act, <br /> but things on a small scale.
                    </p>
                    <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 ">
                        Get Quote Now
                    </button>
                </div>

                {/* Right Section */}
                {/* <div className="flex-1 flex justify-center relative"> */}
                <div className=" w-6/12 flex items-end ">
                    <Image
                        src="/assets/component1.png" // Add the shopping lady image to the public folder
                        alt="Shopping Lady"
                        width={605}
                        height={668}
                        className="relative z-10"
                    />
                </div>
            </div>
            {/* Problems Section */}
            <section className="py-12 px-4 lg:px-10">
                <div className="flex flex-col md:flex-row  items-center  justify-center gap-10">
                    <p className="mt-4 text-gray-900 text-xl font-bold w-6/12 lg:w-3/12 ">
                        <span className="text-lg text-red-500 font-semibold  leading-10">Problems trying </span>
                        <br />
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                    </p>
                    <p className="mt-2 text-gray-600  w-6/12 lg:w-6/12">
                        Problems trying to resolve the conflict between the two major realms
                        of Classical physics: Newtonian mechanics.
                    </p>

                </div>
            </section>

            {/* Statistics */}
            <section className="py-16 px-8 lg:px-28 bg-gray-100 grid grid-cols-1  md:grid-cols-4 text-center">
                <div className="p-10">
                    <h3 className="text-6xl font-bold text-gray-900">15K</h3>
                    <p className="text-gray-500">Happy Customers</p>
                </div>
                <div className="p-10">
                    <h3 className="text-6xl font-bold text-gray-900">150K</h3>
                    <p className="text-gray-500">Monthly Visitors</p>
                </div>
                <div className="p-10">
                    <h3 className="text-6xl font-bold text-gray-900">15</h3>
                    <p className="text-gray-500">Countries Worldwide</p>
                </div>
                <div className="p-10">
                    <h3 className="text-6xl font-bold text-gray-900">100+</h3>
                    <p className="text-gray-500">Top Partners</p>
                </div>
            </section>


            {/* video section */}
            <div className="flex justify-center">
                <Image src="/assets/desktop-video-3.png" alt="abc" width={989} height={540} />
            </div>

            {/* Meet our team section */}
            <div>

                <section className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-6 md:px-12">
                        <div className="text-center mb-10">
                            <h2 className="text-4xl font-extrabold text-gray-900">Meet Our Team</h2>
                            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Team Member 1 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-[329px] h-[231px]  relative mb-4">
                                    <Image
                                        src="/assets/team-1-user-1.png" // Replace with your image paths
                                        alt="Team Member 1"
                                        width={316}
                                        height={231}
                                        className="rounded-lg object-cover" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">Username</h3>
                                <p className="text-gray-600">Profession</p>
                                <div className="flex justify-center mt-3 space-x-4 text-blue-500">
                                    <Image src='/assets/facebook.png' alt="facebook" width={24} height={19.76} />
                                    <Image src='/assets/insta.png' alt="facebook" width={24} height={19.76} />
                                    <Image src='/assets/twitter.png' alt="facebook" width={24} height={19.76} />

                                </div>
                            </div>
                            {/* Duplicate similar blocks for additional team members */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-[329px] h-[231px]  relative mb-4">
                                    <Image
                                        src="/assets/media.png" // Replace with your image paths
                                        alt="Team Member 1"
                                        width={316}
                                        height={231}
                                        className="rounded-lg object-cover"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">Username</h3>
                                <p className="text-gray-600">Profession</p>
                                <div className="flex justify-center mt-3 space-x-4 text-blue-500">
                                    <Image src='/assets/facebook.png' alt="facebook" width={24} height={19.76} />
                                    <Image src='/assets/insta.png' alt="facebook" width={24} height={19.76} />
                                    <Image src='/assets/twitter.png' alt="facebook" width={24} height={19.76} />
                                </div>
                            </div>
                            {/* _____________________________________________________ */}
                            <div className="flex flex-col items-center text-center">
                                <div className=" w-[329px] h-[231px] relative mb-4">
                                    <Image
                                        src="/assets/team-1-user-3.png" // Replace with your image paths
                                        alt="Team Member 1"
                                        width={316}
                                        height={231}
                                        className="rounded-lg object-cover"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">Username</h3>
                                <p className="text-gray-600">Profession</p>
                                <div className="flex justify-center mt-3 space-x-4 text-blue-500">
                                    <Image src='/assets/facebook.png' alt="facebook" width={24} height={19.76} />
                                    <Image src='/assets/insta.png' alt="facebook" width={24} height={19.76} />
                                    <Image src='/assets/twitter.png' alt="facebook" width={24} height={19.76} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* big companies */}



            </div>
            {/* <div className="bg-green-500 text-center h-[479px] flex flex-col justify-center gap-28"> */}
            <div className="bg-[#FAFAFA] text-center  flex flex-col justify-center ">
                <div className="space-y-6 text-center xs:p-24 sm:p-0">
                    <h3 className="font-bold text-4xl">Big Companies Are Here</h3>
                    <p className="text-sm ">Problems trying to resolve the conflict between  <br />
                        the two major realms of Classical physics: Newtonian mechanics </p>
                </div>


                <div className="flex flex-col md:flex-row items-center justify-center gap-14 my-10">
                    {
                        clientsLogos.map((cimages, i) => (
                            <div key={i} >
                                <Image src={cimages.image} alt={cimages.alt} width={100} height={50} />
                            </div>
                        ))
                    }
                </div>
               
            </div>
            

            {/* work with us */}
            <div className="flex flex-col xs:flex-col sm:flex-row">

                {/* Left */}
                <div className="bg-blue-600 mx-y-5 w-12/12 md:w-8/12 flex justify-center items-center p-5 ">
                    {/* <div className="lg:w-1/2 text-center lg:text-left"> */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <p className="uppercase text-sm tracking-wide text-white font-medium mb-4">WORK WITH US</p>
                        <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            Now Let’s grow Yours
                        </h1>
                        <p className="text-lg text-white leading-relaxed mb-8">
                            The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th                         </p>
                        <button className="px-8 py-3 bg-green-500 text-white font-medium rounded hover:bg-green-600 transition">
                            Shop Now
                        </button>
                    </div>
                </div>

                {/* right */}
                <div className="hidden md:block  w-4/12   bg-[#e7ebee]">
                    <Image src="/assets/unsplash.png" alt="abc" width={590} height={640} />
                </div>
            </div>
        </div>
    );
}












