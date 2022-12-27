import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const contactVariants = {
  initial: { opacity: 0, x: -200 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.25 },
};

const buttonVariants = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { delay: 0.25, duration: 0.25 },
};

const inputClass =
  "block w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:shadow-md text-accent bg-[#eee] focus:outline-none focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-gray-400 dark:focus:border-gray-400";

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
    <section className="bg-background-light">
      <motion.div {...contactVariants}>
        <div className="container">
          <h2 className="gradient-text">Let&apos;s Talk</h2>

          <form
            ref={formElement}
            onSubmit={sendEmail}
            action="#"
            className="space-y-8 max-w-[600px]"
          >
            <div>
              <label
                htmlFor="name"
                className="block mb-2 font-medium text-accent-light"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className={inputClass}
                value={form.name}
                required
                onChange={(e) =>
                  setForm((form) => ({ ...form, name: e.target.value }))
                }
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-accent-light"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="name@gmail.com"
                className={inputClass}
                value={form.email}
                required
                onChange={(e) =>
                  setForm((form) => ({ ...form, email: e.target.value }))
                }
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 font-medium text-accent-light"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Leave a comment..."
                className={inputClass}
                value={form.message}
                onChange={(e) =>
                  setForm((form) => ({ ...form, message: e.target.value }))
                }
              />
            </div>
            <motion.button
              type="submit"
              className="btn btn--primary"
              {...buttonVariants}
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
