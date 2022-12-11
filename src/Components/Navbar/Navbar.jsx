import "./Navbar.css";
import React from "react";
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, HStack, IconButton, Spacer, useDisclosure } from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";

function Navbar(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    return <div>
        <div className="FullScreen">
            <Flex>
                <Box fontSize='3xl' fontWeight="extrabold">AMAR DEEP</Box>
                <Spacer />
                <HStack spacing='24px' >
                    <Box fontSize='3xl' fontWeight="normal">HOME</Box>
                    <Box fontSize='3xl' fontWeight="normal">ABOUT ME</Box>
                    <Box fontSize='3xl' fontWeight="normal">SKILLS</Box>
                    <Box fontSize='3xl' fontWeight="normal">PROJECTS</Box>
                    <Box fontSize='3xl' fontWeight="normal">CONTACT</Box>
                </HStack>
            </Flex>
        </div>
        <div className="MediunScreen">
            <Flex>
                <Box fontSize='xl' fontWeight="bold">AMAR DEEP</Box>
                <Spacer />
                <HStack spacing='24px' >
                    <Box fontSize='xl' fontWeight="normal">HOME</Box>
                    <Box fontSize='xl' fontWeight="normal">ABOUT ME</Box>
                    <Box fontSize='xl' fontWeight="normal">SKILLS</Box>
                    <Box fontSize='xl' fontWeight="normal">PROJECTS</Box>
                    <Box fontSize='xl' fontWeight="normal">CONTACT</Box>
                </HStack>
            </Flex>
        </div>
        <div className="SmallScreen">
            <Flex>
                <Box fontSize='xl'>AMAR DEEP</Box>
                <Spacer />
                {/* <Menu>
                    <MenuButton
                      as={IconButton}
                      aria-label='Options'
                      border="2px"
                      borderColor="black"
                      icon={<HamburgerIcon boxSize={7} />}
                      variant="outline"
                    />
                    <MenuList>
                        <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
                        <MenuItem fontSize="lg" fontWeight="normal" _hover={{backgroundColor:"blue"}}>HOME</MenuItem>
                        <MenuItem fontSize="lg" fontWeight="normal" _hover={{backgroundColor:"blue"}}>ABOUT ME</MenuItem>
                        <MenuItem fontSize="lg" fontWeight="normal" _hover={{backgroundColor:"blue"}}>SKILLS</MenuItem>
                        <MenuItem fontSize="lg" fontWeight="normal" _hover={{backgroundColor:"blue"}}>PROJECTS</MenuItem>
                        <MenuItem fontSize="lg" fontWeight="normal" _hover={{backgroundColor:"blue"}}>CONTACT</MenuItem>
                    </MenuList>
                </Menu> */}
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
                            <Box fontSize="lg" fontWeight="normal" className="SSHover">HOME</Box>
                            <Box fontSize="lg" fontWeight="normal" className="SSHover">ABOUT ME</Box>
                            <Box fontSize="lg" fontWeight="normal" className="SSHover">SKILLS</Box>
                            <Box fontSize="lg" fontWeight="normal" className="SSHover">PROJECTS</Box>
                            <Box fontSize="lg" fontWeight="normal" className="SSHover">CONTACT</Box>
                        </DrawerBody>
                        <DrawerFooter></DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </Flex>
        </div>
    </div>
}

export default Navbar;
