import React, { useEffect } from "react";
import { Image, Text, Grid } from "../elements";
import { actionCreators as commentCreators } from "../redux/modules/comment";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { getCommentDB } from "../redux/modules/comment";
import { commentActions } from "../redux/modules/comment";

const CommentList = (props) => {
  const location = useLocation();
  const post_id = location.pathname.split("/")[2];
  const comment_list = useSelector((state) => state.comment.list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCommentDB(post_id));
  }, []);

  return (
    <React.Fragment>
      <Grid padding="16px">
        {comment_list.map((p, idx) => {
          return <CommentItem key={idx} {...p} />;
        })}
      </Grid>
    </React.Fragment>
  );
};

CommentList.defaultProps = {
  post_id: null,
};

export default CommentList;

const CommentItem = (props) => {
  const location = useLocation();

  console.log(props);

  //props에서 가져온거 넘겨주기
  const { user_profile, user_name, user_id, post_id, contents, insert_dt } =
    props;
  const dispatch = useDispatch();
  // const deleteComment = () => {
  //   dispatch(commentActions.deleteCommentMiddleware(commentId));
  // };

  console.log("코멘트 리스트에서 받아온 값", props);

  return (
    <Grid is_flex>
      <Grid is_flex width="auto">
        <Image shape="circle" />
        <Text bold>{props.authorName}</Text>
      </Grid>
      <Grid is_flex margin="0px 4px">
        <Text margin="0px">{props.text}</Text>
        <Text margin="0px">{props.createdAt}</Text>
      </Grid>
    </Grid>
  );
};

CommentItem.defaultProps = {
  user_profile: "",
  user_name: "nickname",
  user_id: "",
  post_id: 1,
  contents: "댓글 내용입니다….",
  insert_dt: "2021-01-01 19:00:00",
};
