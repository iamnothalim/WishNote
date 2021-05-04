import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Month from "../../components/common/Month";
import Calendar from "../../components/calendar/Calendar";
import { withRouter } from "react-router";

const MonthContainer = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => ({
    nickname: state.user.userData.nickname,
  }));

  // const challenge = useSelector((state) => ({
  //   challengeName: state.challenge.challengeName.challengeName,
  // }));
  // challenge = { challenge };
  return (
    <div>
      <Month user={user} />
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
