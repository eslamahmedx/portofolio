import { Route, Routes } from "react-router-dom";
import Nav from './Components/Navbar.jsx';
import Footer from "./Components/Footer.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Resume from "./Components/Resume.jsx";
import Project from "./Components/Projects.jsx";
import MoveToTop from "./Components/MoveToTop.jsx";
import Lottie from "lottie-react";
import nightsky from "./LottieFiles/night-sky.json";

function App() {
  return (
    <>
      <div>
        <Lottie className="bg" animationData={nightsky} loop={true} />  
        <Lottie className="bgtwo" animationData={nightsky} loop={true} />   
        <Lottie className="bgtemp" animationData={nightsky} loop={true} /> 

        <Nav />
        <MoveToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
