import { Button } from "@chakra-ui/react";
import React from "react";
import SingleProject from "../Components/SingleProject";
import "./Projectss.css";

const Projects=({dark})=>{
    const [projectView,setProjectView]=React.useState("All");
    const AllProjects=[{
        image:["https://user-images.githubusercontent.com/105987614/213974110-dbcb7cc8-a57a-434c-a4cc-d47a4032020a.png","https://user-images.githubusercontent.com/105987614/213974279-5d90cfc4-7a65-4035-abba-e2d302f9d81d.png","https://user-images.githubusercontent.com/105987614/213974437-dac44daa-5770-4127-93b4-85ac50ea3f6e.png","https://user-images.githubusercontent.com/105987614/213974692-9b081939-2720-4ec9-990a-0b588cd6fc80.png"],
        name:"MYNTRA CLONE",
        description:"This project is about building an online E-commerce web application with backend integration showing the functionalities of an e-commerce website like filtering the products, add to cart, wishlist etc",
        techStack:"REACT | REDUX | REACT-ROUTER-DOM | CHAKRA-UI | Cyclic.sh API | REDUX-THUNK | nodeJS | EXPRESS | MONGOOSE | MONGO ATLAS | JWT | BCRYPT",
        live:"https://shopiteasy-amar1998deep-gmailcom.vercel.app/",
        github:"https://github.com/AMARDEEP115/subtle-swing-119"
    },
    {
        image:["https://user-images.githubusercontent.com/105987614/207080600-0f945121-fc63-4c69-9984-8d494cef4364.jpg","https://user-images.githubusercontent.com/105987614/207080611-6d28c28b-0052-409d-be79-0b01c916b0b7.jpg","https://user-images.githubusercontent.com/105987614/214556594-48989dce-bee2-4ee5-b7f3-de5429d49511.png"],
        name:"TRAVELOCITY CLONE",
        description:"This website is a clone of of travelocity.com, an online platform for travelers to find the various pathways  to travel and staying.",
        techStack:"REACT | REDUX | REACT-ROUTER-DOM | CHAKRA-UI",
        live:"adtravels.vercel.app/",
        github:"https://github.com/AMARDEEP115/travelocity-Clone"
    },
    {
        image:["https://user-images.githubusercontent.com/105987614/215345607-fa75d3da-5767-4e09-9326-f1b60f7fb5d9.png","https://user-images.githubusercontent.com/105987614/215345669-1d1af7ae-ee2a-4718-8a4c-e28784457ed1.png","https://user-images.githubusercontent.com/105987614/215345790-c49b75a6-fc17-4d90-b58d-fbf37194d20d.png","https://user-images.githubusercontent.com/105987614/215345851-2fe6f80d-8245-46d7-b76b-cd00231543fd.png","https://user-images.githubusercontent.com/105987614/215345871-fd373270-af23-48a6-af07-fcc38327b28c.png"],
        name:"InterviewPoint",
        description:"This project is about building an online platform were anyone can learn and explore things around MERN and DSA. And practice for there interview, and showing the functionalities of InterviewPoint website like login, signup, videos on MERN, DSA questions etc",
        techStack:"NEXT JS | NODE JS | TYPESCRIPT | CHAKRA UI | EXPRESS | MONGO DB",
        live:"hack-app-axis.vercel.app/",
        github:"https://github.com/AMARDEEP115/HackAppAxis"
    },
    {
        image:["https://user-images.githubusercontent.com/101391604/192854244-1da570d5-9c89-4f16-94e3-400c8aa96c02.png","https://user-images.githubusercontent.com/101391604/192855713-b754b973-17a5-4444-8d0e-9ee7f1093cee.png","https://user-images.githubusercontent.com/101391604/192855771-62d8d72d-ddc4-4563-8457-e3a4a222a87a.png"],
        name:"Deccan & Herald Clone",
        description:"This website is a clone of of DeccanHerald.com, an e-newspaper published in the Indian state of Karnataka, it brings breaking news, and today's Live News on Sports, Business, Fitness, and Entertainment.",
        techStack:"HTML | CSS | JS",
        live:"https://enchanting-muffin-9f8441.netlify.app/",
        github:"https://github.com/Sakil9051/WEB-101-Project"
    },
    {
        image:["https://user-images.githubusercontent.com/105987614/227150702-d48f60f3-41ba-48ca-b5e5-5341ff908d79.png","https://user-images.githubusercontent.com/105987614/227150828-a5da5b39-91d5-4cae-97ad-0ddf4ccf46d4.png","https://user-images.githubusercontent.com/105987614/227151246-20d306d4-cdcc-4d52-97ae-f1155e400a04.png"],
        name:"YoutTube Clone",
        description:"This project is a clone of YouTube website, were you can watch trending videos and can search any kind of videos, using google youtube api in this.",
        techStack:"HTML | CSS | JavaScript",
        live:"https://dulcet-chaja-b6c81e.netlify.app/",
        github:"https://github.com/AMARDEEP115/static-youtube-clone"
    },
    {
        image:["https://user-images.githubusercontent.com/105987614/227171043-99d5c73c-3cad-451f-be66-9c6088114296.png","https://user-images.githubusercontent.com/105987614/227170918-e497c2e3-357e-4066-91d1-d2ec0e2857d0.png","https://user-images.githubusercontent.com/105987614/227170824-b5b080ef-7797-44a4-b08c-ed153daf5898.png"],
        name:"Weather App",
        description:"This project is about building a web application to show a weather forecast using weather API from external services Open weather map. Here you will be able to search for a specific location in the world and also it will automatically detect your current location in the beginning (for that you need to allow location) and will display all the important weather details.",
        techStack:"HTML | CSS | JavaScript",
        live:"https://tourmaline-smakager-2d1f20.netlify.app/",
        github:"https://github.com/AMARDEEP115/find-weather-app"
    }
    ];
    const MernProjects=[{
        image:["https://user-images.githubusercontent.com/105987614/213974110-dbcb7cc8-a57a-434c-a4cc-d47a4032020a.png","https://user-images.githubusercontent.com/105987614/213974279-5d90cfc4-7a65-4035-abba-e2d302f9d81d.png","https://user-images.githubusercontent.com/105987614/213974437-dac44daa-5770-4127-93b4-85ac50ea3f6e.png","https://user-images.githubusercontent.com/105987614/213974692-9b081939-2720-4ec9-990a-0b588cd6fc80.png"],
        name:"MYNTRA CLONE",
        description:"This project is about building an online E-commerce web application with backend integration showing the functionalities of an e-commerce website like filtering the products, add to cart, wishlist etc",
        techStack:"REACT | REDUX | REACT-ROUTER-DOM | CHAKRA-UI | Cyclic.sh API | REDUX-THUNK | nodeJS | EXPRESS | MONGOOSE | MONGO ATLAS | JWT | BCRYPT",
        live:"https://shopiteasy-amar1998deep-gmailcom.vercel.app/",
        github:"https://github.com/AMARDEEP115/subtle-swing-119"
    },
    ];
    const ReactProjects=[{
        image:["https://user-images.githubusercontent.com/105987614/207080600-0f945121-fc63-4c69-9984-8d494cef4364.jpg","https://user-images.githubusercontent.com/105987614/207080611-6d28c28b-0052-409d-be79-0b01c916b0b7.jpg","https://user-images.githubusercontent.com/105987614/214556594-48989dce-bee2-4ee5-b7f3-de5429d49511.png"],
        name:"TRAVELOCITY CLONE",
        description:"This website is a clone of of travelocity.com, an online platform for travelers to find the various pathways  to travel and staying.",
        techStack:"REACT | REDUX | REACT-ROUTER-DOM | CHAKRA-UI",
        live:"adtravels.vercel.app/",
        github:"https://github.com/AMARDEEP115/travelocity-Clone"
    },
    {
        image:["https://user-images.githubusercontent.com/105987614/215345607-fa75d3da-5767-4e09-9326-f1b60f7fb5d9.png","https://user-images.githubusercontent.com/105987614/215345669-1d1af7ae-ee2a-4718-8a4c-e28784457ed1.png","https://user-images.githubusercontent.com/105987614/215345790-c49b75a6-fc17-4d90-b58d-fbf37194d20d.png","https://user-images.githubusercontent.com/105987614/215345851-2fe6f80d-8245-46d7-b76b-cd00231543fd.png","https://user-images.githubusercontent.com/105987614/215345871-fd373270-af23-48a6-af07-fcc38327b28c.png"],
        name:"InterviewPoint",
        description:"This project is about building an online platform were anyone can learn and explore things around MERN and DSA. And practice for there interview, and showing the functionalities of InterviewPoint website like login, signup, videos on MERN, DSA questions etc",
        techStack:"NEXT JS | NODE JS | TYPESCRIPT | CHAKRA UI | EXPRESS | MONGO DB",
        live:"hack-app-axis.vercel.app/",
        github:"https://github.com/AMARDEEP115/HackAppAxis"
    },
    ];
    const HtmlProjects=[{
        image:["https://user-images.githubusercontent.com/101391604/192854244-1da570d5-9c89-4f16-94e3-400c8aa96c02.png","https://user-images.githubusercontent.com/101391604/192855713-b754b973-17a5-4444-8d0e-9ee7f1093cee.png","https://user-images.githubusercontent.com/101391604/192855771-62d8d72d-ddc4-4563-8457-e3a4a222a87a.png"],
        name:"Deccan & Herald Clone",
        description:"This website is a clone of of DeccanHerald.com, an e-newspaper published in the Indian state of Karnataka, it brings breaking news, and today's Live News on Sports, Business, Fitness, and Entertainment.",
        techStack:"HTML | CSS | JS",
        live:"https://enchanting-muffin-9f8441.netlify.app/",
        github:"https://github.com/Sakil9051/WEB-101-Project"
    },
    {
        image:["https://user-images.githubusercontent.com/105987614/227150702-d48f60f3-41ba-48ca-b5e5-5341ff908d79.png","https://user-images.githubusercontent.com/105987614/227150828-a5da5b39-91d5-4cae-97ad-0ddf4ccf46d4.png","https://user-images.githubusercontent.com/105987614/227151246-20d306d4-cdcc-4d52-97ae-f1155e400a04.png"],
        name:"YoutTube Clone",
        description:"This project is a clone of YouTube website, using google youtube api in this. Here you can watch trending videos and can search any kind of videos.",
        techStack:"HTML | CSS | JavaScript",
        live:"https://dulcet-chaja-b6c81e.netlify.app/",
        github:"https://github.com/AMARDEEP115/static-youtube-clone"
    },
    {
        image:["https://user-images.githubusercontent.com/105987614/227171043-99d5c73c-3cad-451f-be66-9c6088114296.png","https://user-images.githubusercontent.com/105987614/227170918-e497c2e3-357e-4066-91d1-d2ec0e2857d0.png","https://user-images.githubusercontent.com/105987614/227170824-b5b080ef-7797-44a4-b08c-ed153daf5898.png"],
        name:"Weather App",
        description:"This project is about building a web application to show a weather forecast using weather API from external services Open weather map. Here you will be able to search for a specific location in the world and also it will automatically detect your current location in the beginning (for that you need to allow location) and will display all the important weather details.",
        techStack:"HTML | CSS | JavaScript",
        live:"https://tourmaline-smakager-2d1f20.netlify.app/",
        github:"https://github.com/AMARDEEP115/find-weather-app"
    }
    ];
    const handleProjectsView=()=>{
        document.getElementById("Four").style.boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px";
        document.getElementById("Four").style.borderRadius="5px";
        document.getElementById("Four").style.zoom="110%";
    }
    const handleProjectsViewOver=()=>{
        document.getElementById("Four").style.boxShadow="";
        document.getElementById("Four").style.borderRadius="";
        document.getElementById("Four").style.zoom="0%";
    }
    return <div id="Projects" style={{backgroundColor:dark?"rgb(30, 30, 30)":"rgb(230, 233, 255)"}}  onMouseEnter={handleProjectsView} onMouseLeave={handleProjectsViewOver}>
        <h1 style={{color:dark?"white":"black"}}>My <span>Projects</span></h1>
        <div>
            <Button bgColor={projectView==="All"?"#385ab5":"transparent"} border="3px solid #385ab5" color={dark?(projectView==="All"?"black":"#385ab5"):(projectView==="All"?"white":"#385ab5")} onClick={()=>{
                setProjectView("All");
            }}>All</Button>
            <Button bgColor={projectView==="Mern"?"#385ab5":"transparent"} border="3px solid #385ab5" color={dark?(projectView==="Mern"?"black":"#385ab5"):(projectView==="Mern"?"white":"#385ab5")} onClick={()=>{
                setProjectView("Mern");
            }}>MERN</Button>
            <Button bgColor={projectView==="React"?"#385ab5":"transparent"} border="3px solid #385ab5" color={dark?(projectView==="React"?"black":"#385ab5"):(projectView==="React"?"white":"#385ab5")} onClick={()=>{
                setProjectView("React");
            }}>REACT</Button>
            <Button bgColor={projectView==="Html"?"#385ab5":"transparent"} border="3px solid #385ab5" color={dark?(projectView==="Html"?"black":"#385ab5"):(projectView==="Html"?"white":"#385ab5")} onClick={()=>{
                setProjectView("Html");
            }}>HTML</Button>
        </div>
        <div>
            {projectView==="All" && AllProjects.map((el,index)=><SingleProject key={index} dark={dark} image={el.image} name={el.name} description={el.description} techStack={el.techStack} live={el.live} github={el.github}/>)}
            {projectView==="Mern" && MernProjects.map((el,index)=><SingleProject key={index} dark={dark} image={el.image} name={el.name} description={el.description} techStack={el.techStack} live={el.live} github={el.github}/>)}
            {projectView==="React" && ReactProjects.map((el,index)=><SingleProject key={index} dark={dark} image={el.image} name={el.name} description={el.description} techStack={el.techStack} live={el.live} github={el.github}/>)}
            {projectView==="Html" && HtmlProjects.map((el,index)=><SingleProject key={index} dark={dark} image={el.image} name={el.name} description={el.description} techStack={el.techStack} live={el.live} github={el.github}/>)}
        </div>
    </div>
};

export default Projects;