import React from 'react';
import { withRouter } from "react-router-dom";
import ChallengeComponent from '../../components/challenge/ChallengeComponent';
import { useSelector } from 'react-redux';



const MainContainer = () => {
    const listData = useSelector((state) => ({
        listData: state.user.userData.listData,
    }))
    
    return (
        <ChallengeComponent listData={listData.listData}/>
    )
};

export default withRouter(MainContainer);