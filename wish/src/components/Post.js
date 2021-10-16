import React from "react";
import { Grid, Text, Image, Button } from "../elements";
import "moment";
import moment from "moment";
import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import FavoriteIcon from "@mui/icons-material/Favorite";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as setLikeAction } from "../redux/modules/post";

import { history } from "../redux/configureStore";

const Post = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const comment_cnt = useSelector((state) => state.comment);
  const like = props.Like.length;
  console.log(comment_cnt);

  const is_login = user.is_login;
  console.log("포스트의 프롯브", props);
  console.log("포스트의 코멘트", props.Like);
  console.log("유저정보", user);
  const post_like_user = props.Like;
  const user_id = user._id;

  const like_result = post_like_user.find((e) => e._id === user_id);
  console.log("과연", like_result);

  // console.log(props.Like.length);

  // let _postingDate = props.createdAt.substr(0.10);
  // let postingDate = moment(_postingDate).format('YYYY년 MM월 DD일');

  const setLike = () => {
    dispatch(setLikeAction.LikeDB(props._id));
  };

  // const deletePost = () => {
  //   dispatch(deleteActions.deletePostDB(contents));
  // };

  return (
    <PostContainer>
      <Grid padding="16px" bg="#ffffff" margin="8px 0px">
        <Grid is_flex>
          <Profile>
            <Image shape="circle" src={props.user_profile} />
            <Text bold>{props.authorName}</Text>
          </Profile>
          <Text>{props.createdAt}</Text>
        </Grid>
        <Grid>
          <Image
            shape="rectangle"
            src={`http://3.35.235.79/${props.imageUrl}`}
            _onClick={() => {
              history.push(`/post/${props._id}`);
            }}
          />
        </Grid>
        <Grid is_flex>
          <Text>{props.text}</Text>
        </Grid>
        <Grid is_flex>
          <Text bold>댓글{props.comment_cnt}개 </Text>
          {is_login && like_result && (
            <FavoriteIcon
              style={{ color: "lightpink" }}
              onClick={setLike}
            ></FavoriteIcon>
          )}
          {is_login && !like_result && (
            <FavoriteBorderIcon
              onClick={setLike}
              style={{ color: "lightpink" }}
            ></FavoriteBorderIcon>
          )}
        </Grid>
        <Text>
          {" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span style={{ fontWeight: "bold" }}>좋아요 {like}개</span>
        </Text>
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