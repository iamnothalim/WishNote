import React from 'react'
import DetailFeedPage from '../components/feed/DetailFeedPage'
import { withRouter } from "react-router";

 const FeedDetailPage = () => {
    return (
        <div>
            <HeaderContainer/>
            <DetailFeedPage/>
        </div>
    )
}
export default withRouter (FeedDetailPage);