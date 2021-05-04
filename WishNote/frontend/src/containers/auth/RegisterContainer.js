import React from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../_actions/user_action";
import { withRouter } from "react-router-dom";
import RegisterComponent from "../../components/auth/RegisterComponent";

const RegisterContainer = (props) => {
    const dispatch = useDispatch();
    const onSubmitHandler= (values) => {
        let body = {
            nickname: values.Nickname,
            password: values.Password,
            name:values.Name,
            id:values.Id,
        };
        dispatch(registerUser(body)).then((response) => {
            if (response.payload.success) {
                alert(response.payload.msg);
                props.history.push("/login");
            } else {
                alert(response.payload.msg);
            }
        });
    };
    console.log("여기 들어왔나?");
    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) {
        props.history.push("/login");
      } else {
        alert("failed to sign up");
      }
    });
  };
  return <RegisterComponent onSubmitHandler={onSubmitHandler} />;
};

export default withRouter(RegisterContainer);
