import { Card, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import NewGame from "./NewGame";
import { NavLink } from "react-router-dom";

function Game({ games, setGames }) {
  // function handleCreateNewGame() {
  //   return <NewGame />;
  // }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [category, setCategory] = useState("");
  const [numOfPlayers, setNumOfPlayers] = useState("");
  const [location, setLocation] = useState("");
  const [dateAndTime, setDateAndTime] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [equipment, setEquipment] = useState("");

  function handleCategoryOnChange(event) {
    setCategory(event.target.value);
  }

  function handleNumOfPlayersOnChange(event) {
    setNumOfPlayers(event.target.value);
  }

  function handleLocationOnChange(event) {
    setLocation(event.target.value);
  }

  function handleDateAndTimeOnChange(event) {
    setDateAndTime(event.target.value);
  }

  function handleFirstNameOnChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameOnChange(event) {
    setLastName(event.target.value);
  }

  function handleEquipmentOnChange(event) {
    setEquipment(event.target.value);
  }

  function handleNewGameSubmit(event) {
    event.preventDefault();
    const data = {
      start_time_and_date: dateAndTime,
      num_of_players: numOfPlayers,
      location,
      first_name: firstName,
      last_name: lastName,
      equipment_title: equipment,
      category_title: category,
    };
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch("/games", configObj)
      .then((resp) => resp.json())
      .then((window.location.href = "/game-list"))
      .catch((error) => {
        console.error("Error:", error);
      });
    setDateAndTime("");
    setLocation("");
    setNumOfPlayers("");
  }

  function handleGameDelete(gameId) {
    fetch(`/games/${gameId}`, { method: "DELETE" }).then((resp) => {
      if (resp.ok) {
        resp.arrayBuffer().then(
          // Fetching games ...
          fetch("/games")
            .then((gamesResp) => gamesResp.json())
            .then(setGames)
        );
      } else {
        // ...
        resp.arrayBuffer().then((errors) => {
          console.error(errors);
        });
      }
    });
  }

  function handleOnClickJoin() {
    return <Button className="join-btn">Joined game!</Button>;
  }
  return (
    <div>
      <h1 className="page-header">Games to Join and Create!</h1>
      <Row>
        {games.map((game) => {
          console.log(game);
          return (
            <Col key={game.id}>
              <Card className="game-card">
                <Card.Header>
                  Joined by:{" "}
                  {game.users.map((user) => {
                    return `${user.first_name} ${user.last_name}`;
                  }).join(", ")}
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    Category: {game.category.category_title}
                  </Card.Title>
                  <Card.Text>
                    Location: {game.location} <br />
                    Number of players needed: {game.num_of_players} <br />
                    Date and time of game: {game.start_time_and_date} <br />
                    Equipment needed: {" "}
                    {game.equipment.length === 0
                      ? "None listed"
                      : game.equipment
                          .map(equipment => {
                            console.log(equipment.equipment_title)
                            return equipment.equipment_title
                          })
                          .join(", ")}
                    
                  </Card.Text>
                 
                  <Button
                    className="btn-secondary"
                    onClick={() => handleGameDelete(game.id)}
                  >
                    Delete
                  </Button>
                  <Button onClick={handleOnClickJoin} className="join-btn">
                    Join game!
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>

      <div className="d-flex justify-content-center">
        <Button className="add-new-game-btn" onClick={handleShow}>
          +
        </Button>

        <Modal className="modal" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create a game!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="first-name"
              placeholder="First name"
              value={firstName}
              onChange={handleFirstNameOnChange}
            />
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="last-name"
              placeholder="Last name"
              value={lastName}
              onChange={handleLastNameOnChange}
            />
            <Form.Label>Category of game</Form.Label>
            <Form.Control
              type="category"
              placeholder="Category of game"
              value={category}
              onChange={handleCategoryOnChange}
            />
            <Form.Label>Number of players needed</Form.Label>
            <Form.Control
              type="players"
              placeholder="Number of players needed"
              value={numOfPlayers}
              onChange={handleNumOfPlayersOnChange}
            />
            <Form.Label>Location of the game</Form.Label>
            <Form.Control
              type="location"
              placeholder="Location of the game"
              value={location}
              onChange={handleLocationOnChange}
            />
            <Form.Label>Equipment needed</Form.Label>
            <Form.Control
              type="equipment"
              placeholder="Equipment needed"
              value={equipment}
              onChange={handleEquipmentOnChange}
            />
            <Form.Label>Date and Time of the game</Form.Label>
            <Form.Control
              type="date-and-time"
              placeholder="Date and time of the game"
              value={dateAndTime}
              onChange={handleDateAndTimeOnChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <NavLink to="/game-list">
              <Button variant="primary" onClick={handleNewGameSubmit}>
                Submit
              </Button>
            </NavLink>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Game;
