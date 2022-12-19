import "./Navbar.css";
import React from "react";
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, HStack, IconButton, Spacer, Text, useDisclosure } from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";

function Navbar(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    return <div id="Home">
        <div id="NavFullScreen">
            <Flex width="100%"  bgColor="yellowgreen" position="fixed" h="20" border="1px" alignItems="center" pl="25px" pr="35px" top="0" right="0" left="0" zIndex="1030">
                <Box fontSize='3xl' fontWeight="extrabold">AMAR DEEP</Box>
                <Spacer />
                <HStack spacing='24px'>
                    <nav style={{display:"flex",gap:"24px"}}>
                    <Text fontSize='3xl' fontWeight="normal"><a href="#Home">HOME</a></Text>
                    <Text fontSize='3xl' fontWeight="normal"><a href="#AboutMe">ABOUT ME</a></Text>
                    <Text fontSize='3xl' fontWeight="normal"><a href="#Skills">SKILLS</a></Text>
                    <Text fontSize='3xl' fontWeight="normal"><a href="#Projects">PROJECTS</a></Text>
                    <Text fontSize='3xl' fontWeight="normal"><a href="#GitStats">GIT STATS</a></Text>
                    <Text fontSize='3xl' fontWeight="normal"><a href="#Contact">CONTACT</a></Text>
                    </nav>
                </HStack>
            </Flex>
        </div>
        <div id="MediunScreen">
            <Flex width="100%" bgColor="yellowgreen" position="fixed" height="20" pl="25px" pr="35px" alignItems="center">
                <Box fontSize='xl' fontWeight="bold">AMAR DEEP</Box>
                <Spacer />
                <HStack spacing='24px' >
                    <Text fontSize='xl' fontWeight="normal"><a href="#Home">HOME</a></Text>
                    <Text fontSize='xl' fontWeight="normal"><a href="#AboutMe">ABOUT ME</a></Text>
                    <Text fontSize='xl' fontWeight="normal"><a href="#Skills">SKILLS</a></Text>
                    <Text fontSize='xl' fontWeight="normal"><a href="#Projects">PROJECTS</a></Text>
                    <Text fontSize='xl' fontWeight="normal"><a href="#GitStats">GIT STATS</a></Text>
                    <Text fontSize='xl' fontWeight="normal"><a href="#Contact">CONTACT</a></Text>
                </HStack>
            </Flex>
        </div>
        <div id="SmallScreen">
            <Flex bgColor="yellowgreen" position="fixed" height="70px" pl="20px" pr="30px" w="100%" alignItems="center">
                <Box fontSize='xl'>AMAR DEEP</Box>
                <Spacer/>
                <Box>
                    <Button ref={btnRef} as={IconButton} icon={<HamburgerIcon boxSize={7} color="red" />} width="30px" onClick={onOpen} border="2px" borderColor="red" backgroundColor="white">
                    </Button>
                    <Drawer
                      isOpen={isOpen}
                      placement='right'
                      onClose={onClose}
                      finalFocusRef={btnRef}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader></DrawerHeader>
                            <DrawerBody>
                                <Text fontSize="lg" fontWeight="normal" className="SSHover"><a href="#Home">HOME</a></Text>
                                <Text fontSize="lg" fontWeight="normal" className="SSHover"><a href="#AboutMe">ABOUT ME</a></Text>
                                <Text fontSize="lg" fontWeight="normal" className="SSHover"><a href="#Skills">SKILLS</a></Text>
                                <Text fontSize="lg" fontWeight="normal" className="SSHover"><a href="#Projects">PROJECTS</a></Text>
                                <Text fontSize='lg' fontWeight="normal" className="SSHover"><a href="#GitStats">GIT STATS</a></Text>
                                <Text fontSize="lg" fontWeight="normal" className="SSHover"><a href="#Contact">CONTACT</a></Text>
                            </DrawerBody>
                            <DrawerFooter></DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </Box>
            </Flex>
        </div>
        <div style={{marginTop:"185px",width:"80%",margin:"auto",height:"500px"}}>
            <div id="checkTop" style={{margin:"auto",marginTop:"185px"}}>
                <h1 id="AboutName" style={{display:"flex",gap:"20px",margin:"auto",textAlign:"center"}}>Hello I am <span style={{color:"blue"}}>Amar Deep</span></h1>
                <h1 style={{fontSize:"2rem",textAlign:"center"}}>FULL STACK MERN DEVELOPER</h1>
                <h1>A passionate Full-Stack developer Capability of managing clean, elegant and efficient code. Skilled in collaboration, decision making and DS & Algo. Always ready to leran something new and deal with challenges and task.</h1>
                <a style={{display:"flex",gap:"10px",border:"1px solid black",width:"120px",height:"35px",alignItems:"center",marginTop:"25px"}} href="https://drive.google.com/u/0/uc?id=11pN2MFLhuvhCYY2Tu3geGDQ1hh54icPE&export=download" download="resume">
                  <img style={{width:"25px"}} src="data:image/png;base64,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" alt="resume"/>
                  <p style={{fontWeight:"500"}}>RESUME</p>
                </a>
            </div>
        </div>
    </div>
}

export default Navbar;
