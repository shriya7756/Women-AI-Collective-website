import Collaborators from "./Collaborators";
import Herosection from "./Herosection";
import ImpactSection from "./ImapctSection";
import PillarsSection from "./PillarsSection";
import WhoWeAreSection from "./WhoWeAreSection";
import Home from "./Home";
import JoinUs from "./Joinu";
import Footer from "../../components/ui/Footer"
import FlagShip from "./Flagship";
import MobileHeroSection from "./MobileHero";
export default  function LandingPage(){
    
    return(
        < div className="bg-black">
      <Herosection/>
      <MobileHeroSection/>
     <WhoWeAreSection/>
     <ImpactSection/>
     <PillarsSection/>
     <FlagShip/>
     <Home/>
     <Collaborators/>
     <JoinUs/>
     <Footer/>
        </div>
    )
}