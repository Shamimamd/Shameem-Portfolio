// ye pura code as it is paste kr dena contact component me

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const service_id = "service_mvd3rdk";
    const template_id = "template_7bxymv1";
    const user_id = "TEIbwwSz4mZBPD33d";

    const timeField = form.current.querySelector('input[name="time"]');
    timeField.value = new Date().toLocaleString();

    emailjs
      .sendForm(service_id, template_id, form.current, {
        publicKey: user_id,
      })
      .then(() => {
        form.current.reset();
        toast.success("Message sent successfully! ✅");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to send message.");
      });
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-600 dark:text-white">
          CONTACT
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I'd love to hear from you—reach out for any opportunities or
          questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-md bg-white dark:bg-[#0d081f] p-6 rounded-lg shadow-lg border dark:border-gray-700 border-black/25 ">
        <h3 className="text-xl font-semibold text-gray-600 dark:text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-4 flex flex-col space-y-4"
        >
          <input type="hidden" name="time" />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md text-gray-600 bg-white dark:bg-[#131025] dark:text-white border dark:border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md text-gray-600 bg-white dark:bg-[#131025] dark:text-white border dark:border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="title"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md text-gray-600 bg-white dark:bg-[#131025] dark:text-white border dark:border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md text-gray-600 bg-white dark:bg-[#131025] dark:text-white border dark:border-gray-600 focus:outline-none focus:border-purple-500"
          />

          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
