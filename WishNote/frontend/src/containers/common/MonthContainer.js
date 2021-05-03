import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Month from "../../components/common/Month";
import Calendar from "../../components/calendar/Calendar";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../../_reducers/index";

//import { challengeMy } from "../../_actions/my_action";
//import { auth } from "../../_actions/user_action";

//const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

const MonthContainer = (props) => {
  //const dispatch = useDispatch();
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

export default MonthContainer;

/*
  const profile = (category) => {
    axios.get(`/api/myPage/${category}`).then((response) => {
      console.log("props 가 뭔지 궁금", props);
      console.log("response", response);
    });
  };
*/
