import React, { useEffect } from "react";
import Navbar from './Components/Navbar';
import { Heading } from '@chakra-ui/react';
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { BsArrowUpCircleFill } from "react-icons/bs";
import './App.css';
import Home from "./AllPages/Home";
import AboutMe from "./AllPages/AboutMe";
import Skills from "./AllPages/Skills";
import Projects from "./AllPages/Projects";
import Contact from "./AllPages/Contact";
import GitStats from "./AllPages/GitStats";

function App() {
  const [dark,setDark]=React.useState(false);

  const gotoTop=()=>{
    document.body.scrollTop={top: 0, behavior: "smooth"};
    document.documentElement.scrollTop={top: 0, behavior: "smooth"};
  };

  useEffect(() => {
        document.getElementById("goToTop").style.display="none";
        window.addEventListener("scroll", () => {
          if (
            document.body.scrollTop > 200 ||
            document.documentElement.scrollTop > 200
          ) {
            document.getElementById("goToTop").style.display="inline";
            document.getElementById("goToTop").style.display="flex";
            document.getElementById("goToTop").style.flexDirection="row-reverse";
            document.getElementById("goToTop").style.width="99%";
          } else {
            document.getElementById("goToTop").style.display="none";
          }
        });
  }, []);
  return (
    <div className="App" style={{backgroundColor:dark?"black":"white"}}>
      <Navbar dark={dark}/>
      <div id="siteBody">
        <div id="DarkMode">
          {dark && <div onClick={()=>setDark(!dark)}><MdSunny size="24px" color="yellow"/></div>}
          {!dark && <div onClick={()=>setDark(!dark)}><FaMoon  size="20px"/></div>}
        </div>
        <div id="goToTop">
          <BsArrowUpCircleFill size="40px" color="#385ab5" onClick={gotoTop} />
        </div>
        <div >
          {/* Content */}
          <Home dark={dark}/>
          <AboutMe dark={dark}/>
          <Skills dark={dark}/>
          <Projects dark={dark}/>
          <GitStats dark={dark}/>
          <Contact dark={dark}/>
        </div>
      </div>
    </div>
  );
}

export default App;
