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

const MonthContainer = () => {
  function GetListData(value) {
    const category = useSelector((state) => ({
      data: state.user.userData.feedData.feedCategory,
    }));
    const createdAt = useSelector((state) => ({
      data: state.user.userData.feedData.feedCreatedAt,
    }));
    const title = useSelector((state) => ({
      data: state.user.userData.feedData.feedTitle,
    }));
    const feedCategory = category.data;
    const feedCreatedAt = createdAt.data;
    const feedTitle = title.data;

    let listData;

    feedCreatedAt.forEach((el, index) => {
      switch (value.format("YYYY-MM-DD")) {
        case el:
          listData = [
            { type: "warning", content: feedCategory[index] },
            { type: "success", content: feedTitle[index] },
          ];
          break;
        default:
      }
    });
    return listData || [];
  }
  //////
  function dateCellRender(value) {
    let listData = GetListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          // <li key={item.content}>

          // </li>
          <Badge status={item.type} text={item.content} />
        ))}
      </ul>
    );
  }
  return <Calendar dateCellRender={dateCellRender} />;
};

export default MonthContainer;
