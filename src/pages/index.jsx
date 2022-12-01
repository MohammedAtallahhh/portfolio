import Image from "next/image";
import { Hero, PageHead, Tools } from "../components";

export default function Home() {
  return (
    <>
      <PageHead
        title="Mohammed Atallah"
        description="A Frontend developer with focus on React, Nextjs and CSS. I have 2 years of experience working on JavaScript and React projects considering responsive design, accessibility and clean code."
      />

      <div className="container">
        <Hero />
        <Tools />
      </div>
    </>
  );
}
