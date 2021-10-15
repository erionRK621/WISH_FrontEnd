import React from "react";
import { Grid, Text, Button, Image, Input } from "../elements";
import Upload from "../shared/Upload";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postEditAction } from "../redux/modules/post";

const PostEdit = (props) => {
  const dispatch = useDispatch(); 
  //게시글 수정작업을 위한 코드추가
  //포스트리스트값
  const post_list = useSelector((state) => state.post.list)
  const img = useSelector((state) => state.image.previewImage);
  const { history } = props;
  //포스트아이디값
  const post_id = props.match.params.id;
//   const is_edit = post_id ? true : false;
  console.log(post_list)
  console.log(post_id)
  const [contents, setContents] = React.useState("")
  const is_edit = post_id ? true : false;
  console.log(is_edit);
  let _post = is_edit ? post_list.find((p) => p._id === post_id) : null;
  
  
  React.useEffect(() => {
    if (is_edit && !_post) {
      console.log("포스트 정보가 없어요!");
      window.alert("포스트 정보가 없어요!")
      history.goBack();
      return;
    }
  }, []);
  console.log("포스트값", _post);
  console.log("이미지", _post.imageUrl);

  const changeContents = (e) => {
    setContents(e.target.value);
  };


  const editPost = () => {
    console.log(post_id)
    console.log(contents)
    console.log(img)
    dispatch(postEditAction.editPostDB(post_id, contents));
  };

  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text margin="0px" size="36px" bold>
          게시글 수정
        </Text>
        <Upload />
      </Grid>

      <Grid>
        <Grid padding="16px">
          <Text margin="0px" size="24px" bold>
            미리보기
          </Text>
        </Grid>
          <Image shape="rectangle" src={_post.imageUrl} />
        </Grid>

      <Grid padding="16px">
        <Input
          value={contents}
          _onChange={changeContents}
          label="게시글 내용"
          placeholder={_post.text}
          multiLine
        />
      </Grid>

      <Grid padding="16px">
        <Button text="게시글 수정" _onClick={editPost}></Button>
      </Grid>
    </React.Fragment>
  );
};

export default PostEdit;
