import Collaborators from "./Collaborators"
import Home from "./Home"
import Herosection from "./Herosection"
import ImpactSection from "./ImapctSection"
import PillarsSection from "./PillarsSection"
import Footer from "@/components/ui/Footer"
import FlagShip from "./Flagship"
import MobileHeroSection from "./MobileHero"
export default  function LandingPage(){
    
    return(
        <>
        <Herosection/>
        <MobileHeroSection/>
        <ImpactSection/>
        <PillarsSection/>
        <FlagShip/>
        < Home />
      <Collaborators />
      <Footer/>
        </>
    )
}