import React, { useEffect } from "react";
import { Image, Text, Grid } from "../elements";
import { actionCreators as commentCreators } from "../redux/modules/comment";
import { useSelector, useDispatch } from "react-redux";

import { useLocation } from 'react-router';

const CommentList = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const post_id = location.pathname.split("/")[2];
  const comment_list = useSelector((state) => state.comment.list);
  
  useEffect(() => {
    dispatch(commentCreators.getCommentListDB(post_id));
  }, []);
  console.log("renders")


  console.log(props);

  return (
    <React.Fragment>
      <Grid padding="16px">
        <comment_list />
      </Grid>
    </React.Fragment>
  );
};

CommentList.defaultProps = {
  post_id: null,
};

export default CommentList;


// const CommentItem = (props) => {
//   const dispatch = useDispatch();
//   const { user_profile, user_name, user_id, post_id, contents, insert_dt } =
//     props;

//   useEffect(() => {
//     dispatch(commentCreators.getCommentListDB());
//   }, []);
//   return (
//     <Grid is_flex>
//       <Grid is_flex width="auto">
//         <Image shape="circle" />
//         <Text bold>{user_name}</Text>
//       </Grid>
//       <Grid is_flex margin="0px 4px">
//         <Text margin="0px">{contents}</Text>
//         <Text margin="0px">{insert_dt}</Text>
//       </Grid>
//     </Grid>
//   );
// };


// CommentItem.defaultProps = {
//   user_profile: "",
//   user_name: "nickname",
//   user_id: "",
//   post_id: 1,
//   contents: "댓글 내용입니다....",
//   insert_dt: "2021-01-01 19:00:00",
// };
