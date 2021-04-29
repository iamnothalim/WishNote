import React from "react";
import MonthContainer from "../containers/common/MonthContainer";
//챌린지 현황
//import CurrentContainer from "../containers/common/CurrentContainer";
//획득습관
//import HabbitContainer from "../containers/common/HabbitContainer";

const MyPage = () => {
  return (
    <div>
      <MonthContainer />
    </div>
  );
};

export default MyPage;

// import React, { useEffect } from "react";
// import axios from "axios";
// import { withRouter } from "react-router";
// //import { useSelector } from "react-redux";

// function MyPage(props) {
//   console.log("마이페이지 렌더링 시작!");
//   const myData = () => {
//     axios.get("/api/myPage").then((response) => {
//       return response;
//     });
//   };
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItem: "center",
//         width: "100%",
//         height: "100vh",
//       }}
//     >
//       <h1>마이페이지</h1>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItem: "center",
//         }}
//       >
//         <div>월간 리포트{myData}</div>
//         <div>챌린지 현황</div>
//         <div>획득 습관</div>
//       </div>
//     </div>
//   );
// }

// export default withRouter(MyPage);
