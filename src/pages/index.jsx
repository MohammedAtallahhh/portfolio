import {
  About,
  AnimatePage,
  Contact,
  Hero,
  PageHead,
  Projects,
} from "../components";

export default function Home() {
  return (
    <AnimatePage>
      <PageHead
        title="Mohammed Atallah"
        description="A Frontend developer with focus on React, Nextjs and CSS. I have 2 years of experience working on JavaScript and React projects considering responsive design, accessibility and clean code."
      />

      <div>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </AnimatePage>
  );
}
