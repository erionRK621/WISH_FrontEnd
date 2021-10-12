import React from "react";

import styled from "styled-components";
import { Image, Grid } from "../elements";

const Card = (props) => {
  const { image_url, user_name, post_id } = props;

  return (
    <Grid>
      <Grid is_flex margin="8px 0px" bg="#F0F6FF">
        <Grid width="auto" margin="0px 8px 0px 0px">
          <Image size={85} shape="square" src={image_url} />
        </Grid>
        <Grid>누구누구님이 게시글에 댓글을 남겼습니다 :)!</Grid>
      </Grid>
    </Grid>
  );
};

export default Card;
