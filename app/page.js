import Image from "next/image";
import LandingPage from "./LandingPage/page"
import About from "./About/page"
import Program from "./Program/page"


export default function Page() {
  return (
    <div>
      <LandingPage/>
      <Program/>
      <About/>
      
    </div>
  );
}
