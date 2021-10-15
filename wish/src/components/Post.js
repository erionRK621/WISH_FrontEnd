import React from "react";
import { Grid, Text, Image, Button } from "../elements";
import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as setLikeAction } from "../redux/modules/comment";

const Post = (props) => {
  const dispatch = useDispatch();
  const { image_url, user_profile, insert_dt } = props;
  const post_list = useSelector((state) => state.post.list);
  // let post_id = props.match.params.id;
  console.log(post_list);

  const setLike = () => {
    dispatch(setLikeAction.LikeDB());
  };



  // const deletePost = () => {
  //   dispatch(deleteActions.deletePostDB(contents));
  // };
  

  return (
    <PostContainer>
      <Grid padding="16px" bg="#ffffff" margin="8px 0px">
        <Grid is_flex>
          <Profile>
            <Image shape="circle" src={user_profile} />
            <Text bold>{props.authorName}</Text>
          </Profile>
          
        </Grid>
        <Grid>
          <Image shape="rectangle" src={`http://3.35.235.79/${props.imageUrl}`} />
        </Grid>
        <Grid is_flex>
          <Text>{props.text}</Text>
          <Text>{props.createdAt}</Text>
        </Grid>
        <Grid is_flex>
          <Text bold>댓글{props.comment_cnt}개 모두보기</Text>
          <FavoriteBorderIcon onClick={setLike} ></FavoriteBorderIcon>
        </Grid>
      </Grid>
    </PostContainer>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "위시",
    user_profile:
      "https://images.unsplash.com/photo-1540331547168-8b63109225b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=719&q=80",
  },
  image_url:
    "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
  content: "블라블라",
  insert_dt: "2021-10-11 10:00:00",
  like_cnt: 10,
  comment_cnt: 10,
  is_like: false,
  is_me: false,
};
const PostContainer = styled.div`
  background-color: white;
  width: 60vw;
  max-width: 350px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 2px 5px rgba(0, 0, 0, 0.24);
  @media (max-width: 750px) {
    width: 100%;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;

const Profile = styled.div`
  display: flex;
`;

export default Post;
