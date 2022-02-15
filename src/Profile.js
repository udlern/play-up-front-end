import { Card, Row, Col, Container } from "react-bootstrap";
function Profile({currentUser}) {
    return (
        <div>
        <h1 className="page-header">Hey, {currentUser.first_name}, you've got the stats of a pro Play Up! player!</h1>
        <Container className="profile-card-centered">
      <Row className="profile-card-centered">
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
      </Container>
    </div>
    )
}

export default Profile;