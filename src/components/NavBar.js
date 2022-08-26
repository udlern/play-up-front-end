import { useState } from "react";
import { Navbar, Offcanvas, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import navBarLogo from "../assets/play-up-logo.png";

function NavBar({
  currentUser,
  setCurrentUser,
  setIsAuthenticated,
  isAuthenticated,
}) {
  const [expanded, setExpanded] = useState(false);
  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" })
      .then((res) => {
        if (res.ok) {
          setCurrentUser({ email: "", password: "", games: [], comments: [] });
          setIsAuthenticated(false);
        }
      })
      .then((window.location.href = "/"))
      .then(window.location.reload())
      .catch((error) => console.log(error));
    console.log(currentUser);
    console.log(isAuthenticated);
  };

  return (
    <Navbar className="nav-bar" bg="light" expand={false} expanded={expanded}>
      <Navbar.Brand href="/"> </Navbar.Brand>
      <Navbar.Toggle
        className="nav-bar-toggle"
        aria-controls="offcanvasNavbar"
        disabled={!currentUser}
        onClick={() => setExpanded(true)}
      />
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
      >
        <Offcanvas.Header
          closeButton
          show={expanded.toString()}
          onHide={() => setExpanded(false)}
        >
          <Offcanvas.Title id="offcanvasNavbarLabel" className="nav-bar-title">
            Welcome, {currentUser ? currentUser.first_name : "Nobody"}!
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link
              className="nav-bar-link"
              onClick={() => setExpanded(false)}
              as={NavLink}
              to="/profile"
            >
              {currentUser ? currentUser.first_name : "Nobody"}'s Stats
            </Nav.Link>
            <Nav.Link
              className="nav-bar-link"
              onClick={() => setExpanded(false)}
              as={NavLink}
              to="/players-list"
            >
              Players
            </Nav.Link>
            <Nav.Link
              className="nav-bar-link"
              onClick={() => setExpanded(false)}
              as={NavLink}
              to="/game-list"
            >
              Find a Game
            </Nav.Link>
            <Nav.Link
              className="nav-bar-link"
              onClick={() => setExpanded(false)}
              as={NavLink}
              to="/favorites-list"
            >
              My Games
            </Nav.Link>
            <Nav.Link
              className="nav-bar-link"
              onClick={() => setExpanded(false)}
              as={NavLink}
              to="/comments-list"
            >
              Huddle Up!
            </Nav.Link>
            <Nav.Link
              className="nav-bar-link"
              onClick={() => setExpanded(false)}
              as={NavLink}
              to="/home"
            >
              Home Base
            </Nav.Link>
            <Nav.Link
              className="nav-bar-link"
              onClick={() => {
                handleLogout();
                setExpanded(false);
              }}
              as={NavLink}
              to="/"
            >
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
