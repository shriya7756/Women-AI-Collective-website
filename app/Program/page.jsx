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
        <div className=" min-h-screen bg-black">
            <Navbar1/>
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