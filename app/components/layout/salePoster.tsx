
import { Phone } from "lucide-react";
import { SiInstagram, SiYoutube, SiFacebook } from "react-icons/si";
import { Mail } from "lucide-react";

export default function Sale() {
  return (
    <div className="bg-gray-900 text-white py-4 ">
      <div className="container flex flex-col md:flex-row justify-between items-center text-sm px-6 sm:px-10 max-w-screen-2xl mx-auto space-y-4 md:space-y-0">
        {/* Contact Information */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex items-center space-x-2">
            <span className="text-blue-400">
              <Phone />
            </span>
            <p>(225) 555-0118</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-blue-400">
              <Mail />
            </span>
            <p>michelle.rivera@example.com</p>
          </div>
        </div>

        {/* Offer Section */}
        <div className="text-center md:text-left">
          <p>Follow us and get a chance to win 80% off</p>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center space-x-4">
          <p className="hidden md:block">Follow Us:</p>
          <a href="#" className="text-blue-400 hover:text-blue-500">
            <SiInstagram />
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-500">
            <SiYoutube />
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-500">
            <SiFacebook />
          </a>
          <a
            href="#"
            className="text-blue-400 hover:text-blue-500"
            aria-label="Twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
            >
              <path
                d="M23.49 4.562c-.883.392-1.832.654-2.83.774 1.018-.61 1.795-1.574 2.165-2.723-.951.56-2.004.968-3.126 1.186-.897-.955-2.18-1.553-3.602-1.553-2.743 0-4.96 2.186-4.96 4.88 0 .383.045.758.133 1.113-4.123-.207-7.78-2.212-10.23-5.273-.428.735-.671 1.588-.671 2.494 0 1.72.872 3.23 2.18 4.127-.804-.025-1.562-.246-2.228-.616v.062c0 2.401 1.724 4.409 4.013 4.868-.418.113-.858.173-1.301.173-.319 0-.63-.031-.937-.086.63 1.961 2.462 3.394 4.637 3.436-1.698 1.352-3.843 2.163-6.168 2.163-.4 0-.797-.023-1.191-.07 2.18 1.378 4.787 2.185 7.571 2.185 9.06 0 14.03-7.26 14.03-13.568 0-.21-.004-.423-.014-.634.963-.693 1.8-1.558 2.461-2.548z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
