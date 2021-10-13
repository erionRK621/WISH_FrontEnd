import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/api";
//import { getCookie } from "../../shared/Cookie";

//axios
import moment from "moment";
//쿠키

//액션타입만들기
const LOAD_COMMENT = "LOAD_COMMENT";

//액션생성함수만들기
const loadComment = createAction(LOAD_COMMENT, (list) => ({
  list,
}));

//initialState 만들기
const initialState = {
  list: [],
};

const initialComment = {
  postId: "postId",
  comment: "블라블라",
  image:
    "https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_301/3-4-3.jpg",
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
  },
  initialState
);

//actionCreators 내보내기
const actionCreators = {
  getCommentList,
};

export { actionCreators };
