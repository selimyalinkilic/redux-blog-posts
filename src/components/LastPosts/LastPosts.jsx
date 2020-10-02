import React, { useEffect } from "react";
import PostCard from "../PostCard/PostCard";
import { getLastPosts } from "../../redux/actions/postsAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AllPosts = () => {
  const posts = useSelector((state) => state.posts.posts);
  const loader = useSelector((state) => state.posts.loading);
  console.log("loader : ", loader);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLastPosts());
  }, [dispatch]);

  return (
    <div className="w-100">
      <h2 className="mt-4">Last Posts</h2>

      {loader ? (
        <div className="w-100 d-flex justify-content-center">Loading...</div>
      ) : (
        <div>
          {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
          <Link to="/posts" className="btn btn-primary w-100 h-20 mt-4 mb-4">
            Show All
          </Link>
        </div>
      )}
    </div>
  );
};

export default AllPosts;
