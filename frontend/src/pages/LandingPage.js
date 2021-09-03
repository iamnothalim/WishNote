import React from "react";
import { withRouter } from "react-router";
import HeaderContainer from "../containers/common/HeaderContainer";
import MainContainer from "../containers/common/MainContainer";

function LandingPage() {

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
        <MainContainer/>
      </div>
    </>
  );
}

export default withRouter(LandingPage);
