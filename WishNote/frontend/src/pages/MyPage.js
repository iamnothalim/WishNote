import React from "react";
import MonthContainer from "../containers/common/MonthContainer";
import HabitContainer from "../containers/common/HabitContainer";
//챌린지 현황
//import CurrentContainer from "../containers/common/CurrentContainer";
//획득습관
//import HabbitContainer from "../containers/common/HabbitContainer";

const MyPage = () => {
  return (
    <div>
      <MonthContainer />
      <HabitContainer />
    </div>
  );
};

export default MyPage;
