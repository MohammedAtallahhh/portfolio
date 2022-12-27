import Image from "next/image";

import Tools from "./Tools";
const About = () => {
  return (
    <section className="bg-blue-100 dark:bg-gray-800">
      <div className="container">
        <div className="max-w-[500px] mx-auto md:max-w-none">
          <h2 className="gradient-text">About Me</h2>

          <div className="flex flex-col items-center gap-10 mb-16 md:items-start md:flex-row">
            <div className="border-2 border-blue-300 flex items-center justify-center flex-shrink-0 md:w-[45%] w-full shadow-lg">
              <Image
                src="/images/logo.webp"
                alt="My photo"
                fill
                className="!relative min-h-[450px] object-cover"
              />
            </div>

            <div className="">
              <h2 className="mb-5 text-3xl font-semibold md:leading-snug">
                My name is Mohammed Atallah!
              </h2>

              <div className="flex flex-col gap-3 mb-16 text-lg text-accent-lighter">
                <p>
                  I am a detail-oriented Frontend developer looking for an
                  opportunity to share my passion and knowledge with like-minded
                  people. Eagar to gain experience and learn more to bring
                  better quality solutions to the world.
                </p>

                <p>
                  I am a fast learner and love to learn new things and always
                  seek out new challenges and opportunities. I am adaptable to
                  changes and always ready to deal with arising problems.
                </p>

                <p>
                  You can contact me by email at{" "}
                  <a
                    href="mailto:mohamedatallahh2017@gmail.com"
                    className="link"
                  >
                    mohamedatallahh@gmail.com
                  </a>{" "}
                  to say hi! I always appreciate meeting new people.
                </p>
              </div>

              <a
                href="/assets/resume.pdf"
                target="_blank"
                className="btn--primary"
              >
                Resume
              </a>
            </div>
          </div>

          <Tools />
        </div>
      </div>
    </section>
  );
};

export default About;
