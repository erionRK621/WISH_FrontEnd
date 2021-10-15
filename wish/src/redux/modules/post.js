import React from "react";
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import "moment";
import moment from "moment";
import axios from "axios";
import {apis} from '../../shared/api'
import instance from '../../lib/axios'
import getToken from "../../shared/Token";


// 액션타입생성(리듀서 작성시 재사용되기 때문에 액션타입을 지정하는것임)
const SET_POST = "SET_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";
const SET_PREVIEW = "SET_PREVIEW";
const LIKE_TOGGLE = "LIKE_TOGGLE";
const LOADING = "LOADING";

//액션생성함수
//타입이 SET_POST인 오브젝트를 반환해주는 액션으로
//const 무엇 = cratAction(타입, (어떤파라미터) => ({변경될파라미터}));
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const editPost = createAction(EDIT_POST, (post_id) => ({ post_id }));
const deletePost = createAction(DELETE_POST, (post_id) => ({ post_id }));
const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }));
//초기상태값
const initialState = {
  list: [],
};

//게시글하나에 들어가야할 기본내용
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


//미들웨어


//메인페이지 게시글 가져오기
const getPostDB = () => {
  return function (dispatch, getState, { history }) {
    apis
    .getPost()
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if(res.data.token){
          window.localStorage.setItem(
            "token",
            JSON.stringify(res.data.token)
          );
        }        
        dispatch(setPost(res.data));
      }).catch(err => {
        //요청이 정상적으로 안됬을때 수행
        console.log(err,"에러")
      })

  }
}

//게시글 DB에서 수정하기
const editPostDB = (post_id, ) => {
  return function (dispatch, getState, { history }) {
    console.log()

  }
}

//게시글 DB에서 삭제
const deletePostDB = (post_id) => {
  return function (dispatch, getState, { history }) {
    console.log(post_id)
    const token = getToken()
    console.log(token);
    axios
    .delete(
      `http://3.35.235.79/api/postings/${post_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
    )
    .then((res) => {
      console.log(res)
      dispatch(deletePost(post_id));
    }).catch((err) =>{
      console.log("삭제에러", err)
    })
  }
}


// 리듀서
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        // undifined는 값이 잘넘어가고있다. 값이 나올경우 어딘가에 문제가 있는것
        console.log(action.payload.postings);
        draft.list = action.payload.post_list.postings

        // 새배열에서 푸시를 하게되면 데이터 중복으로 계속 불러와지게됨.
        // draft.list.push(...action.payload.post_list.postings);

        // draft.list = draft.list.reduce((acc, cur) => {
        //   if (acc.findIndex((a) => a.id === cur.id) === -1) {
        //     return [...acc, cur];
        //   } else {
        //     acc[acc.findIndex((a) => a.id === cur.id)] = cur;
        //     return acc;
        //   }
        // }, []);

        // 페이징도 넣어줍니다.
        // if (action.payload.paging) {
        //   draft.paging = action.payload.paging;
        // }
        // //payload안에는 필요한 state값을 담고있다.

        // draft.is_loading = false;
      }),

    [EDIT_POST]: (state, action) =>
      produce(state, (draft) => {
        // 배열의 몇 번째에 있는 지 찾습니다.
        let idx = draft.list.findIndex((p) => p.id === action.payload.post_id);

        // 해당 위치에 넣어줍니다.
        draft.list[idx] = { ...draft.list[idx], ...action.payload.post };
      }),
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
         // 받아온 id값과 맞지 않는 id의 데이터들을 새로운 배열에 넣어서 기존 list에 덮어쓰기
        let new_post_list = draft.list.filter((p) => {
          if(p.id !== action.payload.post){
            return p
          }
        })
// 새롭게 바뀐 리스트를 현재의 리스트로 변경
        draft.list = new_post_list; 
        

        
        
        // let idx = draft.list.findIndex((p) => p.id === action.payload.post_id);


        // if (idx !== -1) {
        //   // 배열에서 idx 위치의 요소 1개를 지움
        //   draft.list.splice(idx, 1);
        // }
      }),
  },
  initialState
);

const actionCreators = {
  setPost,
  editPost,
  deletePostDB,
  getPostDB,
};

export { actionCreators };
