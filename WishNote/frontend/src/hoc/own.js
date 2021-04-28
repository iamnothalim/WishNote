import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/my_action";

export default function (SpecificComponent, option) {
  function UserCheck(props) {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(challengeMy()).then((response) => {
        console.log(response);
      });
    }, []);
  }
}
