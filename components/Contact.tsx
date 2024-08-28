"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from 'emailjs-com';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = (): boolean => {
    const errors: FormErrors = {};
    if (!formData.name) errors.name = "El nombre es obligatorio";
    if (!formData.email) errors.email = "El correo electrónico es obligatorio";
    if (!formData.message) errors.message = "El mensaje es obligatorio";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      setIsSending(true);
      setSendError(null); // Reset error message
      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          {
            user_name: formData.name,
            user_email: formData.email,
            message: formData.message,
          },
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
        );
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      } catch {
        setSendError("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.");
      } finally {
        setIsSending(false);
        setTimeout(() => setIsSubmitted(false), 3000); // Hide success message after 3 seconds
      }
    }
  };

  return (
    <section className="w-full max-w-4xl mx-auto py-12 px-6">
      <h1 className="heading mb-8 text-white">Contáctanos</h1>
      <div className="bg-[#010319] rounded-lg shadow-lg p-8">
        {isSubmitted && (
          <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-lg">
            ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.
          </div>
        )}
        {sendError && (
          <div className="mb-4 p-4 bg-red-100 text-red-800 rounded-lg">
            {sendError}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              className="block text-lg font-medium mb-2 text-white"
              htmlFor="name"
            >
              Nombre
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-800 text-white"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <label
              className="block text-lg font-medium mb-2 text-white"
              htmlFor="email"
            >
              Correo Electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-800 text-white"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label
              className="block text-lg font-medium mb-2 text-white"
              htmlFor="message"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-800 text-white resize-none"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className={`w-full py-3 px-6 rounded-lg transition duration-300 ${
              isSending
                ? "bg-gray-600 text-white cursor-not-allowed"
                : "bg-gray-500 text-white hover:bg-gray-600"
            }`}
          >
            {isSending
              ? "Enviando..."
              : isSubmitted
              ? "Enviado ✔"
              : "Enviar Mensaje"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
