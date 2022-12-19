import "./GitStats.css";
import React from "react";
import GitHubCalendar from "react-github-calendar";

function GitStats(){
    const colourTheme = {
        background: "transparent",
        text: "#ffffff",
        grade4: "#8400b8",
        grade3: "#b22ff4",
        grade2: "#b265f6",
        grade1: "#c084f5",
        grade0: "#ecd9fc"
      };
    return <div id="GitStats" data-aos="fade-right" style={{margin:"auto"}}>
        <h1 style={{fontSize:"50px",textAlign:"center",marginBottom:"25px",color:"yellowgreen"}}>Git stats</h1>
        <div className="FullScreen" style={{height:"500px"}}>
            <div className={colourTheme} style={{width:"86%",margin:"auto"}}>
                <h2>
                    Days I <span className="different"> Code</span>
                </h2>
                {/* blockSize={15} blockMargin={5} */}
                <GitHubCalendar username="AMARDEEP115" year={new Date().getFullYear()} blockSize={15} blockMargin={5}/>
            </div>
            <div className="gitStats">
                <img src="https://github-readme-stats.vercel.app/api?username=AMARDEEP115&show_icons=true&locale=en" alt="githubreadme" />
                <img src="https://streak-stats.demolab.com/?user=AMARDEEP115" alt="streak-starks" />
            </div>
        </div>
        <div className="MediumScreen">
            <div className={colourTheme} style={{width:"86%",margin:"auto"}}>
                <h2>
                    Days I <span className="different"> Code</span>
                </h2>
                <GitHubCalendar username="AMARDEEP115" year={new Date().getFullYear()} />
            </div>
            <div className="gitStats">
                <img src="https://github-readme-stats.vercel.app/api?username=AMARDEEP115&show_icons=true&locale=en" alt="githubreadme" />
                <img src="https://streak-stats.demolab.com/?user=AMARDEEP115" alt="streak-starks" />
            </div>
        </div>
        <div className="SmallScreen">
            <div className={colourTheme} style={{width:"86%",margin:"auto"}}>
                <h2>
                    Days I <span className="different"> Code</span>
                </h2>
                <GitHubCalendar username="AMARDEEP115" year={new Date().getFullYear()} />
            </div>
            <div className="gitStats">
                <img src="https://github-readme-stats.vercel.app/api?username=AMARDEEP115&show_icons=true&locale=en" alt="githubreadme" />
                <img src="https://streak-stats.demolab.com/?user=AMARDEEP115" alt="streak-starks" />
            </div>
        </div>
    </div>
}

export default GitStats;
