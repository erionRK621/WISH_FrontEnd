import React from 'react';
import styled from 'styled-components'
import { BrowserRouter, Route } from 'react-router-dom';
import  PostList from './pages/PostLIst'
import PostDetail from './pages/PostDetail';
function App() {

 return (
    <>
    <BrowserRouter>
      <Route path='/' exact component={PostList}/>
      <Route path="/post/:id" exact component={PostDetail}/>
    </BrowserRouter>
    </>
  );

}

export default App;
