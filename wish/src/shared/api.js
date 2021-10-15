import { Api } from "@mui/icons-material";
import instance from "../lib/axios";
import getToken from "./Token";

//const accessToken = document.cookie.split("=")[1];

//axios 의 인스턴스를 생성해서 API라는 변수에 담고 API를 반환
// baseURL을 미리 지정해줬기 때문에 함수의 첫 번째 인자에 들어가는 url은
// http://localhost:4000/ + 내가 작성한 url 즉 예시로
// getPost함수에서는 instance.get('http://localhost:4000/posts')로 요청을 보내게 됩니다.
// get과 delete의 경우 두 번째 인자에 데이터를 담아 보낼수 없기 때문에 서버에 데이터를 보낼경우 쿼리를 이용하여 보내주도록 합니다.
const token = getToken();

export const apis = {
  getPost: () => instance.get("/api/postings/"),
  // 게시물 불러오기
  createPost: (contents) => instance.post("/api/addpostings", contents),
  // 게시물 작성하기
  editPost: (id, contents) => instance.put(`/api/post/${id}`, contents),
  // 게시물 수정하기
  deletePost: (postingId) => instance.delete(`/api/postings/${postingId}`),
  // 게시물 삭제하기
  getComment: (post_id) => {
    return instance.get(`/api/postings/${post_id}/comments`);
  },
  // 댓글 불러오기  파라미터 이름은 중요하지않고 주소와 같기만 하면 됨
  addComment: (comment, post_id) =>
    instance.post(
      `/api/postings/${post_id}/comments`,
      { text: comment },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    ),

  // 댓글 등록하기
  deleteComment: (commentId) => instance.delete("/api/comment", commentId),

  // Signup(): () => instance.post("/signup")
  login: (params) => instance.post("/login", params),

  signup: (params) => instance.post("/signup", params),
};
