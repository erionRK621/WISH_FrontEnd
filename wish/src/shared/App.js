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
import Header from "../components/Header";
import PostList from "../pages/PostList"
import PostDetail from "../pages/PostDetail";

function App() {
  return (
    <React.Fragment>
      <Grid>
        <Header></Header>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" exact component={PostList}></Route>
            <Route path="/write" exact component={PostWrite}></Route>
            <Route path="/post/:id" exact component={PostDetail}/>
          </Switch>
        </ConnectedRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;
