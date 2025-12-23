import Faq from "./Faq";
import Home from "../LandingPage/Home"
import Footer from "../../components/ui/Footer"
export  default function Program(){
    return(
        <div className="bg-black">
            <Home/>
        <Faq/>
        <Footer/>
        </div>
    )
}