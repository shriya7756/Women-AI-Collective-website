import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collaborators from "./pages/Collaborators";
import AboutPage from "./About/page"


export default function App() {
return (
<Router>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/collaborators" element={<Collaborators />} />
<Route path="/About" elemnt={<AboutPage/>}/>
</Routes>
</Router>
);
}