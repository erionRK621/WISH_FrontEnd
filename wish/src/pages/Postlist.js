import React from 'react'
import Post from '../components/Post'
import { Grid } from '../elements'
import styled from 'styled-components'

const PostList = () => {
    return (
        <Grid>
            <GridWrap>
                <PostGrid><Post/></PostGrid>
                <PostGrid><Post/></PostGrid>
                <PostGrid><Post/></PostGrid>
                <PostGrid><Post/></PostGrid>
                <PostGrid><Post/></PostGrid>
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
