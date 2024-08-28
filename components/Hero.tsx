import { FaLocationArrow } from "react-icons/fa6";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="relative pb-20 pt-36 mb-20 lg:mb-60"> {/* Ajustar margen inferior para pantallas grandes */}
      <div>
        {/* Adjusted Spotlight components */}
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-[60vh] w-[40vw]"
          fill="white"
        />
      </div>

      {/* Background Image */}
      <div
        className="h-[85vh] w-full bg-cover bg-center absolute top-0 left-0 rounded-2xl mt-16 mb-36" // Increased height
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        {/* Overlay with Filter */}
        <div className="absolute inset-0 bg-black opacity-60 rounded-2xl"></div> {/* Match the rounded corners */}
      </div>

      <div className="flex justify-center relative mt-28 md:mt-40 z-10">
        <div className="max-w-[87vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h1 className="uppercase tracking-widest text-xs md:text-sm lg:text-base text-center text-blue-100 whitespace-nowrap">
            Verificadora Externa de Obra
          </h1>

          <TextGenerateEffect
            words="Precisión en Verificación para Inmuebles y Obras de Alto Nivel"
            className="text-center text-[32px] md:text-4xl lg:text-5xl"
          />
          <h2 className="text-center md:tracking-wider mb-4 text-sm md:text-base lg:text-xl">
            Asegurando Calidad y Seguridad en Cada Proyecto
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
