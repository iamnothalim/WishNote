import React from 'react'
import FeedList from '../../components/feed/FeedList';
import HeaderContainer from "../../containers/common/HeaderContainer";
import { withRouter } from "react-router";
const FeedListView = () => {
    return (
        <div>
            <HeaderContainer/>
            <FeedList/>
        </div>
    )
};

export default withRouter (FeedListView);