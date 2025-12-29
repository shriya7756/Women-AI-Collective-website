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
export  default function Program(){
    return(
        <div className="bg-black">
            <Herosection/>
            <MobileHeroSection/>
            <HowDifferentSection/>
            <HowisthisforSection/>
            <ProgramHighlightsSection/>
            <ToolsSection/>
            <Home/>
            <WhyJoin/>
        <Faq/>
        <Footer/>
        </div>
    )
}