import React from "react";
import CreateChallengeComponent from "../../components/challenge/CreateChallengeComponent";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { createChallenge } from "../../_actions/my_action";
import HeaderContainer from "../common/HeaderContainer";

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
    await dispatch(createChallenge(formData)).then((response) => {
      if (response.payload.success) {
        alert(response.payload.msg);
        props.history.push("/");
      } else {
        alert(response.payload.msg);
      }
    });
  };
  return (
    <div>
      <HeaderContainer />
      <CreateChallengeComponent onSubmitHandler={onSubmitHandler} />
    </div>
  );
};

export default withRouter(CreateChallenge);
