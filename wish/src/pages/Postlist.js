import React, { useEffect } from 'react';
import Post from "../components/Post";
import Banner from "../shared/img/wish1.jpg"
import { Button, Grid,Image } from "../elements";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postCreators  } from '../redux/modules/post'


const PostList = (props) => {
    const dispatch = useDispatch();
    const {history} = props;
    const post_list = useSelector((state) => state.postWrite.list);

    useEffect(() => {
      dispatch(postCreators.getPostDB());
    }, []);

    console.log(post_list);
    return (
      <>
      <Image shape="main" src={Banner} style={{ position: "absolute" }} />
        <Grid>
            <GridWrap>
            {post_list.map((p,idx) => {
                    return <Grid
                    key={p.id}
                    _onClick={() => {
                      history.push(`/post/${p.id}`);
                    }}
                    ><Post key={p.id} {...p}/></Grid>
                })}
               
            </GridWrap>
        </Grid>
        </>
    )
}


const GridWrap = styled.div`
  max-width: 1300px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 40px;
`;

const PostGrid = styled.div`
  min-width: 250px;
`;


export default PostList
