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
import PostList from "../pages/PostList";
import PostDetail from "../pages/PostDetail";
import Noti from "../pages/Noti";
import CommentList from "../components/CommentList";

function App() {
  return (
    <React.Fragment>
      <Grid>
        <Header></Header>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" exact component={PostList}></Route>
            <Route path="/write" exact component={PostWrite}></Route>
            <Route path="/post/:id" exact component={PostDetail} />
            <Route path="/" exact component={PostWrite}></Route>
            <Route path="/mypage" exact component={Mypage}></Route>
            <Route path="/noti" exact component={Noti}></Route>
            <Route path="/detail" exact component={PostDetail}></Route>
          </Switch>
        </ConnectedRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;
