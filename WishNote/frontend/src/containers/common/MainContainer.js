import React from 'react';
import { withRouter } from "react-router-dom";
import ChallengeComponent from '../../components/challenge/ChallengeComponent';
import { useDispatch, useSelector } from 'react-redux';
import { participateChallenge } from '../../_actions/my_action';



const MainContainer = (props) => {
    const dispatch = useDispatch();
    const listData = useSelector((state) => ({
        listData: state.user.userData.listData,
    }))
    const onClickHandler = (e)=>{
        alert("이 챌린지에 참가하시겠습니까?")
        const challengeName = e.target.innerHTML.split('*')[1];
        console.log(challengeName);
        const body = {
            challengeName:challengeName,
        }
        dispatch(participateChallenge(body)).then((response) => {
            if (response.payload.success) {
                alert(response.payload.msg);
                props.history.push("/");
            } else {
                alert(response.payload.msg);
            }
        })
    }
    return (
        <ChallengeComponent listData={listData.listData} onClickHandler={onClickHandler}/>
    )
};

export default withRouter(MainContainer);