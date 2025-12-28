import Faq from "./Faq";
import Home from "../LandingPage/tetimonal"
import Footer from "../../components/ui/Footer"
import Herosection from "../Program/Herosection";
import HowDifferentSection from "./HowDiffrentSection";
import HowisthisforSection from "./HowisthisforSection";
import ProgramHighlightsSection from "./ProgramHightlight";
import WhyJoin from "./Whyjoinus";
import ToolsSection from "./Toolkit"
export  default function Program(){
    return(
        <div className="bg-black">
            <Herosection/>
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