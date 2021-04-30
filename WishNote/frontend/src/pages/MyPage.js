import React from "react";
import MonthContainer from "../containers/common/MonthContainer";
import Radar from "../components/common/Habbit";
//챌린지 현황
//import CurrentContainer from "../containers/common/CurrentContainer";
//획득습관
//import HabbitContainer from "../containers/common/HabbitContainer";

let data = [
  {
    taste: "fruity",
    chardonay: 102,
    carmenere: 70,
    syrah: 38,
  },
  {
    taste: "bitter",
    chardonay: 28,
    carmenere: 111,
    syrah: 22,
  },
  {
    taste: "heavy",
    chardonay: 70,
    carmenere: 66,
    syrah: 45,
  },
  {
    taste: "sunny",
    chardonay: 98,
    carmenere: 59,
    syrah: 93,
  },
];

const MyPage = () => {
  return (
    <div>
      <MonthContainer />
      <Radar />
    </div>
  );
};

export default MyPage;

// import React,  { useEffect } from "react";
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
