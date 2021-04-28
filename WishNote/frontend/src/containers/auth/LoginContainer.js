import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../_actions/user_action";
import { withRouter } from "react-router-dom";
import LoginComponent from "../../components/auth/LoginComponent";

const LoginContainer = (props) => {
  const dispatch = useDispatch();
  // const [Username, setUsername] = useState('');
  // const [Password, setPassword] = useState('');
  // const onUsernameHandler = (e) =>{
  //     setUsername(e.currentTarget.value)
  // }
  // const onPasswordHandler = (e) =>{
  //     setPassword(e.currentTarget.value)
  // }
  const onSubmitHandler = (values) => {
    //e.preventDefault();

    let body = {
      id: values.Id,
      password: values.Password,
    };
    console.log("요거시 로그인이다", body);
    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        props.history.push("/");
      } else {
        alert("Error");
      }
    });
  };

  return (
    <LoginComponent
      onSubmitHandler={onSubmitHandler}
      // onUsernameHandler={onUsernameHandler}
      // onPasswordHandler={onPasswordHandler}
      // Username={Username}
      //Password={Password}
    />
  );
};

export default withRouter(LoginContainer);
