import React from 'react'
import { Grid } from '../elements'
import Post from '../components/Post'
import styled from 'styled-components'

const PostDetail = () => {
    
    return (
        <>
            <div>
                <Post/>
                <div style={{textAlign:"center"}}>
                    <div>input / 작성버튼</div>
                    <div>userprofile/ usernick / comment / deletebutton</div>
                    <div>userprofile/ usernick / comment / deletebutton</div>
                    <div>userprofile/ usernick / comment / deletebutton</div>
                    <div>userprofile/ usernick / comment / deletebutton</div>
                </div>
            </div>
        </>
            
        
    )
}

Post.defaultProps = {
    user_info: {
        user_name: "위시",
        user_profile: "https://images.unsplash.com/photo-1540331547168-8b63109225b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=719&q=80",
    },
    image_url: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    content: "블라블라",
    insert_dt: "2021-10-11 10:00:00", 
    like_cnt: 10,
    comment_cnt : 10,
    is_like: false,
    is_me: false,
}



const PostContainer = styled.div`
  background-color: white;
  width: 60vw;
  max-width: 400px;
  margin: auto;
  margin-top: 70px;
  margin-bottom: 30px;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.12), 0 2px 5px rgba(0,0,0,0.24);
  @media (max-width: 750px){
    width: 80%;
  }
  @media (max-width: 450px){
    width: 100%;
`
export default PostDetail
