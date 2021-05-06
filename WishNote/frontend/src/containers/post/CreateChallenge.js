import React from "react";
import CreateChallengeComponent from "../../components/challenge/CreateChallengeComponent";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { createChallenge } from "../../_actions/my_action";
import axios from "axios";

const CreateChallenge = (props) => {
  const dispatch = useDispatch();
  const onSubmitHandler = async (values) => {
    const formData = new FormData();
    formData.append("challengeName", values.Challengename);
    formData.append("category", values.category);
    formData.append("startDate", values.date[0].format("YYYY-MM-DD"));
    formData.append("finishDate", values.date[1].format("YYYY-MM-DD"));
    formData.append("howMany", values.howMany[1]);
    formData.append("challengeImg", values.dragger[0].originFileObj);
    formData.append("deposit", values.deposit);
    formData.append("description", values.description);
    //console.log('이건 폼데이타', formData);
    console.log("에이 설마", values);
    // let body = {
    //     challengeName: values.Challengename,
    //     category: values.category,
    //     startDate:values.date[0].format('YYYY-MM-DD'),
    //     finishDate:values.date[1].format('YYYY-MM-DD'),
    //     howMany:parseInt(values.howMany[1]),
    //     challengeImg:values.dragger
    // };
    // console.log(body);
    // axios.post("/api/challenge", body.challengeImg);
    await dispatch(createChallenge(formData)).then((response) => {
      if (response.payload.success) {
        alert(response.payload.msg);
        props.history.push("/");
      } else {
        alert(response.payload.msg);
      }
    });
    // dispatch(registerUser(body)).then((response) => {
    //     if (response.payload.success) {
    //         alert(response.payload.msg);
    //         props.history.push("/login");
    //     } else {
    //         alert(response.payload.msg);
    //     }
    // });
  };
  return (
    <div>
      <CreateChallengeComponent onSubmitHandler={onSubmitHandler} />
    </div>
  );
};

export default withRouter(CreateChallenge);
