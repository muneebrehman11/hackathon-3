

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


export default function About() {
    return (
        <div className="min-h-screen bg-white text-gray-800">
            

            {/* About Section */}
            <div className="flex items-center justify-center py-16 px-8 lg:px-16 ">
                {/* Left Section */}
                {/* <div className=" flex flex-col text-left leading-10 w-6/12 "> */}
                <div className=" h-[637px] w-6/12 flex flex-col justify-center items-center leading-10 text-left ">
                    <h2 className="text-base text-black font-bold uppercase tracking-wide">
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
                <div className="h-[637px] w-6/12 flex items-end ">
                    <img 
                        src="/assets/Component 1.png" // Add the shopping lady image to the public folder
                        alt="Shopping Lady"
                        width={605}
                        height={668}
                        className="relative z-10"
                    />
                </div>
            </div>
            {/* Problems Section */}
            <section className="py-16 px-8 lg:px-16">
                <div className="flex items-center  justify-center">

                    <p className="mt-4 text-gray-900 text-xl font-bold max-w-80">
                        <span className="text-lg text-red-500 font-semibold ">Problems trying</span><br />
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                    </p>
                    <p className="mt-2 text-gray-600  max-w-[500px]">
                        Problems trying to resolve the conflict between the two major realms
                        of Classical physics: Newtonian mechanics.
                    </p>

                </div>
            </section>

            {/* Statistics */}
            <section className="py-16 px-8 lg:px-28 bg-gray-100 grid grid-cols-2 sm:grid-cols-4   text-center">
                <div>
                    <h3 className="text-6xl font-bold text-gray-900">15K</h3>
                    <p className="text-gray-500">Happy Customers</p>
                </div>
                <div>
                    <h3 className="text-6xl font-bold text-gray-900">150K</h3>
                    <p className="text-gray-500">Monthly Visitors</p>
                </div>
                <div>
                    <h3 className="text-6xl font-bold text-gray-900">15</h3>
                    <p className="text-gray-500">Countries Worldwide</p>
                </div>
                <div>
                    <h3 className="text-6xl font-bold text-gray-900">100+</h3>
                    <p className="text-gray-500">Top Partners</p>
                </div>
            </section>


            {/* video section */}
            <div className="flex justify-center">
                <img  src="/assets/desktop-video-3.png" alt="" />
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
                                    <img 
                                        src="/assets/team-1-user-1.png" // Replace with your image paths
                                        alt="Team Member 1"
                                        className="rounded-lg object-cover"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">Username</h3>
                                <p className="text-gray-600">Profession</p>
                                <div className="flex justify-center mt-3 space-x-4 text-blue-500">
                                    <a href="#" aria-label="Facebook" className="hover:text-blue-600">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="h-6 w-6"
                                        >
                                            <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877V14.89h-2.54v-2.89h2.54v-2.203c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.196 2.238.196v2.461h-1.26c-1.243 0-1.63.772-1.63 1.563V12h2.773l-.443 2.89h-2.33v7.027C18.343 21.129 22 16.992 22 12z" />
                                        </svg>
                                    </a>
                                    <a href="#" aria-label="Instagram" className="hover:text-pink-600">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="h-6 w-6"
                                        >
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.31.976.976 1.249 2.242 1.31 3.608.058 1.265.069 1.645.069 4.849s-.012 3.584-.069 4.849c-.062 1.366-.336 2.633-1.31 3.608-.976.976-2.242 1.249-3.608 1.31-1.265.058-1.645.069-4.849.069s-3.584-.012-4.849-.069c-1.366-.062-2.633-.336-3.608-1.31-.976-.976-1.249-2.242-1.31-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.069-4.849c.062-1.366.336-2.633 1.31-3.608.976-.976 2.242-1.249 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.332.015 7.052.072 5.775.128 4.685.375 3.785 1.275 2.885 2.175 2.638 3.266 2.582 4.543 2.525 5.822 2.511 6.231 2.511 9.5s.015 3.679.072 4.957c.056 1.277.303 2.368 1.203 3.268.9.9 1.99 1.147 3.268 1.203 1.277.056 1.686.072 4.957.072s3.679-.015 4.957-.072c1.277-.056 2.368-.303 3.268-1.203.9-.9 1.147-1.99 1.203-3.268.057-1.278.072-1.686.072-4.957s-.015-3.679-.072-4.957c-.056-1.277-.303-2.368-1.203-3.268-.9-.9-1.99-1.147-3.268-1.203C15.679.015 15.27 0 12 0z" />
                                        </svg>
                                    </a>
                                    <a href="#" aria-label="Twitter" className="hover:text-blue-400">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="h-6 w-6"
                                        >
                                            <path d="M22.46 6.003c-.793.35-1.644.586-2.54.69.913-.547 1.616-1.414 1.946-2.447-.854.506-1.798.873-2.805 1.07A4.39 4.39 0 0015.847 4c-2.407 0-4.356 1.952-4.356 4.36 0 .342.036.676.11 1.003C7.724 9.176 4.1 7.238 1.67 4.155a4.381 4.381 0 00-.588 2.188c0 1.51.769 2.845 1.94 3.623-.715-.02-1.387-.218-1.975-.544v.055c0 2.11 1.497 3.873 3.486 4.275-.364.1-.75.154-1.15.154-.28 0-.554-.026-.822-.078.556 1.734 2.168 2.995 4.074 3.03-1.492 1.172-3.37 1.872-5.41 1.872-.35 0-.696-.02-1.038-.059a10.87 10.87 0 005.897 1.73c7.072 0 10.937-5.855 10.937-10.937 0-.168-.004-.336-.012-.504a7.762 7.762 0 001.902-1.977z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            {/* Duplicate similar blocks for additional team members */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-[329px] h-[231px]  relative mb-4">
                                    <img 
                                        src="/assets/media.png" // Replace with your image paths
                                        alt="Team Member 1"
                                        className="rounded-lg object-cover"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">Username</h3>
                                <p className="text-gray-600">Profession</p>
                                <div className="flex justify-center mt-3 space-x-4 text-blue-500">
                                    <a href="#" aria-label="Facebook" className="hover:text-blue-600">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="h-6 w-6"
                                        >
                                            <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877V14.89h-2.54v-2.89h2.54v-2.203c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.196 2.238.196v2.461h-1.26c-1.243 0-1.63.772-1.63 1.563V12h2.773l-.443 2.89h-2.33v7.027C18.343 21.129 22 16.992 22 12z" />
                                        </svg>
                                    </a>
                                    <a href="#" aria-label="Instagram" className="hover:text-pink-600">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="h-6 w-6"
                                        >
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.31.976.976 1.249 2.242 1.31 3.608.058 1.265.069 1.645.069 4.849s-.012 3.584-.069 4.849c-.062 1.366-.336 2.633-1.31 3.608-.976.976-2.242 1.249-3.608 1.31-1.265.058-1.645.069-4.849.069s-3.584-.012-4.849-.069c-1.366-.062-2.633-.336-3.608-1.31-.976-.976-1.249-2.242-1.31-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.069-4.849c.062-1.366.336-2.633 1.31-3.608.976-.976 2.242-1.249 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.332.015 7.052.072 5.775.128 4.685.375 3.785 1.275 2.885 2.175 2.638 3.266 2.582 4.543 2.525 5.822 2.511 6.231 2.511 9.5s.015 3.679.072 4.957c.056 1.277.303 2.368 1.203 3.268.9.9 1.99 1.147 3.268 1.203 1.277.056 1.686.072 4.957.072s3.679-.015 4.957-.072c1.277-.056 2.368-.303 3.268-1.203.9-.9 1.147-1.99 1.203-3.268.057-1.278.072-1.686.072-4.957s-.015-3.679-.072-4.957c-.056-1.277-.303-2.368-1.203-3.268-.9-.9-1.99-1.147-3.268-1.203C15.679.015 15.27 0 12 0z" />
                                        </svg>
                                    </a>
                                    <a href="#" aria-label="Twitter" className="hover:text-blue-400">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="h-6 w-6"
                                        >
                                            <path d="M22.46 6.003c-.793.35-1.644.586-2.54.69.913-.547 1.616-1.414 1.946-2.447-.854.506-1.798.873-2.805 1.07A4.39 4.39 0 0015.847 4c-2.407 0-4.356 1.952-4.356 4.36 0 .342.036.676.11 1.003C7.724 9.176 4.1 7.238 1.67 4.155a4.381 4.381 0 00-.588 2.188c0 1.51.769 2.845 1.94 3.623-.715-.02-1.387-.218-1.975-.544v.055c0 2.11 1.497 3.873 3.486 4.275-.364.1-.75.154-1.15.154-.28 0-.554-.026-.822-.078.556 1.734 2.168 2.995 4.074 3.03-1.492 1.172-3.37 1.872-5.41 1.872-.35 0-.696-.02-1.038-.059a10.87 10.87 0 005.897 1.73c7.072 0 10.937-5.855 10.937-10.937 0-.168-.004-.336-.012-.504a7.762 7.762 0 001.902-1.977z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            {/* _____________________________________________________ */}
                            <div className="flex flex-col items-center text-center">
                                <div className=" w-[329px] h-[231px] relative mb-4">
                                    <img 
                                        src="/assets/team-1-user-3.png" // Replace with your image paths
                                        alt="Team Member 1"
                                        className="rounded-lg object-cover"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">Username</h3>
                                <p className="text-gray-600">Profession</p>
                                <div className="flex justify-center mt-3 space-x-4 text-blue-500">
                                    <a href="#" aria-label="Facebook" className="hover:text-blue-600">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="h-6 w-6"
                                        >
                                            <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877V14.89h-2.54v-2.89h2.54v-2.203c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.196 2.238.196v2.461h-1.26c-1.243 0-1.63.772-1.63 1.563V12h2.773l-.443 2.89h-2.33v7.027C18.343 21.129 22 16.992 22 12z" />
                                        </svg>
                                    </a>
                                    <a href="#" aria-label="Instagram" className="hover:text-pink-600">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="h-6 w-6"
                                        >
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.31.976.976 1.249 2.242 1.31 3.608.058 1.265.069 1.645.069 4.849s-.012 3.584-.069 4.849c-.062 1.366-.336 2.633-1.31 3.608-.976.976-2.242 1.249-3.608 1.31-1.265.058-1.645.069-4.849.069s-3.584-.012-4.849-.069c-1.366-.062-2.633-.336-3.608-1.31-.976-.976-1.249-2.242-1.31-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.069-4.849c.062-1.366.336-2.633 1.31-3.608.976-.976 2.242-1.249 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.332.015 7.052.072 5.775.128 4.685.375 3.785 1.275 2.885 2.175 2.638 3.266 2.582 4.543 2.525 5.822 2.511 6.231 2.511 9.5s.015 3.679.072 4.957c.056 1.277.303 2.368 1.203 3.268.9.9 1.99 1.147 3.268 1.203 1.277.056 1.686.072 4.957.072s3.679-.015 4.957-.072c1.277-.056 2.368-.303 3.268-1.203.9-.9 1.147-1.99 1.203-3.268.057-1.278.072-1.686.072-4.957s-.015-3.679-.072-4.957c-.056-1.277-.303-2.368-1.203-3.268-.9-.9-1.99-1.147-3.268-1.203C15.679.015 15.27 0 12 0z" />
                                        </svg>
                                    </a>
                                    <a href="#" aria-label="Twitter" className="hover:text-blue-400">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="h-6 w-6"
                                        >
                                            <path d="M22.46 6.003c-.793.35-1.644.586-2.54.69.913-.547 1.616-1.414 1.946-2.447-.854.506-1.798.873-2.805 1.07A4.39 4.39 0 0015.847 4c-2.407 0-4.356 1.952-4.356 4.36 0 .342.036.676.11 1.003C7.724 9.176 4.1 7.238 1.67 4.155a4.381 4.381 0 00-.588 2.188c0 1.51.769 2.845 1.94 3.623-.715-.02-1.387-.218-1.975-.544v.055c0 2.11 1.497 3.873 3.486 4.275-.364.1-.75.154-1.15.154-.28 0-.554-.026-.822-.078.556 1.734 2.168 2.995 4.074 3.03-1.492 1.172-3.37 1.872-5.41 1.872-.35 0-.696-.02-1.038-.059a10.87 10.87 0 005.897 1.73c7.072 0 10.937-5.855 10.937-10.937 0-.168-.004-.336-.012-.504a7.762 7.762 0 001.902-1.977z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* big companies */}



            </div>
            {/* <div className="bg-green-500 text-center h-[479px] flex flex-col justify-center gap-28"> */}
            <div className="bg-[#FAFAFA] text-center h-[479px] flex flex-col justify-center gap-28">
                <div className="space-y-6 text-center">
                    <h3 className="font-bold text-4xl">Big Companies Are Here</h3>
                    <p className="text-sm ">Problems trying to resolve the conflict between  <br />
                        the two major realms of Classical physics: Newtonian mechanics </p>
                </div>


                <div className="flex items-center justify-center gap-20">
                    {
                        cientsLogos.map((cimages, i) => (
                            <div key={i} >
                                <img  src={cimages.image} alt={cimages.alt} />
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* work with us */}
            <div className="flex ">

                {/* Left */}
                <div className="bg-blue-600 h-[637px] w-8/12 flex justify-center items-center">
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
                <div className=" h-[637px] w-4/12 flex items-end bg-[#e7ebee]">
                    <img  src="/assets/unsplash.png" alt="" />
                </div>
            </div>
        </div>
    );
}












