import {useEffect, useState} from "react";
import Comment from "../Comment/Comment";
import axios from "axios";

function CommentList() {
  const [commentsArray, setCommentsArray] = useState([]);
  // const comments = [];

  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await axios.get(
          "https://unit-2-project-api-25c1595833b2.herokuapp.com/comments?api_key=943bb598-b91d-4a4a-9d4b-63247bf96fdb "
        );

        setCommentsArray(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchComments();
  }, []);

  return (
    <div>
      {commentsArray.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;