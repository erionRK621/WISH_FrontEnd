import React from "react";
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import "moment";
import moment from "moment";

// Actions

const ADD_POST = "ADD_POST";

const addPost = createAction(ADD_POST, (post) => ({ post }));

//초기상태값
const initialState = {
  list: [
    {
      user_info: {
        user_name: "위시",
        user_profile:
          "https://images.unsplash.com/photo-1540331547168-8b63109225b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=719&q=80",
      },
      image_url:
        "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      content: "블라블라",
      insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
      like_cnt: 10,
      comment_cnt: 10,
      is_like: false,
      is_me: false,
    },
  ],
};

const addPosts = (contents = "") => {
  return function (dispatch, getState, { history }) {
    const _user = getState().user.user;
    console.log(_user);

    const user_info = {
      user_name: _user.nick,
      user_profile: _user.user_profile,
    };

    const posts = {
      user_info,
      ...initialState,
      contents: contents,
      insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
    };

    dispatch(addPost(posts));
  };
};

// 5. reducer(리듀서)
export default handleActions(
  {
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        console.log("여기", action);

        console.log("이것은 draft", draft);
      }),
  },
  initialState
);

// 6. action creator export
// 액션생성함수를 내보낸다.
const actionCreators = {
  addPosts,
};

export { actionCreators };
