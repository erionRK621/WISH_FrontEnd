import React from "react";
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/api";
import instance from "../../lib/axios";

//import { getCookie } from "../../shared/Cookie";

//axios
import moment from "moment";
//쿠키

//액션타입만들기
const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";

const LOADING = "LOADING";

//액션생성함수만들기
const setComment = createAction(SET_COMMENT, (post_id, comment_list) => ({
  post_id,
  comment_list,
}));
const addComment = createAction(ADD_COMMENT, (post_id, comment) => ({
  post_id,
  comment,
}));

const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

//initialState 만들기
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

//복합쿼리설정
const addComments = (post_id, comment_text) => {
  return function (dispatch, getState, { history }) {
    const _user = getState().user;
    console.log("_user", _user);

    const user_info = {
      user_name: _user.nick,
      user_profile: _user.user_profile,
    };

    const _post = {
      ...initialState,

      insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
    };

    const posts = {
      user_info,
      ...initialState,

      insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
    };

    let post = {
      ...initialState,
      list: {
        user_info: {
          user_name: _user.nick,
          user_profile: _user.user_profile,
        },
        id: `${_user.email}${_post.insert_dt}`,
        image_url:
          "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",

        insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
        like_cnt: 10,
        comment_cnt: 10,
        is_like: false,
        is_me: false,
        //post_id:
        comment: comment_text,
      },
    };

    dispatch(addComment(post_id, comment_text));
  };
};
// const initialComment = {
//   user_info: {
//     id: 0,
//     user_name: "wish",
//     user_profile:
//       "https://images.unsplash.com/photo-1540331547168-8b63109225b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=719&q=80",
//   },
//   comment: "",
//   insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
// };

//미들웨어 함수
//댓글 불러오기
const getCommentListDB = () => {
  return (dispatch) => {
    apis
      .getComment()
      .then((res) => {
        console.log(res);
        console.log(res.data);
        const commentList = res.data.comment;
        dispatch(setComment(commentList));
      })
      .catch((error) => {
        window.alert("댓글을 불러오는데 실패하였습니다.");
        console.error(error);
      });
  };
};

//댓글작성
const addCommentDB = (comment, _id) => {
  apis
    .addComment(
      {
        _id: _id,
        comment: comment,
      },
      { withCredentials: true }
    )
    .then((response) => {
      window.alert(response.data.msg);
    });
};

// const postComment = (comment, user_id) => {
//   if (user_id === getCookie("user")) {
//     window.alert("본인의 글에는 댓글을 작성할 수 없습니다.");
//     return;
//   }

//   axios
//     .post(
//       config.api + "/api/comment",
//       {
//         user_id: user_id,
//         contents: comment,
//       },
//       { withCredentials: true }
//     )
//     .then((response) => {
//       window.alert(response.data.msg);
//     });
// };

// const deleteCommentDB = (comment_id) => {
//   console.log(comment_id);
//   axios
//     .delete(config.api + "/api/comment/" + comment_id, {
//       withCredentials: true,
//     })
//     .then((response) => {
//       window.alert(response.data.msg);
//       document.location.reload();
//     });
// };

// const getCommentFB = (post_id) => {
//   return function (dispatch, getState, { history }) {};
// };

//리듀서만들기

export default handleActions(
  {
    [SET_COMMENT]: (state, action) => produce(state, (draft) => {}),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        console.log("여기 action", action);
        console.log("여기 state", state);
        console.log("이것은 draft", draft);

        draft.list.unshift(action.payload.comment);
      }),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = action.payload.is_loading;
      }),
  },
  initialState
);

//actionCreators 내보내기
const actionCreators = {
  setComment,
  addComments,
  addCommentDB,
  getCommentListDB,
};

export { actionCreators };
