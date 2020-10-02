import React, { useEffect } from "react";
import PostListGroup from "../PostListGroup/PostListGroup";
import { getMostPopularPosts } from "../../redux/actions/postsAction";
import { useDispatch, useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";

const MostPopularPosts = () => {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMostPopularPosts());
  }, [dispatch]);

  return (
    <div className="w-100">
      <h2 className="mt-4">Most Popular</h2>
      <ListGroup as="ul" className="mt-4">
        {posts &&
          posts
            .slice(0, 5)
            .map((post) => <PostListGroup key={post.id} post={post} />)}
      </ListGroup>
    </div>
  );
};

export default MostPopularPosts;
