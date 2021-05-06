import React from 'react'
import HeaderContainer from "../../containers/common/HeaderContainer";
import { withRouter } from "react-router";
import TopMenu from '../../components/antd/TopMenu';
const FeedDetail = () => {
    return (
        <div>
            <TopMenu/>
            <FeedDetail/>
        </div>
    )
};

export default withRouter (FeedDetail);