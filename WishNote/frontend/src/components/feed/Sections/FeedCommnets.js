// import React, { useState } from 'react'
// import { Button, Input } from 'antd';
// import axios from 'axios';
// import { useSelector } from 'react-redux';
// import SingleFeedComment from '../Sections/SingleFeedComment';
// import ReplyFeedComment from '../Sections/ReplyFeedComment';
// import { withRouter } from "react-router-dom";
// const { TextArea } = Input;

// function FeedComments(props) {
    
//     const user = useSelector(state => state.user)
//     const [FeedComment, setFeedComment] = useState("")

//     const handleChange = (e) => {
//         setFeedComment(e.currentTarget.value)
//     }

//     const onSubmit = (e) => {
//         e.preventDefault();

//         const variables = {
//             content: FeedComment,
//             userId: user.userData._id,
//             postId: props.postId
//         }

//         axios.post('/api/feedComment/saveFeedComment', variables)
//             .then(response => {
//                 if (response.data.success) {
//                     setFeedComment("")
//                     props.refreshFunction(response.data.result)
//                 } else {
//                     alert('Failed to save FeedComment')
//                 }
//             })
//     }

//     return (
//         <div>
//             <br />
//             <p> replies</p>
//             <hr />
//             {/* Comment Lists  */}
//             {console.log(props.FeedCommentLists)}

//             {props.FeedCommentLists && props.FeedCommentLists.map((feedComment, index) => (
//                 (!FeedComment.responseTo &&
//                     <React.Fragment>
//                         <SingleFeedComment feedComment={feedComment} postId={props.postId} refreshFunction={props.refreshFunction} />
//                         <ReplyFeedComment CommentLists={props.FeedCommentLists} postId={props.postId} parentFeedCommentId={feedComment._id} refreshFunction={props.refreshFunction} />
//                     </React.Fragment>
//                 )
//             ))}



//             {/* Root Comment Form */}
//             <form style={{ display: 'flex' }} onSubmit={onSubmit}>
//                 <TextArea
//                     style={{ width: '100%', borderRadius: '5px' }}
//                     onChange={handleChange}
//                     value={FeedComment}
//                     placeholder="write some feedcomments"
//                 />
//                 <br />
//                 <Button style={{ width: '20%', height: '52px' }} onClick={onSubmit}>Submit</Button>
//             </form>

//         </div>
//     )
// }

// export default withRouter(FeedComments);
import React, { useEffect, useState } from 'react'
import { Button, Input } from 'antd';
import axios from 'axios';
import { useSelector } from 'react-redux';
import SingleFeedComment from '../Sections/SingleFeedComment';
import ReplyFeedComment from '../Sections/ReplyFeedComment';
import { Link,withRouter } from "react-router-dom";
const { TextArea } = Input;

function FeedComments(props) {
    const user = useSelector(state => state.user)
    const [FeedComment, setFeedComment] = useState("")

    const handleChange = (e) => {
        setFeedComment(e.currentTarget.value)
    }
    

    const onSubmit = (e) => {
        e.preventDefault();
        
        const variables = {
            content: FeedComment,
            userId: user.userData.id,
            postId: props.postId
        }
        
        
        axios.post('/api/feedComment/saveFeedComment', variables)
            .then(response => {
                if (response.data.success) {
                    setFeedComment("")
                    props.refreshFunction(response.data.result)
                } else {
                    alert('Failed to save FeedComment')
                }
            })
    }

    // useEffect(() => {
    // }, [input])

    
    return (
        <div>
            <div> {FeedComment.content} {FeedComment.createdAt}</div>
            <br />
            <hr />
            {console.log(props.FeedCommentLists)}

            {props.FeedCommentLists && props.FeedCommentLists.map((feedComment, index) => (
                (!FeedComment.responseTo &&
                    <React.Fragment>
                      
                        {/* <div feedComment={feedComment} postId={props.postId} refreshFunction={props.refreshFunction} /> */}
                        {/* <div CommentLists={props.FeedCommentLists} postId={props.postId} parentFeedCommentId={feedComment._id} refreshFunction={props.refreshFunction} /> */}
                    </React.Fragment>
                )
                ))}



            {/* Root Comment Form */}
            <form style={{ display: 'flex' }} onSubmit={onSubmit}>
                <TextArea
                    style={{ width: '100%', borderRadius: '5px' }}
                    onChange={handleChange}
                    value={FeedComment}
                    placeholder="댓글 달기..."
                />
                <br />
                <Button style={{ width: '20%', height: '52px' }} onClick={onSubmit}>게시</Button>
            </form>

        </div>
    )
}

export default  withRouter(FeedComments);