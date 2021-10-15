import React from "react";
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import "moment";
import moment from "moment";
import instance from "../../lib/axios";
import axios from "axios";
import getToken from "../../shared/Token";

// Actions

const ADD_POST = "ADD_POST";
const IMG_FILE = "IMG_FILE";

const addPost = createAction(ADD_POST, (post) => ({ post }));

// const imgFile = createAction(IMG_FILE, (img) => {
//   var text_con = img;
//   console.log("여기로 오나");
//   console.log(img);
//   return { img };
// });

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

const addPosts = (contents = "", img = "") => {
  return function (dispatch, getState, { history }) {
    const _user = getState().user;

    const token = window.localStorage.getItem("token");
    const realToken = token.replace(/\"/gi, "");
    console.log("토큰값", realToken);

    let time = moment().format("YYYY-MM-DD hh:mm:ss");

    let post = {
      ...initialState,
      list: {
        user_info: {
          user_email: _user.email,
          user_nick: _user.nick,
          user_profile: _user.user_profile,
        },
        id: `${_user.email}${time}`,
        image_url: img,
        content: contents,
        insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
        like_cnt: 10,
        comment_cnt: 10,
        is_like: false,
        is_me: false,
      },
    };

    axios
      .post(
        "http://3.35.235.79/api/postings",
        {
          img: img,
          text: contents,
        },
        {
          headers: {
            Authorization: `Bearer ${realToken}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        dispatch(addPost(post));
        console.log("tjdrhd");
        history.push("/");
      })
      .catch((error) => {
        console.log("DB ERROR", error);
      });
  };
};

// 5. reducer(리듀서)
export default handleActions(
  {
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        // console.log("여기 action", action);
        // console.log("여기 state", state);
        // console.log("이것은 draft", draft);

        draft.list.unshift(action.payload.post.list);
      }),
    [IMG_FILE]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

// 6. action creator export
// 액션생성함수를 내보낸다.
const actionCreators = {
  addPosts,
  // imgFile,
};

export { actionCreators };
