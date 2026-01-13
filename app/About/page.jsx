import Navbar1 from '../../components/ui/navbar1';
import OurFounderSection from '../About/OurFounderSection';
import Vision from './Vision';
import Footer from "../../components/ui/Footer"
import Herosection from "./Herosection"
export default function AboutPage() {
    return (
     <div className='min-h-screen'>
        <Navbar1/>
        <Herosection/>
        <Vision/>
<OurFounderSection/>

<Footer/>
     </div>
    );
}