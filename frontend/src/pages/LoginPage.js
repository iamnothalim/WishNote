import React from "react";
import LoginContainer from "../containers/auth/LoginContainer";
import HeaderContainer from "../containers/common/HeaderContainer";

function LoginPage() {
  return (
    <>
      <HeaderContainer />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <LoginContainer />
      </div>
    </>
  );
}

export default LoginPage;
