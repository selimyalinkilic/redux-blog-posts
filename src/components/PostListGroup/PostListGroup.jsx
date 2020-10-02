import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./PostListGroup.scss";

const PostListGroup = ({ post }) => {
  return (
    <ListGroup.Item as="li" className="mp-list-item">
      <Link to={`/post/${post.id}`}>{post?.title.toUpperCase()}</Link>
    </ListGroup.Item>
  );
};

export default PostListGroup;
