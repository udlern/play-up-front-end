import { Row, Col, Button, Card, Modal, Form } from "react-bootstrap";
import { useState } from "react";

function Comment({ comments, currentUser }) {
  const [showReply, setShowReply] = useState(false);
  const [showComment, setShowComment] = useState(false)
  const [commentForm, setCommentForm] = useState("");
  const [reply, setReply] = useState("")

  const handleCloseReply = () => setShowReply(false);
  const handleShowReply = () => setShowReply(true);

  const handleCloseComment = () => setShowComment(false);
  const handleShowComment = () => setShowComment(true);


  function handleNewCommentOnChange(event) {
    setCommentForm(event.target.value);
  }

  function handleReplyOnChange(event) {
      setReply(event.target.value)
  }

  function handleReplySubmit(event, commentId) {
    event.preventDefault();
    const data = {
      comment: reply
    };
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(`https://play-up-back-end.herokuapp.com/comments/${commentId}`, configObj)
      .then((resp) => resp.json())
      .then((window.location.href = "/comments-list"))
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function handleNewCommentSubmit(event) {
    event.preventDefault();
    const data = {
      comment: commentForm,
      user_id: currentUser.id,
    };
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch("https://play-up-back-end.herokuapp.com/comments", configObj)
      .then((resp) => resp.json())
      .then((window.location.href = "/comments-list"))
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div>
      <h1 className="page-header">Discussion Board</h1>
      <Row className="comment-btn-centered">
          <Col>
          <Row>
        <Button className="comment-btn" variant="primary" onClick={handleShowComment}>
          Write a comment!
        </Button>
        </Row>
        </Col>
        </Row>
        <Row>
        <Modal className="modal" show={showComment} onHide={handleCloseComment}>
          <Modal.Header closeButton>
            <Modal.Title>Write a comment...</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              type="text"
              value={commentForm}
              onChange={handleNewCommentOnChange}
              placeholder="Enter comment..."
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseComment}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleNewCommentSubmit}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal className="modal" show={showReply} onHide={handleCloseReply}>
          <Modal.Header closeButton>
            <Modal.Title>Write a reply...</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              type="text"
              value={reply}
              onChange={handleReplyOnChange}
              placeholder="Enter reply..."
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseReply}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => handleReplySubmit(comments.map(comment => {
                return comment.id
            }))}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>

        {comments.map((comment) => {
          return (
            <Col key={comment.id}>
              <Card className="comment-card">
                <Card.Header className="card-header">Posted by: {comment.user.first_name} {comment.user.last_name} </Card.Header>
                <Card.Body>
                  <Card.Title>{comment.comment}</Card.Title>
                  <Card.Text></Card.Text>

                  {/* <Button className="reply-btn" variant="primary" onClick={handleShowReply}>
                    Reply
                  </Button> */}
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Comment;
