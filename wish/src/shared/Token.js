const getToken = () => {
  const token = window.localStorage.getItem("token");
  const realToken = token.replace(/\"/gi, "");
  //   console.log("토큰값", realToken);
};

export default getToken;
