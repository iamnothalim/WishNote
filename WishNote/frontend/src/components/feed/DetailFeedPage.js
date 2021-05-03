// import React, { useEffect, useState } from 'react'
// import { List, Avatar, Row, Col } from 'antd';
// import FeedComments from './Sections/FeedCommnets';
// import axios from 'axios';
// function DetailFeedPage(props) {


//     const feedId = props.match.params.feedId
//     const [Feed, setFeed] = useState([])
//     const [FeedCommentLists, setFeedCommentLists] = useState([])

//     const feedVariable = {
//         feedId: feedId
//     }

//     useEffect(() => {
//         axios.post('/api/feed/getFeed', feedVariable)
//             .then(response => {
//                 if (response.data.success) {
//                     console.log(response.data.feed)
//                     setFeed(response.data.feed)
//                 } else {
//                     alert('Failed to get feed Info')
//                 }
//             })

//         axios.post('/api/feedComment/getFeedComments', feedVariable)
//             .then(response => {
//                 if (response.data.success) {
//                     console.log('response.data.feedComments',response.data.feedComments)
//                     setFeedCommentLists(response.data.feedComments)
//                 } else {
//                     alert('Failed to get feed Info')
//                 }
//             })


//     }, [])

//     const updateFeedComment = (newFeedComment) => {
//         setFeedCommentLists(FeedCommentLists.concat(newFeedComment))
//     }


//     if (Feed.writer) {
//         return (
//             <Row>
//                 <Col lg={18} xs={24}>
//                     <div className="postPage" style={{ width: '100%', padding: '3rem 4em' }}>
//                         <feed style={{ width: '100%' }} src={`http://localhost:3000/${Feed.filePath}`} controls></feed>

//                         <List.Item
//                             // actions={[<LikeDislikes feed feedId={feedId} userId={localStorage.getItem('userId')}  />, <Subscriber userTo={Feed.writer._id} userFrom={localStorage.getItem('userId')} />]}
//                         >
//                             <List.Item.Meta
//                                 avatar={<Avatar src={Feed.writer && Feed.writer.image} />}
//                                 title={<a href="https://ant.design">{Feed.title}</a>}
//                                 description={Feed.description}
//                             />
//                             <div></div>
//                         </List.Item>

//                         <FeedComments FeedCommentLists={FeedCommentLists} postId={Feed._id} refreshFunction={updateFeedComment} />

//                     </div>
//                 </Col>
//                 <Col lg={6} xs={24}>

                   

//                 </Col>
//             </Row>
//         )

//     } else {
//         return (
//             <div>Loading...</div>
//         )
//     }


// }

// export default DetailFeedPage
