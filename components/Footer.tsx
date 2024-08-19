import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black-900 text-gray-400 py-8 mt-12 mb-10 rounded-lg">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 sm:flex-row">
        {/* Buttons */}
        <div className="flex space-x-6 mb-4 sm:mb-0">
          <a
            href="#terms"
            className="hover:text-gray-100 text-sm px-2 py-1 hover:underline hover:underline-offset-4 hover:decoration-gray-500 transition duration-300 ease-in-out"
          >
            Términos y Condiciones
          </a>
          <a
            href="#privacy"
            className="hover:text-gray-100 text-sm px-2 py-1 hover:underline hover:underline-offset-4 hover:decoration-gray-500 transition duration-300 ease-in-out"
          >
            Política de Privacidad
          </a>
        </div>

        {/* Copyright */}
        <div className="flex items-center space-x-2 justify-center w-full">
          <p className="text-sm text-gray-500 mx-auto sm:ml-10">
            Copyright &copy; 2024{" "}
            <a
              href="#"
              className="hover:text-gray-100 transition duration-300 ease-in-out"
            >
              Veo S.A
            </a>
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mt-4">
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
