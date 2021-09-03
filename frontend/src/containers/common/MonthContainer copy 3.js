import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Month from "../../components/common/Month";
import axios from "axios";
import { withRouter } from "react-router";
import { auth } from "../../_actions/user_action";
import { Calendar, Badge } from "antd";

/////////////////////////
/*
넣어야 할 데이터 : 
1. 며칠인지 -> case
2. 피드 챌린지 유형 뭔지 -> type
3. 피드 챌린지 명 뭔지 -> content
*/
/////////////////////////

const MonthContainer = (props) => {
  let listData;
  const category = useSelector((state) => ({
    data: state.user.userData.feedData.feedCategory,
  }));

  const createdAt = useSelector((state) => ({
    data: state.user.userData.feedData.feedCreatedAt,
  }));
  function GetListData(value) {
    //const feedCategoryArr = category.data;
    //const feedCreatedAtArr = createdAt.data;
    //console.log("와다닫댕", feedCreatedAt);

    /*
  function GetListData(value) {
    const dispatch = useDispatch();
    const [feedCategory, setFeedCategory] = useState("");
    const [feedCreatedAt, setFeedCreatedAt] = useState("");
    let listData;
    //////

    useEffect(() => {
      dispatch(auth()).then(async (response) => {
        // console.log("feedCategory", feedCategory);
        // console.log("feedCreatedAt", feedCreatedAt);
        // console.log(response.payload.feedData.feedCategory);
        // console.log(response.payload.feedData.feedCreatedAt);
        let category = response.payload.feedData.feedCategory; //[ 'health', 'relationship', 'hobby', undefined, undefined, 'hobby' ]
        let createdAt = response.payload.feedData.feedCreatedAt; //["2021-05-01", "2021-05-02", "2021-05-05", '2021-05-06', '2021-05-06']

        setFeedCategory(category);
        setFeedCreatedAt(createdAt);
        // console.log("category", category);
        // console.log("createdAt", createdAt);

        await feedCreatedAt.forEach((el, index) => {
          /////
          switch (value.format("YYYY-MM-DD")) {
            case el:
              console.log("listData", listData);
              listData = [{ type: "warning", content: feedCategory[index] }];
              break;
            default:
              console.log("아무데도 들어가지 않는당");
          }
        });
      });
    }, []);
    //////

    ///////
    // console.log("feedCategory", feedCategory);
    // console.log("feedCreatedAt", feedCreatedAt);

    // switch (value.format("YYYY-MM-DD")) {
    //   case feedCreatedAt:
    //     listData = [{ type: "warning", content: feedCategory }];
    //     break;
    //   default:
    //     console.log("아무데도 들어가지 않는당");
    // }
    return listData || [];
  }
*/
    //복사먼저 해준다 -> 복사를 하면 객체로 바뀐다
    const categoryTemp = { ...category.data };
    const createdAtTemp = { ...createdAt.data };
    //다시 복사해준 데이터들을 배열로 전환 해준다
    const feedCategory = [];
    const feedCreatedAt = [];
    for (let i = 0; i < Object.keys(categoryTemp).length; i++) {
      feedCategory.push(categoryTemp[i]);
    }
    for (let i = 0; i < Object.keys(createdAtTemp).length; i++) {
      feedCreatedAt.push(createdAtTemp[i]);
    }
    console.log("이게 카테고리", feedCategory);
    console.log("이게 시간", feedCreatedAt);
    // console.log("feedCategory", feedCategory);
    // console.log("feedCreatedAt", feedCreatedAt);

    feedCreatedAt.forEach((el, index) => {
      console.log("el", el);
      switch (value.format("YYYY-MM-DD")) {
        case el:
          //console.log("listData", listData);
          listData = [{ type: "warning", content: feedCategory[index] }];
          break;
        default:
          break;
        //console.log('value.format("YYYY-MM-DD")', value.format("YYYY-MM-DD"));
        //console.log("value", value);
        //console.log("아무데도 들어가지 않는당");
      }
    });
    return listData || [];
  }

  function dateCellRender(value) {
    let listData = GetListData(value);
    //console.log("listData", listData);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }

  // function getMonthData(value) {
  //   if (value.month() === 8) {
  //     return 1394;
  //   }
  // }

  // function monthCellRender(value) {
  //   const num = getMonthData(value);
  //   return num ? (
  //     <div className="notes-month">
  //       <section>{num}</section>
  //       <span>Backlog number</span>
  //     </div>
  //   ) : null;
  // }

  return (
    <Calendar
      dateCellRender={dateCellRender}
      // monthCellRender={monthCellRender}
    />
  );
};

export default withRouter(MonthContainer);
