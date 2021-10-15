import React, { useEffect } from "react";
import { Grid, Input, Button } from "../elements";

import { actionCreators as commentActions } from "../redux/modules/comment";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";

const CommentWrite = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [comment_text, setCommentText] = React.useState();

  const post_id = location.pathname.split("/")[2];

  //comment list 가져오기
  //const comment = useSelector((state) => state.comment.list);

  // useEffect(() => {
  //   dispatch(postCreators.getPostMiddleware());
  // }, []);

  const onChange = (e) => {
    setCommentText(e.target.value);
  };

  const write = () => {
    const comment = {
      comment_text,
      post_id,
    };

    dispatch(commentActions.addCommentDB(comment));
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
