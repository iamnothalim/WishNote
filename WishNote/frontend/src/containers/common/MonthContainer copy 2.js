import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Month from "../../components/common/Month";
//import Calendar from "../../components/antd/Calendar";
//import Calendar from "../../components/calendar";
import axios from "axios";
import { withRouter } from "react-router";
import { challengeMy } from "../../_actions/my_action";
import { Calendar, Badge } from "antd";
import moment from "moment";
/////////////////////////
/*
넣어야 할 데이터 : 
1. 며칠인지 -> case
2. 피드 챌린지 유형 뭔지 -> type
3. 피드 챌린지 명 뭔지 -> content
*/

// function FeedList() {
//   useEffect(async () => {
//     const res = await axios.get("/api/feed/feed/getFeeds");
//     const data = res.data.data.map((data) => ({
//       category: data.category,
//       userId: data.userId,
//     }));
//   });
//   setFeeds(feeds.concat(data));
// }

// function getListData(value) {
//   let listData;
//   console.log(value.format('YYYY-MM-DD'));
//   let today = moment();
//   switch (value.date()) {
//     case 8://2021-04-05
//       listData = [
//         { type: "warning", content: "This is warning event." },
//         { type: "success", content: "This is usual event." },
//       ];
//       break;
//     case 12:
//       listData = [
//         { type: "warning", content: "This is warning event." },
//         { type: "success", content: "This is usual event." },
//         { type: "error", content: "This is error event." },
//       ];
//       break;
//     case 13:
//       listData = [
//         { type: "warning", content: "This is warning event" },
//         { type: "success", content: "This is very long usual event." },
//         { type: "error", content: "This is error event 1." },
//       ];
//       break;
//     default:
//   }

//   return listData || [];
// }

// function dateCellRender(value) {
//   const listData = getListData(value);
//   // console.log("listData", listData);
//   return (
//     <ul className="events">
//       {listData.map((item) => (
//         <li key={item.content}>
//           <Badge status={item.type} text={item.content} />
//         </li>
//       ))}
//     </ul>
//   );
// }

// function getMonthData(value) {
//   if (value.month() === 8) {
//     return 1394;
//   }
// }

// function monthCellRender(value) {
//   const num = getMonthData(value);
//   return num ? (
//     <div className="notes-month">
//       <section>{num}</section>
//       <span>Backlog number</span>
//     </div>
//   ) : null;
// }
/////////////////////////
const MonthContainer = (props) => {
  // const dispatch = useDispatch();
  // const user = useSelector((state) => ({
  //   nickname: state.user.userData.nickname,
  // }));

  // const challenges = axios.get("api/myPage").then((response) => {
  //   return response.data.challengeData;
  // });
  const feedCategory = useSelector((state) => ({
    feedCategory: state.user.userData.feedData.feedCategory,
  }));

  const feedCreatedAt = useSelector((state) => ({
    data: state.user.userData.feedData.feedCreatedAt,
  }));
  console.log("와다닫댕", feedCreatedAt[0]);

  function getListData(value) {
    // const dispatch = useDispatch();
    // const [feedCategory, setFeedCategory] = useState("");
    // const [feedCreatedAt, setFeedCreatedAt] = useState("");

    // useEffect(() => {
    //   dispatch(auth()).then((response) => {
    //     setFeedCategory(response.payload.user.feedData.feedCategory);
    //     setFeedCreatedAt(response.payload.user.feedData.feedCreatedAt);
    //   });
    // }, []);
    ///////////
    let listData;
    // console.log("feedCategory", feedCategory);
    // console.log("feedCreatedAt", feedCreatedAt);
    switch (value.format("YYYY-MM-DD")) {
      case feedCreatedAt:
        listData = [{ type: "warning", content: feedCategory }];
        break;
      default:
        console.log("아무데도 들어가지 않는당");
    }
    return listData || [];
  }
  function dateCellRender(value) {
  const listData = getListData(value);
  // console.log("listData", listData);
  return (
    <ul className="events">
      {listData.map((item) => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}
  return (
    <div>
      {/* <Month user={user} /> */}
      <Calendar
        dateCellRender={dateCellRender}
        // monthCellRender={monthCellRender}
      />
    </div>
  );
};

export default withRouter(MonthContainer);
