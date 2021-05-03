import React from "react";
import MonthContainer from "../containers/common/MonthContainer";
import Radar from "../components/common/Habbit";
//챌린지 현황
//import CurrentContainer from "../containers/common/CurrentContainer";
//획득습관
//import HabbitContainer from "../containers/common/HabbitContainer";

const MyPage = () => {
  return (
    <div>
      <MonthContainer />
      <Radar />
    </div>
  );
};

export default MyPage;
