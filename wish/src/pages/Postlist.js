import React, { useEffect } from "react";
import Post from "../components/Post";
import Banner from "../shared/img/wish1.jpg";
import { Button, Grid, Image } from "../elements";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postCreators } from "../redux/modules/post";

const PostList = (props) => {

    const dispatch = useDispatch();
    const {history} = props;
    const post_list = useSelector((state) => state.post.list);
    // const user_info = useSelector((state) => state.user);
    
    // console.log(user_info);

    useEffect(() => {
      dispatch(postCreators.getPostDB());
    }, []);
    console.log("render")

    console.log(post_list);
    return (
      <>
      <Image shape="main" src={Banner} style={{ position: "absolute" }} />
        <Grid>
          
            <GridWrap>
            {post_list.map((p,idx) => {
                    return <Grid
                    key={idx}
                    _onClick={() => {
                      history.push(`/post/${p._id}`);
                    }}
                    ><Post key={idx} {...p}/></Grid>
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

export default PostList;
