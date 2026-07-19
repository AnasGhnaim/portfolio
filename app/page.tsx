import About from "@/components/about-me";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import WorkExperience from"@/components/WorkExperience" ;

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <WorkExperience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
