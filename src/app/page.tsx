import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Cocktails from "@/components/cocktails";
import About from "@/components/about";
import Art from "@/components/art";
import Menu from "@/components/menu";
import Contact from "@/components/contact";

export default function Home() {
  gsap.registerPlugin(SplitText, ScrollTrigger);
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Cocktails/>
      <About/>
      <Art/>
      <Menu/>
      <Contact/>
    </main>
  );
}
