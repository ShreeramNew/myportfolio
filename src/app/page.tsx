import Image from "next/image";
import pic from "../../assets/images/profile.png";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";

export default function Home() {
  return (
    <div>
      <Intro />
      <Experience />
      <Projects />
      <Skills />
      <Education />
    </div>
  );
}
