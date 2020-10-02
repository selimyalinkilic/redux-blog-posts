import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import "./PostCard.scss";

const PostCard = ({ post, history }) => {
  const [progress, setProgress] = useState(0);
  const handleOnClick = async () => {
    let p;
    let promise = new Promise(function (resolve, reject) {
      p = 10;
      setProgress(p);
      setInterval(() => {
        p += 30;
        setProgress(p);
      }, 900);
      setTimeout(() => {
        resolve("done");
      }, 3000);
    });
    await promise.then((result) => {
      if (result === "done") {
        history.push(`/post/${post.id}`);
      }
    });
  };
  return (
    <Card className="mt-4">
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
        <button className="btn btn-primary" onClick={handleOnClick}>
          Read More
        </button>
      </Card.Body>
      {progress ? (
        <LoadingBar
          color="#007bff"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
      ) : (
        ""
      )}
    </Card>
  );
};

export default withRouter(PostCard);
