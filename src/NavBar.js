import { Navbar, Offcanvas, Nav } from "react-bootstrap";

import navBarLogo from "./assets/play-up-logo.png";

function NavBar({currentUser, setCurrentUser}) {
  const handleLogout = () => {
    fetch('/logout', {method: "DELETE"})
    .then(res => {
          if (res.ok) {
            setCurrentUser(null)
          }
        })
  }
  return (
    <Navbar className="nav-bar" bg="light" expand={false}>
      <Navbar.Brand href="/">
        {" "}
        {/* <div className="nav-bar-header">
          <img className="nav-bar-img" src={navBarLogo} alt="nav bar logo"/>
          </div> */}
      </Navbar.Brand>
      <Navbar.Toggle
        className="nav-bar-toggle"
        aria-controls="offcanvasNavbar"
      />
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel" className="nav-bar-title">
            Welcome, {currentUser.first_name}!
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link className="nav-bar-link" href="/profile">
              {currentUser.first_name}'s Stats
            </Nav.Link>
            <Nav.Link className="nav-bar-link" href="/players-list">
              Players
            </Nav.Link>
            <Nav.Link className="nav-bar-link" href="/game-list">
              Find a Game
            </Nav.Link>
            <Nav.Link className="nav-bar-link" href="/favorites-list">
              My Teammates and Games
            </Nav.Link>
            <Nav.Link className="nav-bar-link" href="/comments-list">
              Huddle Up!
            </Nav.Link>
            <Nav.Link className="nav-bar-link" href="/home">
              Home Base
            </Nav.Link>
            <Nav.Link className="nav-bar-link" href="/" onClick={handleLogout}>
              Logout
            </Nav.Link>
          </Nav>
          <img
            className="nav-bar-logo"
            src={navBarLogo}
            alt="nav bar logo"
          ></img>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
}

export default NavBar;
