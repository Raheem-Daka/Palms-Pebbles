import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_KEY,
        import.meta.env.VITE_EMAILJS_TEMPLATE_KEY,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Something went wrong. Try again.");
          console.error(error);
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center  mx-auto px-5">
      <div className="w-full lg:max-w-4xl md:max-w-md shadow-[0px_0px_20px_rgb(0,0,0,0.15)] p-8 rounded-xl">
        <h1 className="text-4xl font-semibold mb-2 font-playfair">Get in Touch</h1>
        <p className="text-stone-600 mb-8 font-playfair">
          Have a question or want to work together?
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full border rounded-md px-4 py-3 font-playfair"
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full border rounded-md px-4 py-3 font-playfair"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full border rounded-md px-4 py-3 resize-none font-playfair"
          />

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-white hover:border hover:text-gray-800 hover:border-gray-800 transition ease-in-out font-playfair"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
