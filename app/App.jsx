import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collaborators from "./pages/Collaborators";


export default function App() {
return (
<Router>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/collaborators" element={<Collaborators />} />
</Routes>
</Router>
);
}