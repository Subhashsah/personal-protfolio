import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Section */}
        <div className="text-sm">
          © {new Date().getFullYear()} <span className="font-semibold text-white">Subhash</span>. All rights reserved.
        </div>

        {/* Right Section - Social Links */}
        <div className="flex gap-5">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300 flex items-center gap-1"
          >
            
            <span className="hidden sm:inline"><FaGithub size={28} /></span>
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300 flex items-center gap-1"
          >
            
            <span className="hidden sm:inline"><FaLinkedin size={28}/></span>
          </a>

          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300 flex items-center gap-1"
          >
            
          
            <span className="hidden sm:inline"><FaFacebookF size={28}/></span>
          </a>
        </div>
      </div>
    </footer>
  );
}
