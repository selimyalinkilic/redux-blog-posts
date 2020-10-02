import React, { useEffect, useState } from "react";
import PostCard from "../../components/PostCard/PostCard";
import { getPosts } from "../../redux/actions/postsAction";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import CustomPagination from "../../components/CustomPagination/CustomPagination";

const Posts = () => {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  const [allPosts, setAllPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    dispatch(getPosts());
    setAllPosts(posts);
  }, [dispatch, posts]);

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="posts">
      <Container>
        <Row>
          <Col xs={12}>
            <h2 className="mt-4">All Posts</h2>
            {currentPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
            <CustomPagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Posts;
