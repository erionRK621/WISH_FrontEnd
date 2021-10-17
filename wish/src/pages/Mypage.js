import React, { useEffect } from "react";
import styled from "styled-components";
import { Grid, Image, Text, Button } from "../elements";

import { useLocation } from "react-router";
import { history } from "../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postCreators } from "../redux/modules/mypage";

const Mypage = (props) => {
  const location = useLocation();
  const id = location.pathname.split("/")[3];
  const dispatch = useDispatch();
  const { history } = props;
  //포스트리스트값 불러오기
  const post_list = useSelector((state) => state.post.list);
  const img = useSelector((state) => state.image);
  console.log(post_list);

  useEffect(() => {
    dispatch(postCreators.getPostsDB(id));
  }, []);

  return (
    <Grid>
      <Grid is_flex padding="20px" backgroundColor="#e6f3f7">
        <Image shape="circle" size={85}></Image>
        <Text bold size="20px">
          {}
        </Text>
        <Text bold size="20px">
          {}개
        </Text>
      </Grid>
      <GridWrap>
        <PostGrid>
          {post_list.map((p, idx) => {
            return <MyPostImg key={idx} {...p} />;
          })}
        </PostGrid>
      </GridWrap>
    </Grid>
  );
};

const MyPostImg = (props) => {
  console.log(props);
  const { post_id, image_url } = props;

  return (
    <>
      <Image
        shape="rectangle"
        src={image_url}
        onClick={() => {
          history.push(`/api/postings/${post_id}`);
        }}
      />
    </>
  );
};

const GridWrap = styled.div`
  max-width: 1300px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1em;
`;

const PostGrid = styled.div`
  min-width: 250px;
`;

export default Mypage;
