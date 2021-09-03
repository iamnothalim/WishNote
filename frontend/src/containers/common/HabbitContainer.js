import React from "react";
import { useSelector } from "react-redux";
import Habbit from "../../components/common/Habit";

const HabbitContainer = (props) => {
  const data = useSelector((state) => ({
    data: state.user.userData.habbit,
  }));
  return (
    <div>
      <Habbit data={data.data} />;
    </div>
  );
};

export default HabbitContainer;
