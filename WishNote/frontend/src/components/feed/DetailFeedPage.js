import React, { useEffect, useState } from 'react'
import FeedComments from './Sections/FeedCommnets';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Card, Avatar, Col, Typography, Row , List} from "antd";

// function DetailFeedPage() {
//     const [feeds, setFeeds] = useState([
//         {
//           userId: "",
//           title: "",
//           description: "",
//           category: "",
//           views: "",
//           image:""
//         },
//       ]);


//       useEffect (async ()=>{
//           const res = await axios.get("/api/feed/feed/getFeeds");
//           const data = res.data.data.map((data)=>({
//             userId: data.userId,
//             title: data.title,
//             description: data.description,
//             category: data.category,
//             views: data.views,
//             image: data.image,
//           }));
//           setFeeds(feeds.concat(data));
//       },[]);
//       console.log("feeds", feeds);
      
//   return (
//     <div style={{ width: "85%", margin: "3rem auto" }}>
    
//       {feeds.map((feed) => (

//        <div style={{display:"inline-block"}}>
//           <div ><img src={feed.image} style={{maxHeight:"250px" ,maxWidth:"250px",minWidth:"250px",minHeight:"250px" }}/></div>
//           <div>{feed.title}</div>
//           <div>{feed.userId}</div>
//           <div>{feed.description}</div>
//           <div>{feed.category}</div>
//           <div>{feed.views}</div>

//         </div>
//       ))}
        
//     </div>
//   );
// }


function DetailFeedPage(props) {

    console.log('pass')
    const feedId = props.match.params.feedId
    const [feeds, setFeeds] = useState([])
    const [FeedCommentLists, setFeedCommentLists] = useState([])

    const feedVariable = {
        feedId: feedId
    }

    useEffect(async() => {
        const res = await axios.get("/api/feed/feed/getFeeds");
        const data = res.data.data.map((data) => ({
            userId: data.userId,
            title: data.title,
            description: data.description,
            category: data.category,
            views: data.views,
            image: data.image,
          }));
        axios.post('/api/feed/feed/getFeeds', feedVariable)
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.feed)
                    setFeeds(response.data.feed)
                } else {
                    alert('Failed to get feed Info')
                }
            })

        axios.post('/api/feedComment/getFeedComments', feedVariable)
            .then(response => {
                if (response.data.success) {
                    console.log('response.data.feedComments',response.data.feedComments)
                    setFeedCommentLists(response.data.feedComments)
                } else {
                    alert('Failed to get feed Info')
                }
            })


    }, [])

    const updateFeedComment = (newFeedComment) => {
        setFeedCommentLists(FeedCommentLists.concat(newFeedComment))
    }


    if (feeds.registerId) {
        return (
            <Row>
                <Col lg={18} xs={24}>
                    <div className="postPage" style={{ width: '100%', padding: '3rem 4em' }}>

                        <List.Item
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={feeds.userId && feeds.userId.image} />}
                                title={<a href="https://ant.design">{feeds.title}</a>}
                                description={feeds.description}
                            />
                            <div></div>
                        </List.Item>

                        <FeedComments FeedCommentLists={FeedCommentLists} postId={feeds._id} refreshFunction={updateFeedComment} />

                    </div>
                </Col>
                <Col lg={6} xs={24}>

                   

                </Col>
            </Row>
        )

    } else {
        return (
            <div>Loading...</div>
        )
    }


}

export default DetailFeedPage
