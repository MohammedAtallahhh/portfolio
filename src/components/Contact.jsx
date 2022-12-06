import React from "react";

const Contact = () => {
  return (
    <div className="py-16 bg-background-light dark:bg-gray-800">
      <div className="container">
        <h2 className="mb-10 text-6xl gradient-text">Let&apos;s Talk</h2>

        <form action="#" className="space-y-8 max-w-[600px]">
          <div>
            <label
              htmlFor="subject"
              class="block mb-2 font-medium text-accent dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="subject"
              className="block w-full p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-sm text-accent focus:outline-none focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-gray-400 dark:focus:border-gray-400 dark:shadow-sm-light"
              placeholder="John Doe"
              required
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
              className="block w-full p-4 border border-gray-300 rounded-lg shadow-sm text-accent bg-gray-50 focus:outline-none focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-gray-400 dark:focus:border-gray-400 dark:shadow-sm-light"
              placeholder="name@gmail.com"
              required
            />
          </div>

          <div class="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 font-medium text-accent dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block w-full p-4 border border-gray-300 rounded-lg shadow-sm text-accent bg-gray-50 focus:outline-none focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-gray-400 dark:focus:border-gray-400"
              placeholder="Leave a comment..."
            />
          </div>
          <button type="submit" className="btn btn--primary">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
