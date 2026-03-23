import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";

export default function Home() {
  gsap.registerPlugin(SplitText, ScrollTrigger);
  return (
    <main>
      <Navbar/>
      <Hero/>
      <div className="flex-center h-dvh">
      </div>
    </main>
  );
}
