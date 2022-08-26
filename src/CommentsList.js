import { useState, useEffect } from "react";

import Comment from "./Comment";
import playUpFetch from "./services/fetch";

function CommentsList({ currentUser }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    playUpFetch("/comments")
      .then((resp) => resp.json())
      .then(setComments);
  }, []);

  return (
    <div>
      <Comment
        currentUser={currentUser}
        setComments={setComments}
        comments={comments}
      />
    </div>
  );
}

export default CommentsList;
