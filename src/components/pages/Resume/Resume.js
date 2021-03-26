import React from "react";
import "./style.css";
import resume from "./KRA.pdf"

const Resume = () => {

    
  return (
<div className="">
  <div className="container">

  <embed className="resume" src={resume} />


  </div>
</div>

  );
};

export default Resume;