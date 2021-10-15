import React from "react";
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import "moment";
import moment from "moment";
import axios from "axios";
import { apis } from "../../shared/api";
import instance from "../../lib/axios";
import getToken from "../../shared/Token";

const SET_POSTS = "SET_POSTS";

const setPosts = createAction(SET_POSTS, (post_list) => ({ post_list }));

const initialState = {
    list: [],
  };
  

  const initialPost = {
    user_info: {
      id: 0,
      user_name: "wish",
      user_profile:
        "https://images.unsplash.com/photo-1540331547168-8b63109225b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=719&q=80",
    },
    image_url:
      "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    contents: "",
    like_cnt: 0,
    comment_cnt: 10,
    insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
  };


  const getPostsDB = () => {
    return function (dispatch, getState, { history }) {
      apis
        .getPost()
        .then((res) => {
          console.log(res);
          console.log(res.data);
          if (res.data.token) {
            window.localStorage.setItem("token", JSON.stringify(res.data.token));
          }
          dispatch(setPost(res.data));
        })
        .catch((err) => {
          //요청이 정상적으로 안됬을때 수행
          console.log(err, "에러");
        });
    };
  };



  export default handleActions(
    {
      [SET_POST]: (state, action) =>
        produce(state, (draft) => {
          // undifined는 값이 잘넘어가고있다. 값이 나올경우 어딘가에 문제가 있는것
  
          console.log(action.payload.postings);
          draft.list = action.payload.post_list.postings;
          
        }),
  
      
        }),
    },
    initialState
  );

  const actionCreators = {
    setPosts,
    getPostsDB,
    
  };
  
  export { actionCreators };