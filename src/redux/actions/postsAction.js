import {
  GET_POSTS,
  GET_POST_DETAIL,
  GET_LAST_POSTS,
  GET_MOST_POPULAR_POSTS,
  GET_COMMENTS_BY_POST_ID,
} from "../types";
import axios from "axios";

export const getPosts = () => async (dispatch) => {
  await axios
    .get(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) => {
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getLastPosts = () => async (dispatch) => {
  await axios
    .get(`https://jsonplaceholder.typicode.com/posts`, {
      params: {
        _limit: 10,
      },
    })
    .then((res) => {
      dispatch({
        type: GET_LAST_POSTS,
        payload: res.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getMostPopularPosts = () => async (dispatch) => {
  await axios
    .get(`https://jsonplaceholder.typicode.com/posts`, {
      params: {
        _limit: 5,
      },
    })
    .then((res) => {
      dispatch({
        type: GET_MOST_POPULAR_POSTS,
        payload: res.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getPostDetail = (id) => async (dispatch) => {
  await axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => {
      dispatch({
        type: GET_POST_DETAIL,
        payload: res.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getCommentsByPostId = (id) => async (dispatch) => {
  await axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then((res) => {
      dispatch({
        type: GET_COMMENTS_BY_POST_ID,
        payload: res.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
