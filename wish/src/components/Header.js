import React from "react";
import { Grid, Text, Button } from "../elements";
import Logo from "../shared/img/logo2.png";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import LogoutIcon from "@mui/icons-material/Logout";
// useSelector는 store에 있는 값을 가져와서 사용할수 있도록 해주는 친구이다.
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { history } from "../redux/configureStore";

const Header = (props) => {
  const dispatch = useDispatch();

  const is_login = useSelector((state) => state.user.is_login);
  const userid = useSelector((state) => state.user.email);
  console.log(userid);

  const logout = () => {
    dispatch(userActions.logOut());
  };

  if (is_login) {
    return (
      <React.Fragment>
        <Grid is_flex>
          <addLogo>
            <img
              src={Logo}
              style={{ width: "25%" }}
              onClick={() => {
                history.push("/");
              }}
            />
          </addLogo>
          <div>
            <AccountCircleIcon
              sx={{ fontSize: 40 }}
              onClick={() => {
                history.push("/api/users/${userid}`");
              }}
            ></AccountCircleIcon>
            <NotificationsActiveIcon
              sx={{ fontSize: 40 }}
              onClick={() => {
                history.push("/noti");
              }}
            ></NotificationsActiveIcon>
            <LogoutIcon
              sx={{ fontSize: 40 }}
              onClick={() => {
                history.push("/login");
                window.localStorage.removeItem("token");
                logout();
              }}
            ></LogoutIcon>
          </div>
        </Grid>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Grid is_flex>
        <addLogo>
          <img
            src={Logo}
            style={{ width: "30%" }}
            onClick={() => {
              history.push("/");
            }}
          />
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
  display: block;
  width: 30px;
  height: 20px;
  cursor: pointer;
`;
export default Header;
