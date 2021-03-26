import "./style.css"
import github from "./assets/github.png"
import linkedin from "./assets/linkedin.png"
import ig from "./assets/instagram.png"

function Footer() {
  const imgSize = {
    height:50
  }
  const gitSize = {
    height:43
  }
    return (
  <footer style={{paddingTop:300}} className="footer mt-auto py-3">
    <div className="container-fluid">
        <a target="_blank" href="https://github.com/kreidanderson"><img style={gitSize} src={github}></img></a>
        <a target="_blank" href="https://www.linkedin.com/in/katiereid-anderson/"><img style={imgSize} src={linkedin}></img></a>
        <a target="_blank" href="https://www.instagram.com/katiera.art/"><img style={imgSize} src={ig}></img></a>
      </div>
  </footer>
    );
  }
  
  export default Footer;