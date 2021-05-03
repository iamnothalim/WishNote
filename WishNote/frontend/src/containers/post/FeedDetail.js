import React from 'react'
import HeaderContainer from "../../containers/common/HeaderContainer";
import { withRouter } from "react-router";
const FeedDetail = () => {
    return (
        <div>
            <HeaderContainer/>
            <FeedDetail/>
        </div>
    )
};

export default withRouter (FeedDetail);