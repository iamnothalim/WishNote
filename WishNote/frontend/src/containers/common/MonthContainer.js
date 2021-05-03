import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Month from "../../components/common/Month";
import Calendar from "../../components/calendar/Calendar";
import axios from "axios";
import { withRouter } from "react-router";
import { challengeMy } from "../../_actions/my_action";
import rootReducer from "../../_reducers/index";

const MonthContainer = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => ({
    nickname: state.user.userData.nickname,
  }));

  const challenges = axios.get("api/myPage").then((response) => {
    return response.data.challengeName;
  });

  return (
    <div>
      <Month user={user} challenges={challenges} />
      <Calendar />
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
