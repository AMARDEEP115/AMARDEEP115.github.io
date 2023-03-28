import "./Homee.css";
import Untitled from "../assets/Untitled.png";
import { Button } from "@chakra-ui/react";

const Home=({dark})=>{
    return <div id="Home" style={{backgroundImage:dark?"url(https://thumbs.gfycat.com/BriefIgnorantBlackbuck-size_restricted.gif)":""}}>
        <div id="LeftContent" style={{backgroundColor:dark?"transparent":"white"}}>
            <h1>Hello, my name is <span style={{color:dark?"white":"black",fontWeight:"bold",display:"flex"}}>Amar Deep</span></h1>
            <h1>I'm a</h1>
            <img src="https://readme-typing-svg.demolab.com?weight=500&duration=1500&font=Fira+Code&size=45&pause=1000&color=385AB5&multiline=true&width=705&height=100&lines=Full+Stack+Developer." alt="Typing SVG" />
            <button onClick={()=>{
                window.open("https://drive.google.com/file/d/11pN2MFLhuvhCYY2Tu3geGDQ1hh54icPE/view","_blank");
                let x=setTimeout(()=>{
                    window.location.href="https://drive.google.com/u/0/uc?id=11pN2MFLhuvhCYY2Tu3geGDQ1hh54icPE&export=download";
                    clearTimeout(x);
                },200);
            }}>RESUME</button>
        </div>
        <div id="RightContent">
            <img src={Untitled} alt="profile" />
            {/* <audio src="/music.mp3" autoplay></audio> */}
        </div>
    </div>
};

export default Home;