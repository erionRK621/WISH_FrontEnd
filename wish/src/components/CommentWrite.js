import React, { useEffect } from "react";
import { Grid, Input, Button } from "../elements";

import { actionCreators as commentActions } from "../redux/modules/comment";
import { useDispatch, useSelector } from "react-redux";

const CommentWrite = (props) => {
  const dispatch = useDispatch();
  const [comment_text, setCommentText] = React.useState();

  const { post_id } = props;
  console.log(post_id);
  //const comment = useSelector((state) => state.comment.list);

  // useEffect(() => {
  //   dispatch(postCreators.getPostMiddleware());
  // }, []);

  const onChange = (e) => {
    setCommentText(e.target.value);
  };

  //axios 만들고 addComments를 addCommentDB로 바꿔줌
  const write = () => {
    console.log(comment_text);
    dispatch(commentActions.addCommentDB(post_id, comment_text));
    setCommentText("");
  };
  return (
    <React.Fragment>
      <Grid padding="16px" is_flex>
        <Input
          placeholder="댓글 내용을 입력해주세요 :)"
          _onChange={onChange}
          value={comment_text}
          onSubmit={write}
          is_submit
        />
        <Button width="50px" margin="0px 2px 0px 2px" _onClick={write}>
          작성
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default CommentWrite;
