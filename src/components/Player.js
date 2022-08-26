import { Card, Col, Row } from "react-bootstrap";

function Player({ users, setUsers }) {
  return (
    <div>
      <h1 className="page-header">Play Up! Users</h1>
      <Row>
        {users.map((user) => {
          return (
            <Col key={user.id}>
              <Card className="user-card">
                <Card.Header>
                  {user.first_name} {user.last_name}
                </Card.Header>
                <Card.Header>
                  <img src={user.url} alt="user profile"></img>
                </Card.Header>
                <Card.Body>
                  <Card.Title>Location: {user.location}</Card.Title>
                  <Card.Text>
                    Location of games currently playing:{" "}
                    {user.games.length === 0
                      ? " Not currently playing any games"
                      : user.games
                          .map((game) => {
                            return `${game.location}`;
                          })
                          .join(", ")}
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

export default Player;
