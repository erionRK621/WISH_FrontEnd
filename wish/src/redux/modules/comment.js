import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/api";
//import { getCookie } from "../../shared/Cookie";

//axios
import moment from "moment";
//쿠키

//액션타입만들기
const LOAD_COMMENT = "LOAD_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";

//액션생성함수만들기
const loadComment = createAction(LOAD_COMMENT, (post_id, comment_list) => ({
  post_id,
  comment_list,
}));
const addComment = createAction(ADD_COMMENT, (post_id, comment) => ({
  post_id,
  comment,
}));

//initialState 만들기
const initialState = {
  list: {
    post_id: "post_id",
    comment: "블라블라",
    nickname: "닉네임",
  },
};

const initialComment = {
  post_id: "post_id",
  comment: "블라블라",
  nickname: "닉네임",
};

//미들웨어 함수
//댓글작성
const getCommentList = () => {
  return (dispatch) => {
    apis
      .getComment()
      .then((res) => {
        const commentList = res.data.comment;
        dispatch(loadComment(commentList));
      })
      .catch((error) => {
        window.alert("댓글을 불러오는데 실패하였습니다.");
        console.error(error);
      });
  };
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
    [LOAD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list;
      }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.post_id].unshift(action.payload.comment);
      }),
  },
  initialState
);

//actionCreators 내보내기
const actionCreators = {
  getCommentList,
  loadComment,
  addComment,
};

export { actionCreators };
