import "./style.css";
import developer from "./developer.png";
import resume from "./resumeicon.png";
import art from "./art.png";

function Landing() {
    return (
<div>
  <div className="jumbo lavender container">
  <p style={{color: 'white', fontFamily: `'Open Sans', 'sans-serif'`}} className="display-4 text-align-center welcome">Welcome!</p>
<div className="row linkrow"> 
<img style={{width:30, height:60}} src={developer} className="col"/>
<img style={{width:35, height: 65}} src={art} className="col"/>
<img href="/resume" style={{width:30, height:60}} src={resume} className="col"/>
</div>
<div className="row linkrow"> 
<p style={{color: 'white', fontWeight: 'bold', fontFamily: `'Open Sans', 'sans-serif'`}}className="lead col"></p>
    <p style={{color: 'white', fontWeight: 'bold', fontFamily: `'Open Sans', 'sans-serif'`}}className="lead col"></p>
    <p style={{color: 'white', fontWeight: 'bold', fontFamily: `'Open Sans', 'sans-serif'`}}className="lead col"></p>
</div>
<div className="row linkrow"> 

    <a className="lead col" href="/portfolio"><p style={{fontSize:10, color: 'black', fontFamily: `'Open Sans', 'sans-serif'`}} >PORTFOLIO</p></a>
<a className="lead col" href="/art"><p style={{fontSize:10, color: 'black', fontFamily: `'Open Sans', 'sans-serif'`}}>ART</p></a>
    <a className="lead col" href="/resume"><p style={{fontSize:10, color: 'black', fontFamily: `'Open Sans', 'sans-serif'`}}>RESUME</p></a>
</div>
  </div>

  </div>
    )
}

export default Landing;