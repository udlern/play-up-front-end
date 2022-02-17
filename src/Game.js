import { Card, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Game({ games, setGames, currentUser }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then((resp) => resp.json())
      .then((users) => setUsers(users));
  }, []);

  function handleOnClickJoinGame(gameId) {
    const data = {
      game_id: gameId,
      user_id: currentUser.id,
    };
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch("/users_games", configObj)
      .then((resp) => resp.json())
      .then((window.location.href = "/favorites-list"))
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState("");
  const [numOfPlayers, setNumOfPlayers] = useState("");
  const [location, setLocation] = useState("");
  const [dateAndTime, setDateAndTime] = useState("");
  const [equipment, setEquipment] = useState("");

  function handleTitleOnChange(event) {
    setTitle(event.target.value);
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

  function handleEquipmentOnChange(event) {
    setEquipment(event.target.value);
  }

  function handleNewGameSubmit(event) {
    event.preventDefault();
    const data = {
      start_time_and_date: dateAndTime,
      num_of_players: numOfPlayers,
      location,
      equipment,
      game_name: title,
      hosted_by: currentUser.id,
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
      .then(window.location.href="/game-list")
      .catch((error) => console.error("Error:", error));
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

  return (
    <div>
      <h1 className="page-header">Games to Join and Create!</h1>
      <Row>
        {games.map((game) => {
          return (
            <Col key={game.id}>
              <Card className="game-card">
                <Card.Header>
                  Hosted by:{" "}
                  {users.find((u) => u.id === game.hosted_by)?.first_name}{" "}
                  {users.find((u) => u.id === game.hosted_by)?.last_name}
                </Card.Header>
                <Card.Header>
                  Joined by:{" "}
                  {game.users
                    .map((user) => {
                      return `${user.first_name} ${user.last_name}`;
                    })
                    .join(", ")}
                </Card.Header>
                <Card.Body>
                  <Card.Title>Title: {game.game_name}</Card.Title>
                  <Card.Text>
                    Location: {game.location} <br />
                    Number of players needed: {game.num_of_players} <br />
                    Date and time of game: {game.start_time_and_date} <br />
                    Equipment needed: {game.equipment}
                  </Card.Text>

                  <Button
                    className="btn-secondary"
                    onClick={() => handleGameDelete(game.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    onClick={() => handleOnClickJoinGame(game.id)}
                    className="join-btn"
                  >
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
            <Form.Label>Title of game</Form.Label>
            <Form.Control
              type="title"
              placeholder="Title of game"
              value={title}
              onChange={handleTitleOnChange}
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
