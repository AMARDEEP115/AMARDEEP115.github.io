import AboutMePic from "../assets/AboutMePic.png";
import "./AboutMee.css";

const AboutMe=({dark})=>{
    const handleAboutMeView=()=>{
        document.getElementById("Two").style.boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px";
        document.getElementById("Two").style.zoom="105%";
    }
    const handleAboutMeViewOver=()=>{
        document.getElementById("Two").style.boxShadow="";
        document.getElementById("Two").style.zoom="0%";
    }
    return <div id="AboutMe" style={{backgroundColor:dark?"rgb(30, 30, 30)":"rgb(230, 233, 255)"}}  onMouseEnter={handleAboutMeView} onMouseLeave={handleAboutMeViewOver}>
        {/* <div data-aos="zoom-in" style={{backgroundColor:"red",height:"200px"}}></div> */}
        <h1 style={{color:dark?"white":"black"}}>All <span>About</span> Me</h1>
        <div id="AboutmEbody">
            <div id="AboutmEbodyLeft" data-aos="zoom-in">
                <img id="imgage" src={AboutMePic} alt="aboutme" />
            </div>
            <div id="AboutmEbodyRight" data-aos="zoom-in">
                <ul>
                    <li>Hello, My name is Amar Deep. I am enthusiastic and passionate developer, & enjoy creating things that live on the internet.</li>
                    <li>Capability of managing clean, elegant, and efficient code with creativity to improve the overall performance and user experience of web applications.</li>
                    <li>Skilled in collaboration, decision-making, and DS & Algo.</li>
                    <li>Always ready to learn something new and deal with challenges and tasks.</li>
                    <li>I completed a Full-Stack Development course from Masai School.</li>
                    <li>I completed my diploma from Government Polytechnic Sinduria.</li>
                    <li>I have done my schooling at St. Joseph's School.</li>
                </ul>
            </div>
        </div>
    </div>
};

export default AboutMe;