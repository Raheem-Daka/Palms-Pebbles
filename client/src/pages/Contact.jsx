import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Import correct icons

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [open, setOpen] = useState(false); // Manage the popup visibility

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true when form is being submitted

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_KEY,
        import.meta.env.VITE_EMAILJS_TEMPLATE_KEY,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSuccess(true); // Set success state to true
          setIsError(false); // Reset error state
          setOpen(true); // Open the success popup
          form.current.reset();
        },
        (error) => {
          setIsError(true); // Set error state to true
          setIsSuccess(false); // Reset success state
          setOpen(true); // Open the error popup
          console.error(error);
        }
      )
      .finally(() => {
        setLoading(false); // Reset loading state after the submission is finished
      });
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center mx-auto px-5">
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
            className={`w-full ${loading ? "bg-gray-400" : "bg-gray-800"} text-white py-3 rounded-md hover:bg-white hover:border hover:text-gray-800 hover:border-gray-800 transition ease-in-out font-playfair`}
            disabled={loading} // Disable the button while loading
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Success/Failure Popup */}
        {open && isSuccess && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-opacity-50">
            <div className="bg-white p-6 w-full h-full shadow-xl flex items-center justify-center flex-col">
              <FaTimesCircle
                size={25}
                className="text-gray-800 cursor-pointer absolute top-4 right-4"
                onClick={() => setOpen(false)} // Close popup when clicked
              />
              <FaCheckCircle size={50} className="text-green-500 text-5xl" />
              <h3 className="mt-4 text-lg font-semibold font-playfair">
                Message Sent Successfully!
              </h3>
            </div>
          </div>
        )}

        {open && isError && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-opacity-50">
            <div className="bg-white p-6 w-full h-full shadow-xl flex items-center justify-center flex-col">
              <FaTimesCircle 
              size={25}
              className="text-gray-800 cursor-pointer absolute top-4 right-4"
                onClick={() => setOpen(false)} // Close popup when clicked
              />
              <FaTimesCircle size={50} className="text-red-500 text-5xl" />
              <h3 className="mt-4 text-lg font-semibold font-playfair">
                Something Went Wrong. Try Again.
              </h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
