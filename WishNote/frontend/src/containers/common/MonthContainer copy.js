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

async function getListData(value) {
  let listData;
  let today = moment();
  // console.log(today);
  // console.log(value);

  // const when = async () => {
  //   const res = await axios.get("/api/feed/feed");
  //   const data = res.data.data.map((data) => ({
  //     category: data.category,
  //     title: data.title,
  //   }));
  //   console.log("res", res);
  //   console.log("data", data);
  // };

  // const when = await axios.get("/api/feed/feed").then((response) => {
  //   console.log("response.data.data", response.data.data);
  //   return response.data.data;
  // });
  // const category = when[0].category;
  // console.log("category", category);
  switch (value.date()) {
    case 1:
      listData = [
        { type: "warning", content: "This is warning event." },
        { type: "success", content: "This is usual event." },
      ];
      break;
    case 2:
      listData = [
        { type: "warning", content: "This is warning event." },
        { type: "success", content: "This is usual event." },
        { type: "error", content: "This is error event." },
      ];
      break;
    case 3:
      listData = [
        { type: "warning", content: "This is warning event" },
        { type: "success", content: "This is very long usual event." },
        { type: "error", content: "This is error event 1." },
      ];
      break;
    default:
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
  const dispatch = useDispatch();
  const user = useSelector((state) => ({
    nickname: state.user.userData.nickname,
  }));

  // const challenges = axios.get("api/myPage").then((response) => {
  //   return response.data.challengeData;
  // });

  return (
    <div>
      <Month user={user} />
      <Calendar
        dateCellRender={dateCellRender}
        // monthCellRender={monthCellRender}
      />
    </div>
  );
};

export default withRouter(MonthContainer);

/*
  const profile = (category) => {
    axios.get(`/api/myPage/${category}`).then((response) => {
      console.log("props 가 뭔지 궁금", props);
      console.log("response", response);
    });
  };
*/
