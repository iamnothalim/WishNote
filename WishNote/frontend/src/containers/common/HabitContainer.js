import React, { useEffect } from "react";
import { challengeMy } from "../../_actions/my_action";
import { useDispatch, useSelector } from "react-redux";
import Habit from "../../components/common/Habit";

const data = [
  {
    habit: "hobby",
    count: 102,
  },
  {
    habit: "relationship",
    count: 58,
  },
  {
    habit: "performance",
    count: 70,
  },
  {
    habit: "asset",
    count: 48,
  },
  {
    habit: "health",
    count: 83,
  },
];

const HabitContainer = (props) => {
  const dispatch = useDispatch();
  const challengeSaver = (values) => {
    let id = values.Id;
    dispatch(challengeMy(id)).then((response) => {
      console.log("response", response.payload.challengeName);
    });
    // const data = useSelector((state) => ({
    //   data: state.my.challengeData.challengeName,
    // }));
  };
  return <Habit data={data} />;
};

export default HabitContainer;
