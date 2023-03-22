import React from "react";
import { RxDotFilled } from "react-icons/rx";
import { BsGithub } from "react-icons/bs";

let id;

const SingleProject=({dark,image,name,description,techStack,live,github})=>{
    const [pic,setPic]=React.useState(0);
    const changeInd=()=>{
        if(!id){
            id=setInterval(()=>{
                setPic(pre=>{
                    if(pre===image.length-1){
                        return 0;
                    } else {
                        return pre+1;
                    }
                });
            },1000)
        }
    };
    const changeIndZero=()=>{
        setPic(0);
        clearInterval(id);
        id=null;
    }
    return <div data-aos="zoom-in" onMouseOver={changeInd} onMouseOut={changeIndZero}>
        <img src={image[pic]} alt={name}/>
        <p style={{color:dark?"white":"#385ab5"}}>{name}</p>
        <h1 style={{color:dark?"white":"#385ab5"}}>{description}</h1>
        <h2 style={{color:dark?"white":"#385ab5"}}><span style={{color:"#385ab5"}}>TECH STACKS</span> : {techStack}</h2>
        <div>
        <a href={live} target="_blank"><button><RxDotFilled/>LIVE</button></a>
            <a href={github} target="_blank"><BsGithub color={dark?"white":"black"}/></a>
        </div>
    </div>
};

export default SingleProject;