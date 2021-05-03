import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action";

export default function (SpecificComponent, option, adminRoute = null) {
  //null -> 아무나 출입이 가능한 페이지
  //true -> 로그인 유저만 출입이 가능한 페이지
  //false -> 로그인한 유저는 출입이 불가능한 페이지

  function AuthenticationCheck(props) {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(auth()).then((response) => {
        console.log('auth안에 데이더',response);

        //로그인 하지 않은 상태
        if (!response.payload.id) {
          if (option) {
            console.log("바부똥꼬");
            props.history.push("/login");
            alert("로그인이 필요한 페이지 입니다.");
          }
        } else {
          //로그인 한 상태
          if (option === false) {
            props.history.push("/");
            alert("이미 로그인 하셨습니다!");
          }
        }
      });
    }, []);

    return <SpecificComponent />;
  }
  return AuthenticationCheck;
}
