import React from "react";
import MonthContainer from "../containers/common/MonthContainer";
import HabitContainer from "../containers/common/HabbitContainer";
//챌린지 현황
//import CurrentContainer from "../containers/common/CurrentContainer";
//획득습관
//import HabbitContainer from "../containers/common/HabbitContainer";

const MyPage = () => {
  console.log("마이페이지 들어왔습니다.");
  return (
    <div>
      <MonthContainer />
      <HabitContainer />
    </div>
  );
};

export default MyPage;
