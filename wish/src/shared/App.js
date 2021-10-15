import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Button, Grid } from "../elements";
import { history } from "../redux/configureStore";
import PostWrite from "../pages/PostWrite";
import Mypage from "../pages/Mypage";
import Header from "../components/Header";
import PostList from "../pages/Postlist";
import PostDetail from "../pages/PostDetail";
import Noti from "../pages/Noti";
import CommentList from "../components/CommentList";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import getToken from "./Token";
import { actionCreators as userActions } from "../redux/modules/user";

function App() {
  const is_token = window.localStorage.getItem("token") ? false : false;
  const dispatch = useDispatch();

  // window.localStorage.removeItem("token"); 이건 로그아웃 할때

  // 토큰 큰따옴표 제거 함수 shared 안에 Token.js 에서 가져옵니다.

  // console.log("트루냐 펄스냐", is_token);

  React.useEffect(() => {
    if (is_token) {
      //유저 정보 받아오는 미들웨어 실행
      dispatch(userActions.getUserDB());
    }
  }, []);

  return (
    <React.Fragment>
      <Grid>
        <Header></Header>

        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" exact component={PostList}></Route>
            <Route path="/write" exact component={PostWrite}></Route>
            <Route path="/post/:id" exact component={PostDetail} />
            <Route path="/login" exact component={Login}></Route>
            <Route path="/signup" exact component={Signup}></Route>
            <Route path="/mypage" exact component={Mypage}></Route>
            <Route path="/noti" exact component={Noti}></Route>
            <Route path="/detail" exact component={PostDetail}></Route>
          </Switch>
        </ConnectedRouter>
        <Button
          is_float
          text="+"
          _onClick={() => {
            history.push("/write");
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
}

export default App;
