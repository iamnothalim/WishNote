import React from "react";
//import axios from "axios";
import { withRouter } from "react-router";
//import { useSelector } from "react-redux";
import HeaderContainer from "../containers/common/HeaderContainer";
import MainContainer from "../containers/common/MainContainer";
import PointContainer from "../containers/point/PointContainer";

function LandingPage() {
  // const testData = useSelector((state) => state.user);
  // console.log("요게 테스트 데이타", testData);

  //console.log(testData.loginSuccess.loginSuccess)
  // const onLogout = () => {
  //     axios.get("/api/auth/logout").then((response) => {
  //         if (response.data.success) {
  //             props.history.push("/login");
  //         } else {
  //             alert("로그아웃 하는데 실패 했습니다.");
  //         }
  //     });
  // };

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
        {/* <h2>시작 페이지</h2> */}
      </div>
    </>
  );
}

export default withRouter(LandingPage);
