import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import PersonalImage from "@/components/PersonalImage";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";

export default function Home() {
  return (
    <>
      <PersonalImage />
      <Stack />
      <AboutMe />
      <Projects />
      <Footer />
    </>
  );
}
