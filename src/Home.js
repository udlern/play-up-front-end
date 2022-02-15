import { NavLink } from "react-router-dom";
import basketball from "./assets/Family-basketball.jpeg";
import tennis from "./assets/tennis playing.jpeg";
import soccer from "./assets/soccer playing.jpeg";
import { Carousel, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Carousel>
              <Carousel.Item className="carousel">
                <img
                  className="d-block w-100"
                  src={basketball}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3 className="carousel-heading">The Larson Family</h3>
                  <p className="carousel-paragraph">
                    "Thank you so much for bringing our family and friends
                    together! We were looking for ways to have quality and
                    active time with those we love, and because of Play Up! we
                    know what our weekends look like now!"
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item className="carousel">
                <img
                  className="d-block w-100"
                  src={soccer}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3 className="carousel-heading">Floyd Murphy</h3>
                  <p className="carousel-paragraph">
                    "I was tired of sitting at home during my retirement, so I
                    had been hearing about Play Up! as a way to meet other sport
                    lovers and decided to give it a try. I have always loved
                    soccer and saw that there was already an existing game
                    nearby, so I joined and now the team and I meet up every
                    Monday and Wednesday to play! I feel like there has been
                    some injection of life back into my daily routine."
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item className="carousel">
                <img className="d-block w-100" src={tennis} alt="Third slide" />
                <Carousel.Caption>
                  <h3 className="carousel-heading-last">
                    What do you get when you join Play Up!?
                  </h3>
                  <p className="carousel-paragraph-last">
                    Connection. Fun. Togetherness.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
