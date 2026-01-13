import Navbar1 from '../../components/ui/navbar1';
import OurFounderSection from '../About/OurFounderSection';
import Vision from './Vision';
import Footer from "../../components/ui/Footer"

export default function AboutPage() {
    return (
     <div className='min-h-screen'>
        <Navbar1/>
<OurFounderSection/>
<Vision/>
<Footer/>
     </div>
    );
}