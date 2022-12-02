import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative py-10 overflow-hidden md:py-20">
      <div className="container flex flex-col gap-8 md:gap-10 md:flex-row md:items-center md:justify-center">
        {/* circles backgorund */}
        <div className="absolute inset-0 w-full h-full -z-10 dark:invert-[20%]">
          <Image
            src="/images/circles.png"
            alt="circles backgorund"
            layout="fill"
            className="img"
          />
        </div>

        <div className="relative flex-shrink-0 w-48 h-48 mx-auto select-none md:mx-0">
          <Image
            src="/images/logo2.webp"
            alt="Logo avatar"
            layout="fill"
            className="border-4 rounded-full img border-text-gradient-via"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="mb-2 text-4xl leading-tight md:leading-snug gradient-text">
            Hey, I&apos;am Mohammed Atallah
          </h1>

          <div className="mb-8 text-accent-light">
            <p className="mb-4 text-sm md:text-base max-w-[70ch] mx-auto md:mx-0">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
              iure deserunt quia cupiditate quae ut rerum, temporibus laborum
              perspiciatis tenetur facilis eligendi culpa blanditiis minima.
              Natus
            </p>

            <p className="text-sm md:text-base max-w-[70ch] mx-auto md:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              reiciendis deserunt perferendis cum alias hic voluptatum itaque
              dolores ut vitae, aut molestias voluptates iste libero!
            </p>
          </div>

          <button className="btn--primary focus:ring-offset-1 focus:ring-2 active:scale-[102%]">
            Explore projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
