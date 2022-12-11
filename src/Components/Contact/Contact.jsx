import { Flex, Image, Link, Spacer, Text } from "@chakra-ui/react";
import {GrLinkedin} from "react-icons/gr";
import {FaGithub} from "react-icons/fa";
import {MdAlternateEmail} from "react-icons/md";
import {IoCall} from "react-icons/io5";
import "./Contact.css";

function Contact(){
    return <div>
        <div className="FullScreen">
            <h1 style={{textAlign:"center",fontSize:"40px"}}>Contact Me</h1>
            <div style={{width:"450px",margin:"auto",lineHeight:"60px"}}>
                <Link href="https://linkedin.com/in/amar-deep-8359aa246/" _hover={{textDecor:"none"}}><Flex width="200px" mt="35px" className="hover" pl="20px" pr="20px" m="auto" alignItems="center">
                    <GrLinkedin size="40px"/>
                    <Spacer />
                    <Text fontSize="larger">Linked in</Text>
                </Flex></Link>
                <Link href="https://github.com/AMARDEEP115" _hover={{textDecor:"none"}}><Flex width="190px" className="hover" pl="20px" pr="20px" m="auto" alignItems="center">
                    <FaGithub size="40px"/>
                    <Spacer />
                    <Text fontSize="larger">Github</Text>
                </Flex></Link>
                <Link href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=amar1998deep@gmail.com" _hover={{textDecor:"none"}}><Flex width="330px" className="hover" pl="20px" pr="20px" m="auto" alignItems="center" >
                    <MdAlternateEmail size="40px"/>
                    <Spacer />
                    <Text fontSize="larger">amar1998deep@gmail</Text>
                </Flex></Link>
                <Flex width="230px" className="hover" pl="20px" pr="20px" m="auto" alignItems="center">
                    <IoCall size="40px"/>
                    <Spacer />
                    <Text fontSize="larger">6388898362</Text>
                </Flex>
            </div>
            <Text textAlign="center" mt="35px">Designed & Built by <span style={{color:"blue"}}>Amar Deep</span> © 2022</Text>
        </div>
        <div className="MediumScreen">
            <h1 style={{textAlign:"center",fontSize:"30px",fontWeight:"600"}}>Contact Me</h1>
        </div>
        <div className="SmallScreen">
            <h1 style={{textAlign:"center",fontSize:"25px"}}>Contact Me</h1>
        </div>
    </div>
}

export default Contact;
