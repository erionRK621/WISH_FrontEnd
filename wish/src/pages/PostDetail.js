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
  const post_list = useSelector((state) => state.post.list)
  const user_id = useSelector((state) => state.user._id)
  console.log(post_list);
  console.log(user_id);


  let _post = post_list.find((p) => p._id === post_id);
  console.log(_post.authorID);
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
  console.log(user_id)
  console.log(_post.authorID)
  if(user_id == _post.authorID) {
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
            <p>{_post.text}</p>
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
    )
  } else {
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
          <FavoriteIcon/>
        </Grid>
      </Grid>
    </PostContainer>
    {/* {user_id == _post.authorName &&} */}
        <div style={{ textAlign: "center" }}>
          <CommentWrite />
          <CommentList />
        </div>
      </div>
    </>
      );
  }
  
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

export default PostDetail;
