import React from "react";
import MonthContainer from "../containers/common/MonthContainer";
import HabitContainer from "../containers/common/HabbitContainer";
import HeaderContainer from "../containers/common/HeaderContainer";
import styled from "styled-components";

//챌린지 현황
//import CurrentContainer from "../containers/common/CurrentContainer";
//획득습관
//import HabbitContainer from "../containers/common/HabbitContainer";

const moneyAlarmdiv = styled.div``;
const locationBlock = styled.div`
  margin-top: 10%;
`;
const MyPage = () => {
  console.log("마이페이지 들어왔습니다.");
  return (
    <div>
      <locationBlock>
        <HeaderContainer />
        <HabitContainer />
        {/* <MonthContainer /> */}
      </locationBlock>
    </div>
  );
};

export default MyPage;
