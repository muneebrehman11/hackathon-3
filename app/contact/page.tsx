
import Image from "next/image"
export default function Contact() {
    return (
        <section>
            <div className="flex flex-col md:flex-row items-center justify-center  px-8 lg:px-16 place-content-center mt-16">
                {/* Left Section */}
                {/* <div className=" flex flex-col text-left leading-10 w-6/12 "> */}
                <div className="  w-8/12 sm:5/12 flex flex-col  leading-10  ">
                    <h2 className="text-base text-black font-bold uppercase tracking-wide">
                        CONTACT US
                    </h2>
                    <h1 className="text-3xl md:text-6xl font-semibold text-gray-900 mt-2">Get in touch today!</h1>
                    <p className="mt-4 text-gray-600">
                        We know how large objects will act,
                        but things on a small scale
                    </p>
                    <p>Phone: +451 215 215</p>
                    <p>Fax: +451 215 215</p>
                    <div className='flex gap-3 py-5' >
                        <Image  src="/assets/Vector(2).png" alt="abc" width={29.98} height={29.98}/>
                        <Image  src="/assets/logos_facebook.png" alt="abc" width={29.98} height={29.98}/>
                        <Image  src="/assets/Vector(3).png" alt="abc" width={29.98} height={29.98}/>
                        <Image  src="/assets/Vector(4).png" alt="abc" width={29.98} height={29.98}/>
                    </div>
                </div>

                {/* Right Section */}
                {/* <div className="flex-1 flex justify-center relative"> */}
                <div className=" w-6/12 flex items-end ">
                    <Image 
                        src="/assets/none.png" // Add the shopping lady image  to the public folder
                        alt="Shopping Lady"
                        width={605}
                        height={668}
                        className="relative z-10"
                    />
                </div>
            </div>


            <div className='space-y-5'>
                <div className="place-items-center">
                    <div className="text-center">
                        <p className="font-semibold">
                            VISIT OUR OFFICE
                        </p>
                        <h4 className="font-bold text-5xl max-w-[555px]">
                            We help small businesses
                            with big ideas
                        </h4>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row place-content-center place-items-center gap-2 font-semibold ">
                    <div className="max-w-72 place-items-center flex flex-col p-6 hover:shadow-xl gap-y-5  hover:border">
                        <Image  src="/assets/phone.png" alt="abc" width={72} height={72}/>
                        <a href="#">georgia.young@example.com</a>
                        <a href="#">georgia.young@ple.com</a>
                        <a href="#">Get Support</a>
                        <button className='border-2 text-blue-500 border-blue-500 hover:bg-blue-100 p-3 rounded-full'>Submit Request</button>
                    </div>

                    <div className="max-w-72  bg-blue-950 text-white  place-items-center p-6 flex flex-col  gap-y-5 hover:border">
                        <Image  src="/assets/location.png" alt="abc" width={72} height={72}/>
                        <a href="#" className="font-sm font-extralight" >georgia.young@example.com</a>
                        <a href="#" className="font-sm font-extralight">georgia.young@ple.com</a>
                        <a href="#" className="font-sm font-extralight">Get Support</a>
                        <button className='border-2 text-blue-500 border-blue-500 hover:bg-blue-100 p-3 rounded-full'>Submit Request</button>
                    </div>

                    <div className="max-w-72   place-items-center flex flex-col p-6 hover:shadow-xl gap-y-5 hover:border">
                        <Image  src="/assets/mail.png" alt="abc" width={72} height={72}/>
                        <a href="#">georgia.young@example.com</a>
                        <a href="#">georgia.young@ple.com</a>
                        <a href="#">Get Support</a>
                        <button className='border-2 text-blue-500 border-blue-500 hover:bg-blue-100 p-3 rounded-full'>Submit Request</button>
                    </div>

                </div>
            </div>
            <div className='place-items-center h-[400px] place-content-center space-y-5'>
                <Image  src="/assets/arrow2.png" alt="abc" width={72.56} height={21.84}/>
                <p className='font-semibold'>WE Can-t WAIT TO MEET YOU</p>
                <h4 className='font-bold text-6xl'>Lets-s Talk</h4>
                <button className='bg-blue-500 rounded text-white px-7 py-3 '>Try it for now</button>
            </div>
        </section>
    )
}