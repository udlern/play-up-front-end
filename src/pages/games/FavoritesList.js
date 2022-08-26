import { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";

function FavoritesList({ currentUser }) {
  const [usersGames, setUsersGames] = useState([]);
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(`/users/${currentUser.id}`)
      .then((resp) => resp.json())
      .then((user) => setUsersGames(user.games));
  }, []);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then((resp) => resp.json())
      .then(setUsers);
  }, []);

  useEffect(() => {
    usersGames.forEach((game) => {
      fetch(`/games/${game.id}`)
        .then((resp) => resp.json())
        .then((game) => setGames((prevGames) => [...prevGames, game]));
    });
  }, [usersGames.length]);

  return (
    <div>
      <h1 className="page-header">Games I've Joined</h1>
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
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default FavoritesList;
