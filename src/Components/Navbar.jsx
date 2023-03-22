import React, { useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import {Drawer,DrawerBody,DrawerFooter,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Heading,Button,useDisclosure} from '@chakra-ui/react';
import "./Navbarr.css";

const Navbar=({dark})=>{
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    const handleResume=()=>{
        window.open("https://drive.google.com/file/d/11pN2MFLhuvhCYY2Tu3geGDQ1hh54icPE/view","_blank");
        let x=setTimeout(()=>{
            window.location.href="https://drive.google.com/u/0/uc?id=11pN2MFLhuvhCYY2Tu3geGDQ1hh54icPE&export=download";
            clearTimeout(x);
        },200);
    }
    
    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //       if (
    //         document.body.scrollTop > 80 ||
    //         document.documentElement.scrollTop > 80
    //       ) {
    //         document.getElementById("Navb").style.backgroundColor="#385ab5";
    //       } else {
    //         document.getElementById("Navb").style.backgroundColor="white";
    //       }
    //     });
    //   }, []);
    return <div id="Navb">
        <div id="Name">
            <Heading style={{color:dark?"black":"white"}}>AMAR DEEP</Heading>
        </div>
        <div id="FullNav">
            <nav>
                <a id="One" style={{color:dark?"black":"white"}} href="#Home">HOME</a>
                <a id="Two" style={{color:dark?"black":"white"}} href="#AboutMe">ABOUT ME</a>
                <a id="Three" style={{color:dark?"black":"white"}} href="#Skills">SKILLS</a>
                <a id="Four" style={{color:dark?"black":"white"}} href="#Projects">PROJECTS</a>
                <a id="Five" style={{color:dark?"black":"white"}} href="#Contact">CONTACT</a>
                <p style={{color:dark?"black":"white"}} onClick={handleResume}>RESUME</p>
            </nav>
        </div>
        <div id="SmallNav">
            <Button ref={btnRef} border={dark?"3px solid black":"3px solid white"} bgColor="#385ab5" onClick={onOpen} ><GiHamburgerMenu size="20px" color={dark?"black":"white"}/></Button>
            <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef} size="xs">
                <DrawerOverlay />
                <DrawerContent bgColor={dark?"black":"white"}>
                    <DrawerCloseButton color="#385ab5"/>
                    <DrawerHeader color="#385ab5">MENU</DrawerHeader>
                    <DrawerBody id="DrawerBody">
                        <a href="#Home">HOME</a>
                        <a href="#AboutMe">ABOUT ME</a>
                        <a href="#Skills">SKILLS</a>
                        <a href="#Projects">PROJECTS</a>
                        <a href="#Contact">CONTACT</a>
                        <p onClick={()=>{
                            onClose();
                            handleResume();
                        }}>RESUME</p>
                    </DrawerBody>
                    {/* <DrawerFooter>
                    </DrawerFooter> */}
                </DrawerContent>
            </Drawer>
        </div>
    </div>
}

export default Navbar;