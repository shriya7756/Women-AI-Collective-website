import Navbar1 from '../../components/ui/navbar1';
import OurFounderSection from '../About/OurFounderSection';
import Vision from './vision';
import Footer from "../../components/ui/Footer"
import Herosection from "./Herosection"
import TeamMemberCard from "./team"
export default function AboutPage() {
    return (
     <div className='min-h-screen'>
        <Herosection/>
        <Vision/>
<OurFounderSection/>
<TeamMemberCard/>
<Footer/>
     </div>
    );
}