import Faq from "./Faq";
import Home from "../LandingPage/tetimonal"
import Footer from "../../components/ui/Footer"
import Herosection from "../Program/Herosection";
import HowDifferentSection from "./HowDiffrentSection";
import HowisthisforSection from "./HowisthisforSection";
import ProgramHighlightsSection from "./ProgramHightlight";
import WhyJoin from "./Whyjoinus";
import ToolsSection from "./Toolkit"
import MobileHeroSection from "../Program/Mobileherosection";
import Navbar1 from "../../components/ui/navbar1";


export  default function Program(){
    return(
        <div className=" min-h-screen  bg-[#06061A]">
        <div className="sticky top-0 z-50 flex flex-col bg-transparent">
          <Navbar1/>
          </div>
            <Herosection/>
            {/* <MobileHeroSection/> */}
            <HowisthisforSection/>
            <ProgramHighlightsSection/>
            <HowDifferentSection/>
            <ToolsSection/>
            <Home/>
            <WhyJoin/>
        <Faq/>
        <Footer/>
        </div>
    )
}