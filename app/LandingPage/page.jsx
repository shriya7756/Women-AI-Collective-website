import Collaborators from "./Collaborators";
import Herosection from "./Herosection";
import ImpactSection from "./ImapctSection";
import PillarsSection from "./PillarsSection";
import WhoWeAreSection from "./WhoWeAreSection";
import Home from "./Home";
import JoinUs from "./Joinu";
import Footer from "../../components/ui/Footer"
import FlagShip from "./Flagship";
export default  function LandingPage(){
    
    return(
        <>
      <Herosection/>
     <WhoWeAreSection/>
     <ImpactSection/>
     <PillarsSection/>
     <FlagShip/>
     <Home/>
     <Collaborators/>
     <JoinUs/>
     <Footer/>
        </>
    )
}