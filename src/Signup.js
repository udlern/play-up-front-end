import { Button } from "react-bootstrap";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./assets/play-up-logo.png";


function SignUp({setCurrentUser}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [location, setLocation] = useState("")
  const [userImage, setUserImage] = useState("")


  function handleEmailOnChange(event) {
    setEmail(event.currentTarget.value);
  }

  function handlePasswordOnChange(event) {
    setPassword(event.currentTarget.value);
  }

  function handleFirstNameOnChange(event) {
    setFirstName(event.currentTarget.value);
  }

  function handleLastNameOnChange(event) {
    setLastName(event.currentTarget.value);
  }

  function handleLocationOnChange(event) {
setLocation(event.target.value)
  }

  function handleUserImageOnChange(event) {
    setUserImage(event.target.value)
      }
      console.log(userImage)



  function handleSignUpClick(event) {
    event.preventDefault()
    fetch("/users", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password,
        first_name: firstName,
        last_name: lastName,
        location, 
        url: userImage
      })

    })
    .then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          window.location.href="/"
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  }

  return (
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
                          type="first-name"
                          className="form-control"
                          placeholder="First name"
                          value={firstName}
                          onChange={handleFirstNameOnChange}
                        />
                        <label className="form-label">First name</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="last-name"
                          className="form-control"
                          placeholder="Last name"
                          value={lastName}
                          onChange={handleLastNameOnChange}
                        />
                        <label className="form-label">Last name</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="location"
                         
                          className="form-control"
                          placeholder="Your location in city, state format"
                          value={location}
                          onChange={handleLocationOnChange}
                        />
                        <label className="form-label">Your location</label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="url"
                          className="form-control"
                          placeholder="Enter a url"
                          value={userImage}
                          onChange={handleUserImageOnChange}
                        />
                        <label className="form-label">Your profile picture</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
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
                          className="form-control"
                          placeholder="Password"
                          value={password}
                          onChange={handlePasswordOnChange}
                        />
                        <label className="form-label">Password</label>
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <NavLink to="/">
                          <Button onClick={handleSignUpClick} className="btn-primary">Sign up</Button>
                        </NavLink>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Already have an account?</p>
                        <NavLink to="/">
                          <Button className="btn-secondary">Log in here</Button>
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
                      At Play Up! we are passionate about creating memorable and
                      enjoyable experiences for our players. We love to see
                      people relating with one another other, especially when
                      the interests are shared. All of us at Play Up! would love
                      for you to join and start making your own sport and
                      connection centered memories with us!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
