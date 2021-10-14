import React from "react";
import { Grid, Text, Button } from "../elements";
import Logo from "../shared/img/logo2.png"
import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LogoutIcon from '@mui/icons-material/Logout';
// useSelector는 store에 있는 값을 가져와서 사용할수 있도록 해주는 친구이다.
import { useSelector, useDispatch } from "react-redux";

import { history } from "../redux/configureStore";

const Header = (props) => {
  // const dispatch = useDispatch();

  const is_login = useSelector((state) => state.user.is_login);
  console.log(is_login)

  // const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;

  // const is_session = sessionStorage.getItem(_session_key) ? true : false;

  // console.log(is_session);

  // is_login이 true일때만 반환
  // if (is_login && is_session) {
  //   return (

  //   );
  // }

  // if (is_login && is_session) {
  //   return (
  //     <React.Fragment>
  //       <Grid is_flex padding="4px 16px">
  //         <Grid>
  //           <Text
  //             margin="0px"
  //             size="24px"
  //             bold
  //             _onClick={() => {
  //               history.push("/");
  //             }}
  //           >
  //             Bumstagram
  //           </Text>
  //         </Grid>

  //         <Grid is_flex>
  //           <NotiBadge
  //             _onClick={() => {
  //               history.push("/noti");
  //             }}
  //           />
  //           <Button text="내정보"></Button>
  //           <Button
  //             text="로그아웃"
  //             _onClick={() => {
  //               dispatch(userActions.logoutFB());
  //             }}
  //           ></Button>
  //         </Grid>
  //       </Grid>
  //     </React.Fragment>
  //   );
  // }
   if (is_login) {
    return (
      <React.Fragment>
      <Grid is_flex>
        <addLogo>
          <img src={Logo} style={{width: "30%"}} />
        </addLogo>
        <Grid>
          <AccountCircleIcon sx={{ fontSize: 40 }}
            onClick={() => {
              history.push("/mypage");
            }}
          ></AccountCircleIcon>
          <NotificationsActiveIcon sx={{ fontSize: 40 }}
            onClick={() => {
              history.push("/noti");
            }}
          ></NotificationsActiveIcon>
          <LogoutIcon sx={{ fontSize: 40 }}
            onClick={() => {
              history.push("/login");
            }}
          ></LogoutIcon>
        </Grid>
      </Grid>
    </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Grid is_flex >
        <addLogo>
          <img src={Logo} style={{width: "30%"}}/>
        </addLogo>
        <Grid is_flex>
          <Button
            text="로그인"
            _onClick={() => {
              history.push("/login");
            }}
          ></Button>
          <Button
            text="회원가입"
            _onClick={() => {
              history.push("/signup");
            }}
          ></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};


const addLogo = styled.a`
    display:block;
    width: 30px;
    height: 20px;
    cursor: pointer;
`;
export default Header;
