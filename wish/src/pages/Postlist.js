import React from "react";
import Post from "../components/Post";
import { Grid } from "../elements";
import styled from "styled-components";
import { useSelector } from "react-redux";

const PostList = (props) => {
    const post_list = useSelector((state) => state.post.list);
    console.log(post_list);
    return (
        <Grid>
            <GridWrap>
            {post_list.map((p,idx) => {
                    return <PostGrid><Post key={p.id} {...p}/></PostGrid>
                })}
            </GridWrap>
        </Grid>
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
