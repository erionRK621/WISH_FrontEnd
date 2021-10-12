import React from 'react'
import Post from '../components/Post'
import { Grid } from '../elements'
import styled from 'styled-components'

const PostList = () => {
    return (
        <Warp>
            <Grid>
                <Post/>
            </Grid>
            <Grid>
                <Post/>
            </Grid>
            <Grid>
                <Post/>
            </Grid>
            <Grid>
                <Post/>
            </Grid>
            <Grid>
                <Post/>
            </Grid>
            <Grid>
                <Post/>
            </Grid>
        </Warp>
    )
}

const Warp = styled.div`
max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
`;

export default PostList
