import React from "react";
import styled from "styled-components";
import { Grid, Image, Text, Button } from "../elements";

const Mypage = () => {
  return (
    <Grid >
      <Grid is_flex padding="20px" backgroundColor="#e6f3f7">
        <Image shape="circle" size={85}></Image>
        <Text bold size="20px">
          NICK NAME
        </Text>
        <Text bold size="20px">
          10개
        </Text>
      </Grid>
      <GridWrap>
        <PostGrid>
          <Image height="auto" shape="rectangle" />
        </PostGrid>
        <PostGrid>
          <Image shape="rectangle" />
        </PostGrid>
        <PostGrid>
          <Image shape="rectangle" />
        </PostGrid>
        <PostGrid>
          <Image shape="rectangle" />
        </PostGrid>
      </GridWrap>
    </Grid>
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
