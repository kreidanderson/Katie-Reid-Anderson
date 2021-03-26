import logo from "./KatieLogoLemon.png"
import "./style.css"

function Navbar() {
    const NameStyle = {
        fontFamily: `'Hind Vadodara', 'sans-serif'`,
        fontWeight: 'bolder',
        fontSize: 30,
        margin:0,
        paddingRight:0,
        marginRight:0,
    }
    const DesStyle = {
        fontFamily: `'Hind Vadodara', 'sans-serif'`,
        fontWeight: `'bold'`,
        fontSize: 15,
        paddingTop: 10,

    }
    const imgFormat = {
        height: 90,
        margin: 20
    }


  return (
    <nav
      className="navbar prairieNavbar navbar-expand-lg navbar-light"
      style={{
        fontFamily: `'Open Sans', 'sans-serif'`,
        fontSize: 14,
        backgroundColor: "white",
      }}
    >
      <div
        className="container-fluid prairieNavbar"
        style={{ backgroundColor: "white", opacity: 1 }}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              className="nav-link"
              style={{ fontFamily: `'Open Sans', 'sans-serif'`, fontSize: 14 }}
              aria-current="page"
              href="/about"
            >
              ABOUT
            </a>
            <a
              className="nav-link"
              style={{ fontFamily: `'Open Sans', 'sans-serif'`, fontSize: 14 }}
              href="/portfolio"
            >
              PORTFOLIO
            </a>
            <a
              className="nav-link"
              style={{ fontFamily: `'Open Sans', 'sans-serif'`, fontSize: 14 }}
              href="/contact"
            >
              CONTACT
            </a>
            <a
              className="nav-link"
              style={{ fontFamily: `'Open Sans', 'sans-serif'`, fontSize: 14 }}
              href="/contact"
            >
              ART
            </a>
          </div>
        </div>
        <img style={imgFormat} src={logo}></img>
      </div>
    </nav>
  );
}

export default Navbar;