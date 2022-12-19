import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import "./About.css";
import ProfilePic from "../../assets/Pro.jpg";

function About(){
    return <div id="AboutMe" data-aos="fade-right">
        <div className="FullScreen" style={{height:"500px"}} data-aos="fade-right">
            <Text textAlign="center" fontSize="xxx-large" pb="8px">About Me</Text>
            <Flex pr="105px" mt="25px">
                <Image src={ProfilePic} className="img" alt="ProfilePic" border="1px"/>
                <Spacer/>
                <Box mt="20px" ml="25px">
                    <Text fontSize="25px" mb="12px">Hello, I am an ehthuastics and pasionate about coding</Text>
                    <Text fontSize="25px" mb="12px">Currently Learning Full-Stack Development course from Masai School</Text>
                    <Text fontSize="25px" mb="12px">I have completed my diploma from Government Polytechnic Sinduria in 2020</Text>
                    <Text fontSize="25px" mb="12px">I have done my schooling from St. Joseph's School in 2016</Text>
                </Box>
            </Flex>
        </div>
        <div className="MediumScreen">
        <Text textAlign="center" fontSize="xxx-large" pb="8px">About Me</Text>
            <Flex pr="105px" mt="25px">
                <Image src={ProfilePic} className="img" alt="ProfilePic" border="1px"/>
                <Spacer/>
                <Box mt="20px" ml="25px">
                    <Text mb="15px">Hello, I am an ehthuastics and pasionate about coding</Text>
                    <Text mb="15px">Currently Learning Full-Stack Development course from Masai School</Text>
                    <Text mb="15px">I have completed my diploma from Government Polytechnic Sinduria in 2020</Text>
                    <Text mb="15px">I have done my schooling from St. Joseph's School in 2016</Text>
                </Box>
            </Flex>
        </div>
        <div className="SmallScreen">
        <Text textAlign="center" fontSize="xxx-large" pb="8px">About Me</Text>
            <Flex pr="105px" mt="25px">
                <Image src={ProfilePic} className="img" alt="ProfilePic" border="1px"/>
                <Spacer/>
                <Box mt="20px" ml="15px">
                    <Text fontSize="15px" mb="10px">Hello, I am an ehthuastics and pasionate about coding</Text>
                    <Text fontSize="15px" mb="10px">Currently Learning Full-Stack Development course from Masai School</Text>
                    <Text fontSize="15px" mb="10px">I have completed my diploma from Government Polytechnic Sinduria in 2020</Text>
                    <Text fontSize="15px" mb="10px">I have done my schooling from St. Joseph's School in 2016</Text>
                </Box>
            </Flex>
        </div>
    </div>
}

export default About;
