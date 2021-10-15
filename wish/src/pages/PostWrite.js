import React from "react";
import { Grid, Text, Button, Image, Input } from "../elements";
import Upload from "../shared/Upload";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postWriteAction } from "../redux/modules/postWrite";

const PostWrite = (props) => {
  const dispatch = useDispatch();
  const [contents, setContents] = React.useState("")

  console.log(useSelector((state) => state.user));

  const img = useSelector((state) => state.image.previewImage);

  console.log(
    "포스트",
    useSelector((state) => state.postWrite)
  );

  console.log("타입", typeof img);

  const changeContents = (e) => {
    setContents(e.target.value);
  };

  const addPost = () => {
    dispatch(postWriteAction.addPosts(contents, img));
  };

  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text margin="0px" size="36px" bold>
          게시글 작성
        </Text>
        <Upload />
      </Grid>

      <Grid>
        <Grid padding="16px">
          <Text margin="0px" size="24px" bold>
            미리보기
          </Text>
        </Grid>
        {img ? (
          <Image shape="rectangle" src={img} />
        ) : (
          <Image shape="rectangle" src={"http://via.placeholder.com/400x300"} />
        )}
      </Grid>

      <Grid padding="16px">
        <Input
          value={contents}
          _onChange={changeContents}
          label="게시글 내용"
          placeholder="게시글 작성"
          multiLine
        />
      </Grid>

      <Grid padding="16px">
        <Button text="게시글 작성" _onClick={addPost}></Button>
      </Grid>
    </React.Fragment>
  );
};

export default PostWrite;
