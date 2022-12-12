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
            <div style={{width:"340px",margin:"auto",lineHeight:"60px",paddingTop:"20px"}}>
                <Link href="https://linkedin.com/in/amar-deep-8359aa246/" _hover={{textDecor:"none"}}><Flex className="hover" pl="35px" pr="20px" pb="25px" alignItems="center">
                    <GrLinkedin size="40px"/>
                    <Spacer />
                    <Text fontSize="x-large">Linked in</Text>
                </Flex></Link>
                <Link href="https://github.com/AMARDEEP115" _hover={{textDecor:"none"}}><Flex className="hover" pl="35px" pr="20px" pb="25px" alignItems="center">
                    <FaGithub size="40px"/>
                    <Spacer />
                    <Text fontSize="x-large">Github</Text>
                </Flex></Link>
                <Link href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=amar1998deep@gmail.com" _hover={{textDecor:"none"}}><Flex className="hover" pl="35px" pr="20px" pb="25px" alignItems="center" >
                    <MdAlternateEmail size="40px"/>
                    <Spacer />
                    <Text fontSize="22px">amar1998deep@gmail</Text>
                </Flex></Link>
                <Flex className="hover" pl="35px" pr="20px" pb="25px" alignItems="center">
                    <IoCall size="40px"/>
                    <Spacer />
                    <Text fontSize="x-large">6388898362</Text>
                </Flex>
            </div>
            <Text textAlign="center" mt="35px">Designed & Built by <span style={{color:"blue"}}>Amar Deep</span> © 2022</Text>
        </div>
        <div className="MediumScreen">
            <h1 style={{textAlign:"center",fontSize:"30px",fontWeight:"600"}}>Contact Me</h1>
            <div style={{width:"290px",margin:"auto",lineHeight:"60px",paddingTop:"20px"}}>
                <Link href="https://linkedin.com/in/amar-deep-8359aa246/" _hover={{textDecor:"none"}}><Flex className="hover" pl="50px" pr="35px" pb="25px" alignItems="center">
                    <GrLinkedin size="30px"/>
                    <Spacer />
                    <Text fontSize="larger" fontWeight="bold">Linked in</Text>
                </Flex></Link>
                <Link href="https://github.com/AMARDEEP115" _hover={{textDecor:"none"}}><Flex className="hover" pl="50px" pr="35px" pb="25px" alignItems="center">
                    <FaGithub size="30px"/>
                    <Spacer />
                    <Text fontSize="larger" fontWeight="bold">Github</Text>
                </Flex></Link>
                <Link href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=amar1998deep@gmail.com" _hover={{textDecor:"none"}}><Flex className="hover" pl="35px" pr="20px" pb="25px" alignItems="center" >
                    <MdAlternateEmail size="30px"/>
                    <Spacer />
                    <Text fontSize="larger" fontWeight="bold">amar1998deep@gmail</Text>
                </Flex></Link>
                <Flex className="hover" pl="50px" pr="35px" pb="25px" alignItems="center">
                    <IoCall size="30px"/>
                    <Spacer />
                    <Text fontSize="larger" fontWeight="bold">6388898362</Text>
                </Flex>
            </div>
            <Text textAlign="center" mt="35px">Designed & Built by <span style={{color:"blue"}}>Amar Deep</span> © 2022</Text>
        </div>
        <div className="SmallScreen">
            <h1 style={{textAlign:"center",fontSize:"25px"}}>Contact Me</h1>
            <div style={{width:"230px",margin:"auto",lineHeight:"60px",paddingTop:"20px"}}>
                <Link href="https://linkedin.com/in/amar-deep-8359aa246/" _hover={{textDecor:"none"}}><Flex className="hover" pl="55px" pr="40px" pb="25px" alignItems="center">
                    <GrLinkedin size="20px"/>
                    <Spacer />
                    <Text fontSize="medium">Linked in</Text>
                </Flex></Link>
                <Link href="https://github.com/AMARDEEP115" _hover={{textDecor:"none"}}><Flex className="hover" pl="55px" pr="40px" pb="25px" alignItems="center">
                    <FaGithub size="20px"/>
                    <Spacer />
                    <Text fontSize="medium">Github</Text>
                </Flex></Link>
                <Link href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=amar1998deep@gmail.com" _hover={{textDecor:"none"}}><Flex className="hover" pl="30px" pr="10px" pb="25px" alignItems="center" >
                    <MdAlternateEmail size="20px"/>
                    <Spacer />
                    <Text fontSize="medium">amar1998deep@gmail</Text>
                </Flex></Link>
                <Flex className="hover" pl="55px" pr="40px" pb="25px" alignItems="center">
                    <IoCall size="20px"/>
                    <Spacer />
                    <Text fontSize="medium">6388898362</Text>
                </Flex>
            </div>
            <Text textAlign="center" mt="35px">Designed & Built by <span style={{color:"blue"}}>Amar Deep</span> © 2022</Text>
        </div>
    </div>
}

export default Contact;
