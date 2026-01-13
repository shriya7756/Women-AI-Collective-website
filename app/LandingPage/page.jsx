import Collaborators from "./Collaborators";
import Herosection from "./Herosection";
import ImpactSection from "./ImapctSection";
import PillarsSection from "./PillarsSection";
import WhoWeAreSection from "./WhoWeAreSection";
import Home from "./tetimonal";
import JoinUs from "./Joinu";
import Footer from "../../components/ui/Footer"
import FlagShip from "./Flagship";
import MobileHeroSection from "./MobileHero";
import Navbar1 from "../../components/ui/navbar1";
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