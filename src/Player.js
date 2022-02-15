import { Card, Button, Row, Container, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Player({ users, setUsers }) {
  function handleAddTeammate(currentUser) {
    setUsers(
      users.map((user) => {
        return user.id === currentUser.id ? { ...user, favorite: true } : user;
      })
    );
  }

  return (
    <div>
        <h1 className="page-header">Play Up! Users</h1>
      <Row>
        {users.map((user) => {
            console.log(user)
          return (
            <Col key={user.id}>
              <Card className="user-card">
                <Card.Header>
                  {user.first_name} {user.last_name}
                </Card.Header>
                <Card.Header>
                    <img src={user.url} alt="user profile image"></img>
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    Location: {user.location} 
                    </Card.Title>
                    <Card.Text>
                    Location of games currently playing: {user.games.length === 0 ? " Not currently playing any games" : user.games.map(game => {
                        return `${game.location}`}).join(", ")}
                  </Card.Text>
                  <Button
                    onClick={() => handleAddTeammate(user)}
                    id="teammate-btn"
                    className="follow-btn"
                  >
                    {users.find((u) => u.id === user.id).favorite
                      ? "Added as a teammate!"
                      : "Add as a teammate!"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Player;
