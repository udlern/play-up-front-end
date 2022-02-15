import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function NewGame() {
  const [category, setCategory] = useState("");
  const [numOfPlayers, setNumOfPlayers] = useState("");
  const [location, setLocation] = useState("");
  const [dateAndTime, setDateAndTime] = useState("");
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [equipment, setEquipment] = useState("")

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
      setFirstName(event.target.value)

  }

  function handleLastNameOnChange(event) {
      setLastName(event.target.value)
  }

  function handleEquipmentOnChange(event) {
      setEquipment(event.target.value)
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
      category_title: category
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
      .then(window.location.href = "/")
      .catch((error) => {
        console.error("Error:", error);
      });
    setDateAndTime("");
    setLocation("");
    setNumOfPlayers("");
  }

  return (
    <div>
      <Form>
         <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="first-name"
            placeholder="First name"
            value={firstName}
            onChange={handleFirstNameOnChange}
          />
          </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="last-name"
            placeholder="Last name"
            value={lastName}
            onChange={handleLastNameOnChange}
          />
           <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Category of game</Form.Label>
          <Form.Control type="category" placeholder="Category of game" value={category} onChange={handleCategoryOnChange}/>
        </Form.Group>
          </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Number of players needed</Form.Label>
          <Form.Control
            type="players"
            placeholder="Number of players needed"
            value={numOfPlayers}
            onChange={handleNumOfPlayersOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Location of the game</Form.Label>
          <Form.Control
            type="location"
            placeholder="Location of the game"
            value={location}
            onChange={handleLocationOnChange}
          />
           <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Equipment needed</Form.Label>
          <Form.Control type="equipment" placeholder="Equipment needed" value={equipment} onChange={handleEquipmentOnChange}/>
        </Form.Group>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Date and Time of the game</Form.Label>
          <Form.Control
            type="date-and-time"
            placeholder="Date and time of the game"
            value={dateAndTime}
            onChange={handleDateAndTimeOnChange}
          />
        </Form.Group>
        <NavLink to="/">
        <Button onClick={handleNewGameSubmit} variant="primary" type="submit">
          Create new game!
        </Button>
        </NavLink>
      </Form>
    </div>
  );
}
export default NewGame;
