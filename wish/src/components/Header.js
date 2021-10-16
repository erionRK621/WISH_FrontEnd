import React from "react";
import { Grid, Text } from "../elements";
import Logo from "../shared/img/logo2.png";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
// useSelector는 store에 있는 값을 가져와서 사용할수 있도록 해주는 친구이다.
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { history } from "../redux/configureStore";

const Header = (props) => {
  const dispatch = useDispatch();

  const is_login = useSelector((state) => state.user.is_login);

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
                history.push("/mypage");
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
        <ButtonGroup
          size="large"
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button
            style={{ backgroundColor: "#346aff" }}
            onClick={() => {
              history.push("/login");
            }}
          >
            LOGIN
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              history.push("/signup");
            }}
          >
            LOGOUT
          </Button>
        </ButtonGroup>
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
