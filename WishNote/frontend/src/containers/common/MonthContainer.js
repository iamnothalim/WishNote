import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Month from "../../components/common/Month";
import axios from "axios";
import { challengeMy } from "../../_actions/my_action";
import { auth } from "../../_actions/user_action";
import { withRouter } from "react-router";

const MonthContainer = (props) => {
  const [user, setUser] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatchEvent(auth()).then((response) => {
      setUser(response.payload.username);
    });
    dispatchEvent(challengeMy()).then((response) => {
      setCategory(response.payload.category);
    });
  }, [dispatch]);
  const profile = (category) => {
    axios.get(`/api/myPage/${category}`).then((response) => {
      console.log("props 가 뭔지 궁금", props);
      console.log("response", response);
    });
  };
  return <Month user={user} profile={profile} />;
};

export default withRouter(MonthContainer);
