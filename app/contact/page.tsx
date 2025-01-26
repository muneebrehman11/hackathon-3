
import Image from "next/image";

export default function Contact() {
  return (
    <section className="bg-white">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 lg:px-16 mt-16 gap-8">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col space-y-4 text-left">
          <h2 className="text-base text-black font-bold uppercase tracking-wide">
            CONTACT US
          </h2>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-900">
            Get in touch today!
          </h1>
          <p className="text-gray-600">
            We know how large objects will act, but things on a small scale
          </p>
          <p className="text-gray-600">Phone: +451 215 215</p>
          <p className="text-gray-600">Fax: +451 215 215</p>
          <div className="flex gap-3 py-5">
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

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/assets/none.png"
            alt="Shopping Lady"
            width={605}
            height={668}
            className="w-full h-auto max-w-[605px]"
          />
        </div>
      </div>

      {/* Middle Section */}
      <div className="space-y-10 py-16 px-4 sm:px-8 lg:px-16">
        <div className="text-center">
          <p className="font-semibold text-gray-600">VISIT OUR OFFICE</p>
          <h4 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 max-w-[555px] mx-auto">
            We help small businesses with big ideas
          </h4>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* Card 1 */}
          <div className="w-full max-w-[300px] flex flex-col items-center p-6 hover:shadow-xl hover:border rounded-lg transition-all">
            <Image
              src="/assets/phone.png"
              alt="phone-icon"
              width={72}
              height={72}
            />
            <a href="#" className="text-gray-600 mt-4">
              georgia.young@example.com
            </a>
            <a href="#" className="text-gray-600">
              georgia.young@ple.com
            </a>
            <a href="#" className="text-blue-500 font-semibold mt-4">
              Get Support
            </a>
            <button className="border-2 text-blue-500 border-blue-500 hover:bg-blue-100 px-6 py-2 rounded-full mt-4 transition-all">
              Submit Request
            </button>
          </div>

          {/* Card 2 */}
          <div className="w-full max-w-[300px] flex flex-col items-center p-6 bg-blue-950 text-white hover:shadow-xl hover:border rounded-lg transition-all">
            <Image
              src="/assets/location.png"
              alt="location-icon"
              width={72}
              height={72}
            />
            <a href="#" className="mt-4">
              georgia.young@example.com
            </a>
            <a href="#">georgia.young@ple.com</a>
            <a href="#" className="text-blue-500 font-semibold mt-4">
              Get Support
            </a>
            <button className="border-2 text-blue-500 border-blue-500 hover:bg-blue-100 px-6 py-2 rounded-full mt-4 transition-all">
              Submit Request
            </button>
          </div>

          {/* Card 3 */}
          <div className="w-full max-w-[300px] flex flex-col items-center p-6 hover:shadow-xl hover:border rounded-lg transition-all">
            <Image
              src="/assets/mail.png"
              alt="mail-icon"
              width={72}
              height={72}
            />
            <a href="#" className="text-gray-600 mt-4">
              georgia.young@example.com
            </a>
            <a href="#" className="text-gray-600">
              georgia.young@ple.com
            </a>
            <a href="#" className="text-blue-500 font-semibold mt-4">
              Get Support
            </a>
            <button className="border-2 text-blue-500 border-blue-500 hover:bg-blue-100 px-6 py-2 rounded-full mt-4 transition-all">
              Submit Request
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center justify-center py-16 px-4 sm:px-8 lg:px-16 space-y-6 bg-gray-50">
        <Image
          src="/assets/arrow2.png"
          alt="arrow-icon"
          width={72}
          height={22}
          className="hover:opacity-80 cursor-pointer"
        />
        <p className="font-semibold text-gray-600">WE CAN&apos;T WAIT TO MEET YOU</p>
        <h4 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900">
          Let&apos;s Talk
        </h4>
        <button className="bg-blue-500 rounded text-white px-8 py-3 hover:bg-blue-600 transition-all">
          Try it for now
        </button>
      </div>
    </section>
  );
}