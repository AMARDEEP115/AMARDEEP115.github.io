import { Button } from "@chakra-ui/react";
import React from "react";
import HTML from "../assets/HTML.png";
import CSS from "../assets/CSS.png";
import JavaScript from "../assets/JavaScript.png";
import JESTicon from "../assets/JESTicon.png";
import ReactIcon from "../assets/ReactIcon.png";
import Chakraui from "../assets/Chakraui.png";
import ReduxIcon from "../assets/ReduxIcon.png";
import cypressIcon from "../assets/cypressIcon.png";
import TypeScriptIcon from "../assets/TypeScriptIcon.png";
import npmIcon from "../assets/npmIcon.png";
import Git from "../assets/Git.png";
import postman from "../assets/postman.png";
import Materialui from "../assets/Materialui.png";
import VercelIcon from "../assets/VercelIcon.png";
import NodeJSIcon from "../assets/NodeJSIcon.png";
import ExpressjsIcon from "../assets/ExpressjsIcon.png";
import MongooseJS from "../assets/MongooseJS.png";
import MongoDB from "../assets/MongoDB.png";
import Cyclic from "../assets/Cyclic.png";
import Netlify from "../assets/Netlify.png";
import StyledComponents from "../assets/StyledComponents.png";
import ReactRouterDomIcon from "../assets/ReactRouterDomIcon.png";
import SocketIoIcon from "../assets/SocketIoIcon.png";
import "./Skillss.css";

const Skills=({dark})=>{
    const [skillView,setSkillView]=React.useState("All");
    let skillsIconAll=[
    {pic:HTML,name:"HTML"},
    {pic:CSS,name:"CSS"},
    {pic:JavaScript,name:"JavaScript"},
    {pic:JESTicon,name:"JEST"},
    {pic:ReactIcon,name:"REACT"},
    {pic:Chakraui,name:"Chakra-UI"},
    {pic:ReduxIcon,name:"REDUX"},
    {pic:cypressIcon,name:"Cypress"},
    {pic:TypeScriptIcon,name:"TypeScript"},
    {pic:Git,name:"GIT"},
    {pic:postman,name:"Postman"},
    {pic:Materialui,name:"Material UI"},
    {pic:VercelIcon,name:"Vercel"},
    {pic:NodeJSIcon,name:"Node JS"},
    {pic:ExpressjsIcon,name:"Express"},
    {pic:Cyclic,name:"Cyclic"},
    {pic:Netlify,name:"Netlify"},
    {pic:StyledComponents,name:"Style Component"},
    {pic:ReactRouterDomIcon,name:"React Router Dom"},
    {pic:SocketIoIcon,name:"Socket io"},
    {pic:MongoDB,name:"Mongo DB"},
    {pic:MongooseJS,name:"Mongoose"},
    {pic:npmIcon,name:"NPM"},
    ];
    const frontEnd=[
    {pic:HTML,name:"HTML"},
    {pic:CSS,name:"CSS"},
    {pic:JavaScript,name:"JavaScript"},
    {pic:ReactIcon,name:"REACT"},
    {pic:ReduxIcon,name:"REDUX"},
    {pic:TypeScriptIcon,name:"TypeScript"},
    {pic:JESTicon,name:"JEST"},
    {pic:cypressIcon,name:"Cypress"},
    {pic:Chakraui,name:"Chakra-UI"},
    {pic:Materialui,name:"Material UI"},
    {pic:Git,name:"GIT"},
    {pic:postman,name:"Postman"},
    {pic:VercelIcon,name:"Vercel"},
    {pic:Netlify,name:"Netlify"},
    {pic:SocketIoIcon,name:"Socket io"},
    {pic:StyledComponents,name:"Styled Component"},
    {pic:ReactRouterDomIcon,name:"React Router Dom"},
    {pic:npmIcon,name:"NPM"},
    ];

    const backendAll=[
    {pic:NodeJSIcon,name:"Node JS"},
    {pic:ExpressjsIcon,name:"Express"},
    {pic:MongooseJS,name:"Mongoose"},
    {pic:MongoDB,name:"Mongo DB"},
    {pic:Cyclic,name:"Cyclic"},
    {pic:VercelIcon,name:"Vercel"},
    {pic:SocketIoIcon,name:"Socket io"},
    ];
    const handleSkillsView=()=>{
        document.getElementById("Three").style.boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px";
        document.getElementById("Three").style.borderRadius="5px";
        document.getElementById("Three").style.zoom="110%";
    }
    const handleSkillsViewOver=()=>{
        document.getElementById("Three").style.boxShadow="";
        document.getElementById("Three").style.borderRadius="";
        document.getElementById("Three").style.zoom="0%";
    }
    return <div id="Skills" onMouseEnter={handleSkillsView} onMouseLeave={handleSkillsViewOver} style={{backgroundImage:dark?"url(https://thumbs.gfycat.com/BriefIgnorantBlackbuck-size_restricted.gif)":""}}>
        <h1 style={{color:dark?"white":"black"}}>My Technical <span>Skills</span> and <span>Tools</span></h1>
        <div id="viewBtn">
            <Button bgColor={skillView==="All"?"#385ab5":"transparent"} border="3px solid #385ab5" color={dark?(skillView==="All"?"black":"#385ab5"):(skillView==="All"?"white":"#385ab5")} onClick={()=>{
                setSkillView("All");
            }}>All</Button>
            <Button bgColor={skillView==="Front"?"#385ab5":"transparent"} border="3px solid #385ab5" color={dark?(skillView==="Front"?"black":"#385ab5"):(skillView==="Front"?"white":"#385ab5")} onClick={()=>{
                setSkillView("Front");
            }}>Frontend</Button>
            <Button bgColor={skillView==="Back"?"#385ab5":"transparent"} border="3px solid #385ab5" color={dark?(skillView==="Back"?"black":"#385ab5"):(skillView==="Back"?"white":"#385ab5")} onClick={()=>{
                setSkillView("Back");
            }}>Backend</Button>
        </div>
        <div id="SkilssDisplay" style={{justifyContent:skillView==="Back"?"space-evenly":""}}>
            {skillView==="All" && skillsIconAll.map((el,index)=><div key={index} style={{backgroundColor:dark?"rgb(30, 30, 30)":"rgb(230, 233, 255)"}}  data-aos="zoom-in"><img src={el.pic} alt={el.name} /><h1 style={{color:dark?"white":"#385ab5"}}>{el.name}</h1></div>)}
            {skillView==="Front" && frontEnd.map((el,index)=><div key={index} style={{backgroundColor:dark?"rgb(30, 30, 30)":"rgb(230, 233, 255)"}}  data-aos="zoom-in"><img src={el.pic} alt={el.name} /><h1 style={{color:dark?"white":"#385ab5"}}>{el.name}</h1></div>)}
            {skillView==="Back" && backendAll.map((el,index)=><div key={index} style={{backgroundColor:dark?"rgb(30, 30, 30)":"rgb(230, 233, 255)"}}  data-aos="zoom-in"><img src={el.pic} alt={el.name} /><h1 style={{color:dark?"white":"#385ab5"}}>{el.name}</h1></div>)}
        </div>
    </div>
};

export default Skills;