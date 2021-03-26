import React from "react";
import "./style.css";
import resume from "./KRA.pdf"
import resimg from "./resumeimg.png"

const Resume = () => {

    
  return (
<div className="">
  <div className="container">

  <object className="resume" data={resume}>
  <p><a href={resume}>Download Here</a></p>
    <img className="resumeImg" src={resimg}/>
</object>

  </div>
</div>

  );
};



export default Resume;

{/* <embed className="resume" src={resume} />
<img className="resume" src={resume}></img> */}