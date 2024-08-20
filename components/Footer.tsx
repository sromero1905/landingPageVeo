import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black-900 text-gray-400 py-8 mt-12 mb-10 rounded-lg">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="flex flex-col sm:flex-row items-center justify-between">
          {/* Group 1 - Terms & Conditions and Privacy */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 mb-10 sm:mb-0">
            <Link
              href="/terms"
              className="hover:text-gray-100 text-sm px-2 py-1 hover:underline hover:underline-offset-4 hover:decoration-gray-500 transition duration-300 ease-in-out"
            >
              Términos y Condiciones
            </Link>
            <Link
              href="/privacy"
              className="hover:text-gray-100 text-sm px-2 py-1 hover:underline hover:underline-offset-4 hover:decoration-gray-500 transition duration-300 ease-in-out"
            >
              Política de Privacidad
            </Link>
          </div>

          {/* Group 2 - Contact & Copyright */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-2">
              <p className="text-sm text-gray-500">Contacto:</p>
              <a
                href="mailto:info@veo.com"
                className="text-sm text-gray-500 hover:text-gray-100 transition duration-300 ease-in-out"
                aria-label="Contact"
              >
                info@veo.com
              </a>
            </div>
            <p className="text-sm text-gray-500 ml-4">
              Copyright &copy; 2024{" "}
              <Link
                href="/"
                className="hover:text-gray-100 transition duration-300 ease-in-out"
              >
                Veo S.A
              </Link>
            </p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mt-4 justify-center">
          <a
            href="https://linkedin.com"
            className="hover:text-gray-100 transition duration-500 ease-in-out"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="h-10 w-10 rounded-full border border-gray-700 p-2 hover:bg-gray-700" />
          </a>
        </div>
      </div>
    </footer>
  );
}
