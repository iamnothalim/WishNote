import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Month from "../../components/common/Month";
import axios from "axios";
import { withRouter } from "react-router";
import { auth } from "../../_actions/user_action";
import { Calendar, Badge } from "antd";

/////////////////////////
/*
넣어야 할 데이터 : 
1. 며칠인지 -> case
2. 피드 챌린지 유형 뭔지 -> type
3. 피드 챌린지 명 뭔지 -> content
*/
/////////////////////////

const MonthContainer = (props) => {
  // const feedCategory = useSelector((state) => ({
  //   feedCategory: state.user.userData.user.feedData.feedCategory,
  // }));

  // const feedCreatedAt = useSelector((state) => ({
  //   data: state.user.userData.user.feedData.feedCreatedAt,
  // }));
  // console.log("와다닫댕", feedCreatedAt);

  function GetListData(value) {
    const dispatch = useDispatch();
    const [feedCategory, setFeedCategory] = useState("");
    const [feedCreatedAt, setFeedCreatedAt] = useState("");

    useEffect(() => {
      dispatch(auth()).then((response) => {
        setFeedCategory(response.payload.feedData.feedCategory);
        setFeedCreatedAt(response.payload.feedData.feedCreatedAt);
      });
    }, []);
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
    const listData = GetListData(value);
    console.log(listData);
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

  function getMonthData(value) {
    if (value.month() === 8) {
      return 1394;
    }
  }

  function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }

  return (
    <Calendar
      dateCellRender={dateCellRender}
      monthCellRender={monthCellRender}
    />
  );
};

export default withRouter(MonthContainer);
