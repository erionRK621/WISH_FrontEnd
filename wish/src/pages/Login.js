import { SettingsPowerRounded } from "@material-ui/icons";
import React from "react";
import { Text, Button, Grid, Input } from "../elements/index";

// function characterCheck(obj) {
//   const regExp = /[ \{\}\[\]\/?,;:|\)*~`!^\-+┼<>\#$%&\'\"\\\(\=]/gi;

//   if (regExp.test(obj.value)) {
//     window.alert("특수문자는 입력하실 수 없습니다.");
//     obj.value = obj.value.substring(0, obj.value.length - 1); //입력받은 특수문자 한자리 지움
//   }
// }

const Login = () => {
  const [id, setId] = React.useState();
  const [pwd, setPwd] = React.useState();

  const login = () => {
    if (id === "" || pwd === "") {
      window.alert("아이디 혹은 비밀번호를 입력하여 주세요.");
      return;
    }
  };

  return (
    <React.Fragment>
      <Grid>
        <Text size="32px" bold>
          로그인
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="ID"
            placeholder="ID"
            _onChange={(e) => {
              setId(e.target.value);
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
            console.log("로그인 했어!");
            login();
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
