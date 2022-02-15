import { Row, Col, Card } from "react-bootstrap";
function FavoritesList({currentUser}) {
  return (
    <div>
        <h1 className="page-header">My Favorites List</h1>
      <Row>
        <Col>
          <Card className="profile-card">
            <Card.Header>{currentUser.first_name} {currentUser.last_name}</Card.Header>
            <Card.Header><img src={currentUser.url} alt="user profile image"></img></Card.Header>
            <Card.Body>
              <Card.Title>{currentUser.email}</Card.Title>
              <Card.Title>{currentUser.location}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default FavoritesList;
