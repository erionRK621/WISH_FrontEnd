import React from 'react'

const Post = (props) => {
    return (
        <>
         <div>
             <div>userprofile/ usernick / editbutton / deletebutton</div>
             <div>Image</div>
             <div>{}님 외 10명이 좋아합니다/ insert_dt</div>
             <div>text</div>
             <div>댓글 {}개 모두보기 / 하트버튼</div>
         </div>
        </>
    )
}

// Post.defaultProps = {
//     user_info: {
//         user_name: "위시",
//         user_profile: "https://images.unsplash.com/photo-1540331547168-8b63109225b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=719&q=80",
//     },
//     image_url: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
//     comment_user_name : "워시",
//     content: "블라블라",
//     insert_dt: 2021-10-11 
//     like_cnt: 10,
//     is_like: false,
//     is_me: false,
// }

export default Post
