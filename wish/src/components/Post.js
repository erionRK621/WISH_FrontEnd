import React from 'react'
import {Grid, Text, Image, Button} from "../elements"
import styled from "styled-components";

const Post = (props) => {

    const  {image_url,user_profile,insert_dt} = props;
    return (
        <PostContainer>
            <Grid padding="16px" bg="#ffffff" margin="8px 0px">
                <Grid is_flex>
                    <div >
                        <Image shape="circle" src={user_profile} />
                        <Text bold>{props.user_info.user_name}</Text>
                    </div>
                    <div>                        
                        <Button width="20px">수정</Button>
                        <Button width="20px">삭제</Button>
                    </div>
                </Grid>
                <Grid is_flex>
                    <Image shape="rectangle" src={image_url} />
                </Grid>
                <Grid is_flex>
                    <Text>{props.content}</Text>
                    <Text>{props.insert_dt}</Text>
                </Grid>
                <Grid is_flex>
                    <Text>댓글{props.comment_cnt}개 모두 보기</Text>
                    <Text>{props.is_like}</Text>
                </Grid>
            
            </Grid>
        </PostContainer>
        
      );
}

Post.defaultProps = {
    user_info: {
        user_name: "위시",
        user_profile: "https://images.unsplash.com/photo-1540331547168-8b63109225b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=719&q=80",
    },
    image_url: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    content: "블라블라",
    insert_dt: 2021-10-11, 
    like_cnt: 10,
    comment_cnt : 10,
    is_like: false,
    is_me: false,
}
const PostContainer = styled.div`
  background-color: white;
  width: 60vw;
  max-width: 450px;
  justify-content: space-between;
  margin: auto;
  margin-top: 70px;
  margin-bottom: 30px;
  border-radius: 5px;
  padding-bottom : 20px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.12), 0 2px 5px rgba(0,0,0,0.24);
  /* @media (max-width: 750px){
    width: 80vw;
  }
  @media (max-width: 350px){
    width: 100vw;
  } */
`

const PostHeader = styled.div`
 justify-content: space-between;
`;

export default Post;
