"use client";

import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";

const PrivacyPolicyPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-200">
      <header className="py-8 bg-gray-800 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold">Política de Privacidad</h1>
          <button
            onClick={() => router.back()}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 hover:bg-gray-700 transition duration-300 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Volver
          </button>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Introducción</h2>
        <p className="mb-6">
          Esta Política de Privacidad describe cómo recopilamos, usamos y
          protegemos la información personal que usted nos proporciona a través
          de nuestro sitio web y formulario de contacto. Al utilizar nuestro
          sitio web, usted acepta las prácticas descritas en esta política.
        </p>

        <h2 className="text-2xl font-semibold mb-6">
          Información que Recopilamos
        </h2>
        <p className="mb-6">
          Recopilamos la información que usted nos proporciona directamente
          cuando completa nuestro formulario de contacto. Esto puede incluir su
          nombre, dirección de correo electrónico, número de teléfono y
          cualquier otro dato que elija proporcionarnos.
        </p>

        <h2 className="text-2xl font-semibold mb-6">Uso de la Información</h2>
        <p className="mb-6">
          Utilizamos la información que nos proporciona para responder a sus
          consultas, proporcionarle información adicional sobre nuestros
          servicios y mejorar nuestra comunicación con usted. No compartimos su
          información personal con terceros sin su consentimiento, excepto en
          los casos requeridos por la ley.
        </p>

        <h2 className="text-2xl font-semibold mb-6">
          Protección de su Información
        </h2>
        <p className="mb-6">
          Tomamos medidas razonables para proteger su información personal
          contra el acceso no autorizado, la alteración, la divulgación o la
          destrucción. Sin embargo, debe tener en cuenta que ningún método de
          transmisión por Internet o método de almacenamiento electrónico es
          100% seguro.
        </p>

        <h2 className="text-2xl font-semibold mb-6">Enlaces a Terceros</h2>
        <p className="mb-6">
          Nuestro sitio web puede contener enlaces a sitios web de terceros. No
          somos responsables de las prácticas de privacidad ni del contenido de
          esos sitios web. Le recomendamos que lea las políticas de privacidad
          de cualquier sitio web que visite.
        </p>

        <h2 className="text-2xl font-semibold mb-6">
          Cambios en esta Política
        </h2>
        <p className="mb-6">
          Podemos actualizar esta Política de Privacidad de vez en cuando para
          reflejar cambios en nuestras prácticas o en la legislación aplicable.
          Publicaremos cualquier cambio en esta página, por lo que le
          recomendamos que la revise periódicamente.
        </p>

        <h2 className="text-2xl font-semibold mb-6">Contacto</h2>
        <p className="mb-6">
          Si tiene alguna pregunta o inquietud sobre esta Política de
          Privacidad, por favor, contáctenos a través del siguiente correo
          electrónico:{" "}
          <a
            href="mailto:info@veosa.com.ar"
            className="text-blue-400 hover:underline"
          >
            info@veosa.com.ar
          </a>
          .
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
