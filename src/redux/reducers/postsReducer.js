import {
  GET_LAST_POSTS,
  GET_MOST_POPULAR_POSTS,
  GET_POSTS,
  GET_POST_DETAIL,
} from "../types";

const INITIAL_STATE = {
  posts: [],
  postDetail: [],
  loading: true,
};

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case GET_POST_DETAIL:
      return {
        ...state,
        postDetail: action.payload,
        loading: false,
      };
    case GET_LAST_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case GET_MOST_POPULAR_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default postsReducer;
