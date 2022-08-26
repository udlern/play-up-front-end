import { Button } from "react-bootstrap";
import logo from "../../assets/play-up-homepage-logo.png";

function Home() {
  return (
    <>
      <div className="split left">
        <div className="centered">
          <img src={logo} alt="logo" />
        </div>
      </div>

      <div className="split right">
        <div className="centered">
          <h1 className="home-header">
            Ready to play? Click{" "}
            <Button className="btn-home" href="/game-list">
              here
            </Button>{" "}
            to get started!
          </h1>
        </div>
      </div>
    </>
  );
}

export default Home;
