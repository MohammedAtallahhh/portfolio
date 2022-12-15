import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const formElement = useRef();
  const initialFormState = { name: "", email: "", message: "" };
  const [form, setForm] = useState(initialFormState);

  const sendEmail = (e) => {
    e.preventDefault();

    const { email, message } = form;
    const pattern =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!pattern.test(email)) {
      return toast.error("Please enter a valid email address!");
    }

    if (!message) {
      return toast.error("Please enter a message!");
    }

    try {
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formElement.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );

      setForm(initialFormState);
      return toast.success("Message sent!");
      //
    } catch (error) {
      return toast.error(error.message);
    }
  };

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.25 }}
      >
        <div className="container">
          <h2 className="mb-10 text-5xl md:text-6xl gradient-text">
            Let&apos;s Talk
          </h2>

          <form
            ref={formElement}
            onSubmit={sendEmail}
            action="#"
            className="space-y-8 max-w-[600px]"
          >
            <div>
              <label
                htmlFor="name"
                className="block mb-2 font-medium text-accent dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                required
                className="block w-full p-4 border border-gray-300 rounded-lg shadow-sm text-accent focus:outline-none focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-gray-400 dark:focus:border-gray-400 dark:shadow-sm-light"
                value={form.name}
                onChange={(e) =>
                  setForm((form) => ({ ...form, name: e.target.value }))
                }
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-accent"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="name@gmail.com"
                required
                className="block w-full p-4 border border-gray-300 rounded-lg shadow-sm text-accent bg-gray-50 focus:outline-none focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-gray-400 dark:focus:border-gray-400 dark:shadow-sm-light"
                value={form.email}
                onChange={(e) =>
                  setForm((form) => ({ ...form, email: e.target.value }))
                }
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 font-medium text-accent dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Leave a comment..."
                className="block w-full p-4 border border-gray-300 rounded-lg shadow-sm text-accent bg-gray-50 focus:outline-none focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-gray-400 dark:focus:border-gray-400"
                value={form.message}
                onChange={(e) =>
                  setForm((form) => ({ ...form, message: e.target.value }))
                }
              />
            </div>
            <motion.button
              type="submit"
              className="btn btn--primary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.25 }}
            >
              Send message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
