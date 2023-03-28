import GitHubCalendar from "react-github-calendar";
import github from "../assets/github.gif";
import "./GitStatss.css";

const GitStats=({dark})=>{
    return <div id="Stats" style={{backgroundImage:dark?"url(https://thumbs.gfycat.com/BriefIgnorantBlackbuck-size_restricted.gif)":""}}>
        <h1 style={{color:dark?"white":"black"}}><span>Git</span> Stats</h1>
        <div>
            {/* https://raw.githubusercontent.com/gist/ManulMax/2d20af60d709805c55fd784ca7cba4b9/raw/bcfeac7604f674ace63623106eb8bb8471d844a6/github.gif */}
            <img data-aos="zoom-in" src={github} style={{backgroundColor:dark?"#475396":"transparent"}} alt="githubgif"/>
            <div>
                {!dark && <img data-aos="zoom-in" src="https://github-readme-stats.vercel.app/api?username=AMARDEEP115&show_icons=true&locale=en" alt="left" />}
                {dark && <img data-aos="zoom-in" src="https://github-readme-stats.vercel.app/api?username=AMARDEEP115&show_icons=true&locale=en&theme=dark" alt="left" />}
                {!dark && <img data-aos="zoom-in" src="https://streak-stats.demolab.com/?user=AMARDEEP115" alt="right" />}
                {dark && <img data-aos="zoom-in" src="https://streak-stats.demolab.com/?user=AMARDEEP115&theme=dark" alt="right" />}
            </div>
        </div>
        <div data-aos="zoom-in">
            <GitHubCalendar username="AMARDEEP115" year={new Date().getFullYear()} blockSize={15} blockMargin={5} color="blue" style={{color:dark?"white":"#385ab5",fontWeight:"500"}}/>
        </div>
    </div>
};

export default GitStats;