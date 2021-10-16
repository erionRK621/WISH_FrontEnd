import React from "react";
import { Grid, Button, Image, Text } from "../elements";
import Post from "../components/Post";
import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "moment";
import moment from "moment";
import { history } from "../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as deleteActions } from "../redux/modules/post";
import { actionCreators as onePostCreators } from "../redux/modules/post";

import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";

const PostDetail = (props) => {
  const dispatch = useDispatch();
  let post_id = props.match.params.id;
  const post_list = useSelector((state) => state.post.list);
  console.log(post_list);

  let _post = post_list.find((p) => p._id === post_id);

  // console.log(_post);
  // console.log(_post._id);
  // console.log(_post.authorName);
  // console.log(_post.text);
  // console.log(_post.imageUrl);

  // console.log(props);

  // console.log(post_list);

  const deletePost = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      dispatch(deleteActions.deletePostDB(post_id));
      window.alert("삭제되엇습니다.");
      history.replace("/");
    } else {
      return;
    }
  };

  const editPost = () => {
    history.push("/edit/" + post_id);
  };

  return (
    <>
      <div>
        <PostContainer>
          <Grid padding="16px" bg="#ffffff" margin="8px 0px">
            <Grid is_flex>
              <Profile>
                <Image shape="circle" src={props.user_profile} />
                <Text bold>{_post.authorName}</Text>
              </Profile>
              <Text>{_post.createdAt}</Text>
            </Grid>
            <Grid>
              <Image
                shape="rectangle"
                src={`http://3.35.235.79/${_post.imageUrl}`}
              />
            </Grid>
            <Grid is_flex>
              <Text>{_post.text}</Text>
              <FavoriteIcon />
            </Grid>
          </Grid>
        </PostContainer>
        <Grid is_flex>
          <Button text="수정" _onClick={editPost} />
          <Button text="삭제" _onClick={deletePost} />
        </Grid>
        <div style={{ textAlign: "center" }}>
          <CommentWrite />
          <CommentList />
        </div>
      </div>
    </>
  );
};

// Post.defaultProps = {
//   user_info: {
//     user_name: "위시",
//     user_profile:
//       "https://images.unsplash.com/photo-1540331547168-8b63109225b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=719&q=80",
//   },
//   image_url:
//     "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
//   content: "블라블라",
//   insert_dt: "2021-10-11 10:00:00",
//   like_cnt: 10,
//   comment_cnt: 10,
//   is_like: false,
//   is_me: false,
// };

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

export default PostDetail;
