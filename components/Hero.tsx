import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
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
        <div className="absolute inset-0 bg-black opacity-60 rounded-2xl"></div>{" "}
        {/* Match the rounded corners */}
      </div>

      <div className="flex justify-center relative mt-40 z-10">
        {" "}
        {/* Increased mt-40 for more space */}
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs md:text-sm lg:text-base text-center text-blue-100 max-w-80">
            Verificador De Obra Externa
          </p>

          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[32px] md:text-4xl lg:text-5xl"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-base lg:text-xl">
            Asegurando Calidad y Seguridad en Cada Proyecto
          </p>

          <a href="#about">
            <MagicButton
              title="Show our work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
