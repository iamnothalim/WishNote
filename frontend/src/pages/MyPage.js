import React from "react";
import MonthContainer from "../containers/common/MonthContainer";
import HabitContainer from "../containers/common/HabbitContainer";
import HeaderContainer from "../containers/common/HeaderContainer";

const MyPage = () => {
  return (
    <div>
      <locationBlock>
        <HeaderContainer />
        <HabitContainer />
        <MonthContainer />
      </locationBlock>
    </div>
  );
};

export default MyPage;
