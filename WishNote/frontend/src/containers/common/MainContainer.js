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
        console.log('이게 밸류',e);
        // dispatch(participateChallenge()).then((response) => {
        //     if (response.payload.success) {
        //         alert(response.payload.msg);
        //         props.history.push("/");
        //     } else {
        //         alert(response.payload.msg);
        //     }
        // })
    }
    return (
        <ChallengeComponent listData={listData.listData} onClickHandler={onClickHandler}/>
    )
};

export default withRouter(MainContainer);