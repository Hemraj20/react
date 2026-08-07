// Footer.jsx
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Company */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Your Project
          </h2>
          <p className="text-gray-400">
            Creating modern, responsive, and user-friendly web applications for
            businesses and individuals.
          </p>
          <div className="flex gap-2 text-2xl ">
          <FaFacebook className="text-blue-700"/>
          <FaInstagramSquare className="text-pink-700"/>
          <FaSquareTwitter/>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Navigation
          </h3>

          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact
          </h3>

          <p>Email: info@example.com</p>
          <p>Phone: +977-98XXXXXXXX</p>
          <p>Kathmandu, Nepal</p>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Legal
          </h3>

          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Cookies Policy</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} My Project. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;