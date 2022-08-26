import Button from "react-bootstrap/Button";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./assets/play-up-logo.png";
import { Nav } from "react-bootstrap";
import LoadingBtn from "./LoadingBtn";
import { Row, Col } from "react-bootstrap";

function Login({ setCurrentUser, setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isReady, setIsReady] = useState(true);

  function handleEmailOnChange(event) {
    setEmail(event.currentTarget.value);
  }

  function handlePasswordOnChange(event) {
    setPassword(event.currentTarget.value);
  }

  function handleLogInClick(event) {
    event.preventDefault();
    setIsReady(false);
    fetch("https://play-up-back-end.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setIsAuthenticated(true);
          setIsReady(true);
          window.location.href = "/home";
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  }

  // if(!isReady) {
  //   return (
  //     <>
  //      <div className='loading-body'>
  //   <h1 className='spin'>

  //   </h1>
  //   </div>
  //   </>)
  // }

  return (
    <>
      <section
        className="h-100 gradient-form"
        style={{ backgroundColor: "#03989e" }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img
                          src={logo}
                          style={{ width: "20rem", height: "20rem" }}
                          alt="Play Up! logo"
                        />
                        <h4 className="mt-1 mb-5 pb-1">Welcome to Play Up!</h4>
                      </div>

                      <form>
                        <p className="login-header">
                          Please login to your account
                        </p>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example11"
                            className="form-control"
                            placeholder="Email Address"
                            value={email}
                            onChange={handleEmailOnChange}
                          />
                          <label className="form-label">Email</label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordOnChange}
                          />
                          <label className="form-label">Password</label>
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <NavLink to="/home">
                            <Button
                              onClick={handleLogInClick}
                              className="btn-primary"
                            >
                              Log in
                            </Button>
                          </NavLink>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <NavLink to="/sign-up">
                            <Button className="btn-secondary">
                              Sign up here
                            </Button>
                          </NavLink>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 d-flex align-items-center"
                    style={{ backgroundColor: "#FFE958" }}
                  >
                    <div className="text-black px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">We are more than just a company</h4>
                      <p className="small mb-0">
                        At Play Up! we are passionate about creating memorable
                        and enjoyable experiences for our players. We love to
                        see people relating with one another, especially when
                        the interests are shared. All of us at Play Up! would
                        love for you to join and start making your own sport and
                        connection centered memories here!{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

    // <div>
    // <img src={logo} alt="Play Up! logo" width="200" height="200"></img>
    // <form className="row g-3">
    //     <div className="col-sm-6">
    //         <label className="form-label">Email</label>
    //         <input type="email" onChange={handleEmailOnChange} value={email} className="form-control" id="inputEmail4" />
    //     </div>
    //     <div className="col-sm-6">
    //         <label className="form-label">Password</label>
    //         <input type="password" className="form-control" id="inputPassword4" onChange={handlePasswordOnChange} value={password}/>
    //     </div>
    //     <div className="col col-lg-2">
    //         <button type="submit" className="btn btn-primary" onClick={handleLogInClick}>Log in</button>
    //     </div>
    //     <NavLink to="/">
    //     <div className="col col-lg-2">
    //         <button type="submit" className="btn btn-secondary" onClick={handleLogInClick}>Back Home</button>
    //     </div>
    //     </NavLink>
    // </form>
    // </div>
  );
}

export default Login;
