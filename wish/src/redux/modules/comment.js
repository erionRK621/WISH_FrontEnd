import React from "react";
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/api";

//axios
import moment from "moment";
//쿠키

//액션타입만들기
const GET_COMMENT = "GET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

//액션생성함수만들기
const getComment = createAction(GET_COMMENT, (comment_list) => ({
  comment_list,
}));
const addComment = createAction(ADD_COMMENT, (comment) => ({
  comment,
}));
// const deleteComment = createAction(DELETE_COMMENT, (commentId) => ({
//   commentId,
// }));

//initialState 만들기
const initialState = {
  list: [],
  is_loading: false,
};

const getCommentDB = () => {
  return (dispatch) => {
    apis
      .getComment()
      .then((res) => {
        console.log(res);
        console.log(res.data);
        const commentList = res.data.comment;
        dispatch(getComment(commentList));
      })
      .catch((error) => {
        window.alert("댓글을 불러오는데 실패하였습니다.");
        console.error(error);
      });
  };
};

const addCommentDB = (_comment) => {
  return function (dispatch, getState, { history }) {
    // (commentUserId, commentDesc, postId)
    apis.addComment(_comment.comment_text, _comment.post_id).then((res) => {
      const comment = {
        ..._comment,
      };
      dispatch(addComment(comment));
    });
  };
};

// const deleteCommentDB = (commentId, commnetUserId) => {
//   return function (dispatch, getState, { history }) {
//     console.log(commnetUserId);
//     apis
//       .deleteComment(commentId, commnetUserId)
//       .then((res) => {
//         dispatch(deleteComment(commentId));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };

//리듀서
export default handleActions(
  {
    [GET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.comment_list;
      }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.comment);
      }),

    // [DELETE_COMMENT]: (state, action) =>
    //   produce(state, (draft) => {
    //     draft.list = draft.list.filter(
    //       (c) => c.id !== action.payload.commentId
    //     );
    //   }),
  },
  initialState
);

//actionCreators 내보내기
const actionCreators = {
  getCommentDB,
  addCommentDB,
};

export { actionCreators };
