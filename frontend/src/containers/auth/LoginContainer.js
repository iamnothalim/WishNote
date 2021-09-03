import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../_actions/user_action";
import { withRouter } from "react-router-dom";
import LoginComponent from "../../components/auth/LoginComponent";

const LoginContainer = (props) => {
  const dispatch = useDispatch();
  const onSubmitHandler = (values) => {

    let body = {
      id: values.Id,
      password: values.Password,
    };
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
    />
  );
};

export default withRouter(LoginContainer);
