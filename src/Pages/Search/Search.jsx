import React, { useEffect } from "react";
import PostCard from "../../components/PostCard/PostCard";
import { getPosts } from "../../redux/actions/postsAction";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";

const Search = () => {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="posts">
      <Container>
        <Row>
          <Col xs={12}>
            <h2 className="mt-4">All Posts</h2>
            {posts &&
              posts.map((post) => <PostCard key={post.id} post={post} />)}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Search;
