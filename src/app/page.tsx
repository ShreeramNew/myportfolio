import Image from "next/image";
import pic from "../../assets/images/pic.jpg";
import Intro from "./components/Intro";
import Experience from "./components/Experience";

export default function Home() {
   return (
      <div>
         <Intro />
         <Experience />
      </div>
   );
}
