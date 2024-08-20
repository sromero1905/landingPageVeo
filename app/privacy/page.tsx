"use client";

import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";

const PrivacyPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-200">
      <header className="py-8 bg-gray-800 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold">Política de Privacidad</h1>
          <button
            onClick={() => router.back()}
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition duration-300 ease-in-out shadow-md"
          >
            Volver
          </button>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Introducción</h2>
        <p className="mb-6">
          En Veo S.A., respetamos su privacidad y nos comprometemos a proteger
          la información personal que recopilamos de nuestros usuarios. Esta
          Política de Privacidad describe cómo recopilamos, usamos y protegemos
          su información.
        </p>

        <h2 className="text-2xl font-semibold mb-6">
          Información que Recopilamos
        </h2>
        <p className="mb-6">
          Recopilamos información personal que usted nos proporciona al utilizar
          nuestros servicios o interactuar con nosotros. Esto puede incluir su
          nombre, dirección de correo electrónico, y otra información relevante.
          También recopilamos datos sobre su interacción con nuestro sitio, como
          su dirección IP y datos de navegación.
        </p>

        <h2 className="text-2xl font-semibold mb-6">Uso de la Información</h2>
        <p className="mb-6">
          Utilizamos la información personal que recopilamos para ofrecerle
          nuestros servicios, mejorar su experiencia con Veo S.A., y
          comunicarnos con usted. Esto puede incluir el envío de actualizaciones
          sobre nuestros servicios y otras comunicaciones relevantes.
        </p>

        <h2 className="text-2xl font-semibold mb-6">Protección de Datos</h2>
        <p className="mb-6">
          Implementamos medidas de seguridad adecuadas para proteger su
          información personal contra accesos no autorizados y otros riesgos.
          Sin embargo, dado que ningún método de transmisión por Internet o
          almacenamiento electrónico es completamente seguro, no podemos
          garantizar la seguridad absoluta de su información.
        </p>

        <h2 className="text-2xl font-semibold mb-6">Cookies</h2>
        <p className="mb-6">
          Utilizamos cookies para mejorar su experiencia en nuestro sitio web.
          Las cookies son pequeños archivos de texto que se almacenan en su
          dispositivo y nos ayudan a recordar sus preferencias. Puede configurar
          su navegador para rechazar cookies, aunque esto puede afectar la
          funcionalidad del sitio.
        </p>

        <h2 className="text-2xl font-semibold mb-6">
          Derechos de los Usuarios
        </h2>
        <p className="mb-6">
          Tiene el derecho de acceder, corregir o eliminar la información
          personal que poseemos sobre usted. Si desea ejercer estos derechos,
          por favor contáctenos utilizando el correo electrónico proporcionado
          más abajo.
        </p>

        <h2 className="text-2xl font-semibold mb-6">
          Cambios en la Política de Privacidad
        </h2>
        <p className="mb-6">
          Podemos actualizar esta Política de Privacidad para reflejar cambios
          en nuestras prácticas. Publicaremos cualquier cambio en nuestro sitio
          web y le notificaremos sobre actualizaciones importantes.
        </p>

        <h2 className="text-2xl font-semibold mb-6">Contacto</h2>
        <p className="mb-6">
          Si tiene preguntas sobre esta Política de Privacidad o sobre cómo
          manejamos su información personal, contáctenos en{" "}
          <a
            href="mailto:info@veo.com"
            className="text-blue-400 hover:underline"
          >
            info@veo.com
          </a>
          .
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
