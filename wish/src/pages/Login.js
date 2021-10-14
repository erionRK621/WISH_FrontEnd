import { SettingsPowerRounded } from "@material-ui/icons";
import React from "react";
import { Text, Button, Grid, Input } from "../elements/index";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState();
  const [pwd, setPwd] = React.useState();
  const user = useSelector((state) => state.user);
  console.log(
    "사용자",
    useSelector((state) => state.user)
  );

  const login = () => {
    if (email === "" || pwd === "") {
      window.alert("아이디 혹은 비밀번호를 입력하여 주세요.");
      return;
    }

    dispatch(userActions.loginDB(email, pwd));
  };

  function characterCheck(obj) {
    const regExp = /[ \{\}\[\]\/?,;:|\)*~`!^\-+┼<>\#$%&\'\"\\\(\=]/gi;

    if (regExp.test(obj.value)) {
      window.alert("특수문자는 입력하실 수 없습니다.");
      obj.value = obj.value.substring(0, obj.value.length - 1); //입력받은 특수문자 한자리 지움
    }
  }

  return (
    <React.Fragment>
      <Grid>
        <Text size="32px" bold>
          로그인
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="Email"
            placeholder="Email을 입력해 주세요."
            _onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="Password"
            type="password"
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </Grid>

        <Button
          text="로그인하기"
          _onClick={() => {
            login();
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
