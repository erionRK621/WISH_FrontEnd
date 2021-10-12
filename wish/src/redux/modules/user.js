// 리덕스

// 1.import
// 첫째,createAction와 handleActions는 Action과 리듀서를 편하게 만들어준다.
import { createAction, handleActions } from "redux-actions";
// 둘째, immer를 가지고와야 불변성관리가 편하다.
import { produce } from "immer";
// 셋째, 쿠키를 가져온다.
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";

// 2. actions(액션타입)
// 첫째, 로그인 정보를 가지고 온다.
//const LOG_IN = "LOG_IN";
// 둘째, 로그아웃 정보를 가지고 온다.
const LOG_OUT = "LOG_OUT";
// 셋째, 유저정보를 가지고 온다.
const GET_USER = "GET_USER";
// 넷째, 유저정보를 가져온다.
const SET_USER = "SET_USER";

// 3. action creator(액션 생성 함수들)
// 첫째, createAction사용해서 LOG_IN타입을 넘겨준다. ()안에는 파라미터 값 즉 정보를 주고 user값을 넘겨준다.
//const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// 4. initialState(초기값)을 잡아준다.
const initialState = {
  user: null,
  is_login: false,
};

// 유저에 대한 intial을 만들어준다.
const user_intial = {
  nick: "nick",
  email: "email",
  password: "password",
  user_profile:
    "https://images.unsplash.com/photo-1540331547168-8b63109225b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=719&q=80",
};

const signup = (nick, email, password) => {
  return function (dispatch, getState, { history }) {
    dispatch(
      setUser({
        nick: nick,
        email: email,
        password: password,
      })
    );
    history.push("/write");
  };
};

// 5. reducer(리듀서)
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        console.log("여기", action);
        console.log("여기", action.payload.user);
        console.log("이것은 draft", draft);

        draft.nick = action.payload.user.nick;
        draft.email = action.payload.user.email;
        draft.password = action.payload.user.password;
        draft.user_profile = user_intial.user_profile;
      }),
    // [LOG_OUT]: (state, action) =>
    //   produce(state, (draft) => {
    //     deleteCookie("is_login");
    //     draft.user = null;
    //     draft.is_login = false;
    //   }),
    // [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  user_intial
);

// 6. action creator export
// 액션생성함수를 내보낸다.
const actionCreators = {
  signup,
};

export { actionCreators };
