import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Month from "../../components/common/Month";
import axios from "axios";
import { withRouter } from "react-router";
import { challengeMy } from "../../_actions/my_action";

/////////////////////////
/*
넣어야 할 데이터 : 
1. 며칠인지 -> case
2. 피드 챌린지 유형 뭔지 -> type
3. 피드 챌린지 명 뭔지 -> content
*/

/////////////////////////
const MonthContainer = async () => {
  const when = await axios.get("/api/feed/feed").then((response) => {
    console.log(response.data.data);
    return response.data.data;
  });
  const day = when[0].createdAt;
  console.log("day", day);
  const category = when[0].category;
  console.log("category", category);

  return day !== undefined ? (
    <div>
      <div>
        <Month day={day} category={category} />
      </div>
      <div>안녕</div>
    </div>
  ) : (
    <div>헤헤</div>
  );
};

export default withRouter(MonthContainer);
