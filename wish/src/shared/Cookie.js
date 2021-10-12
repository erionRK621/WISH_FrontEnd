// exp = 5라는 뜻은 기본값을 미리 넣어주는 것이다.
// 쿠키에 저장하는 함수
const setCookie = (name, value, exp = 5) => {
  let date = new Date();
  // 날짜를 만들어줍니다.
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  // 저장!
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}`;
};

const deleteCookie = (name) => {
  // 만료일을 예전으로 설정해 쿠키를 지웁니다.
  let date = new Date("2020-01-01").toUTCString();
  console.log(date);
  document.cookie = name + "=; expires=" + date;
};

export { setCookie, deleteCookie };

