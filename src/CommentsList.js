import { useState, useEffect } from "react";
import Comment from './Comment'

function CommentsList({currentUser}) {

    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch("/comments")
        .then(resp => resp.json())
        .then(setComments)
      }, [])

      console.log(comments)

    return(
<div><Comment currentUser={currentUser} setComments={setComments} comments={comments}/></div>
    )
}

export default CommentsList;