import { useForm, ValidationError } from '@formspree/react';
import { useToast } from '@chakra-ui/react';
import { AiFillLinkedin, AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { FiSmartphone } from "react-icons/fi";
import contactus from "../assets/contactus.png";
import "./Contacts.css";
import React from 'react';

const Contact=({dark})=>{
    const [state, handleSubmit] = useForm("mknavbvv");
    const toast = useToast();
    if(state.succeeded){
        toast({
            title: 'Email Sent',
            description: "Thankyou for contacting me",
            status: 'success',
            duration: 2000,
            isClosable: true,
            position:"top"
        });
    }
    const handleContactsView=()=>{
        document.getElementById("Five").style.boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px";
        document.getElementById("Five").style.borderRadius="5px";
        document.getElementById("Five").style.zoom="110%";
    }
    const handleContactsViewOver=()=>{
        document.getElementById("Five").style.boxShadow="";
        document.getElementById("Five").style.borderRadius="";
        document.getElementById("Five").style.zoom="0%";
    }
    return <div id="Contact" style={{backgroundColor:dark?"rgb(30, 30, 30)":"rgb(230, 233, 255)"}} onMouseEnter={handleContactsView} onMouseLeave={handleContactsViewOver}>
        <h1 style={{color:dark?"white":"black"}}><span>Connect</span> with me</h1>
        <div>
            <div id="LeftContact" data-aos="zoom-in">
                <img id="image" src={contactus} alt="aboutme" />
            </div>
            <div id="RightContact" data-aos="zoom-in">
                <div id="profileLinks">
                    <div>
                        <a id="Linkedin" href="https://www.linkedin.com/in/amar-deep-8359aa246/" style={{backgroundColor: dark?"#9BDAF3":"#00A0DC",color:dark?"black":'white'}} target="_blank"><AiFillLinkedin color={dark?"black":"#385ab5"} onClick={()=>console.log("clicked")}/>LinkedIn</a>
                        <a id="Github" href="https://github.com/AMARDEEP115" style={{backgroundColor: dark?"#373B41":"black",color:"white"}} target="_blank"><AiFillGithub color='white' onClick={()=>console.log("clicked")}/>GitHub</a>
                    </div>
                    <a id="MayGmail" style={{backgroundColor: dark?"#FEB2B2":"red",color:dark?"black":'white'}} href="mailto:amar1998deep@gmail.com"><AiOutlineMail color={dark?"black":'white'}/>amar1998deep@gmail.com</a>
                    <a style={{color:"white",backgroundColor:"#969595"}} href="tel:+916388898362"><FiSmartphone color="white"/>6388898362</a>
                </div>
                <form onSubmit={handleSubmit} action="https://formspree.io/f/mknavbvv" method="POST">
                    <input id="name" type="text" placeholder='Full Name' name="name"/>
                    <input id="email" type="email" placeholder='Email' name="email" required/>
                    <ValidationError prefix="Email" field="email" errors={state.errors}/>
                    <input id="mobile" type="number" placeholder='Mobile Number' name="mobile"/>
                    <textarea id="message" name="message" placeholder="Your Message" data-gramm="false" data-gramm_editor="false" data-enable-grammarly="false" required></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors}/>
                    <button type="submit" disabled={state.submitting}>Submit</button>
                </form>
            </div>
        </div>
        <p style={{color:dark?"white":"#385ab5"}}>Designed and build by Amar Deep, © 2023 All rights reserved.</p>
    </div>
};

export default Contact;