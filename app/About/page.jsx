import Navbar1 from '../../components/ui/navbar1';
import OurFounderSection from '../About/OurFounderSection';
import Vision from './vision';
import Footer from "../../components/ui/Footer"
import Herosection from "./Herosection"
import TeamMemberCard from "./team"
import WhatWeStandForSection from './WhatWeStandForSection';
import MozFestSection from './MozFestSection';
import GetInvolved from './GetInvolved';
export default function AboutPage() {
    return (
     <div className='min-h-screen bg-gray-400'>
        <div className="sticky top-0 z-50 flex flex-col bg-transparent">
          <Navbar1/>
          </div>
        <Herosection/>
        <Vision/>
<OurFounderSection/>
<TeamMemberCard/>
<WhatWeStandForSection />
<MozFestSection/>
<GetInvolved/>
<Footer/>
     </div>
    );
}