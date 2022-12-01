import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col gap-8 py-5 md:gap-10 md:py-10 md:flex-row md:items-center md:justify-center">
      <div className="relative flex-shrink-0 w-48 h-48 mx-auto select-none md:mx-0">
        <Image
          src="/images/logo2.webp"
          alt="Logo avatar"
          layout="fill"
          className="border-4 rounded-full img border-blue-start"
        />
      </div>
      <div className="text-center md:text-left">
        <h1 className="mb-2 text-4xl leading-tight md:leading-snug gradient-text">
          Hey, I&apos;am <br className="md:inline" />
          Mohammed Atallah
        </h1>

        <div className="mb-8 text-gray-700">
          <p className="mb-4 text-sm md:text-base max-w-[55ch] mx-auto md:mx-0 dark:text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, iure
            deserunt quia cupiditate quae ut rerum, temporibus laborum
            perspiciatis tenetur facilis eligendi culpa blanditiis minima. Natus
          </p>

          <p className="text-sm md:text-base max-w-[55ch] mx-auto md:mx-0 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            reiciendis deserunt perferendis cum alias hic voluptatum itaque
            dolores ut vitae, aut molestias voluptates iste libero!
          </p>
        </div>

        <button className="btn--primary focus:ring-offset-1 focus:ring-2 focus:ring-blue-500 hover:bg-[length:100%] active:scale-105">
          Explore projects
        </button>
      </div>
    </div>
  );
};

export default Hero;
