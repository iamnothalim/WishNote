import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/common/Header";
import { withRouter } from "react-router";
import { logoutUser } from "../../_actions/user_action";

const HeaderContainer = (props) => {
  const user = useSelector((state) => ({
    user: state.user.userData.id,
  }));

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logoutUser()).then((response) => {
      if (!response.payload.loginSuccess) {
        props.history.push("/login");
      } else {
        alert("로그아웃 하는데 실패 했습니다.");
      }
    });
  };
  return <Header user={user} onLogout={onLogout} />;
};

export default withRouter(HeaderContainer);
