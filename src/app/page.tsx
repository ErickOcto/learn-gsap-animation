import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Navbar from "@/components/navbar";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  return (
    <div className="flex-center h-dvh">
      <Navbar/>
    </div>
  );
}
