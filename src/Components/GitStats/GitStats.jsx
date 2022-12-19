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
        <h1 style={{fontSize:"50px",textAlign:"center",marginBottom:"25px"}}>Git stats</h1>
        <div className="FullScreen" style={{height:"500px"}}>
            <div className={colourTheme} style={{width:"86%",margin:"auto"}}>
                <h2>
                    Days I <span className="different"> Code</span>
                </h2>
                {/* blockSize={15} blockMargin={5} */}
                <GitHubCalendar username="AMARDEEP115" year={new Date().getFullYear()} blockSize={15} blockMargin={5}/>
            </div>
        </div>
        <div className="MediumScreen" style={{height:"300px"}}>
            <div className={colourTheme} style={{width:"86%",margin:"auto"}}>
                <h2>
                    Days I <span className="different"> Code</span>
                </h2>
                <GitHubCalendar username="AMARDEEP115" year={new Date().getFullYear()} />
            </div>
        </div>
        <div className="SmallScreen" style={{height:"200px",padding:"10px"}}>
            <div className={colourTheme} style={{width:"86%",margin:"auto"}}>
                <h2>
                    Days I <span className="different"> Code</span>
                </h2>
                <GitHubCalendar username="AMARDEEP115" year={new Date().getFullYear()} />
            </div>
        </div>
    </div>
}

export default GitStats;
