// import React, { useState } from 'react'
// import { Comment, Avatar, Button, Input } from 'antd';
// import Axios from 'axios';
// import { useSelector } from 'react-redux';
// // import LikeDislikes from './LikeDislikes';
// const { TextArea } = Input;

// function SingleFeedComment(props) {
//     const user = useSelector(state => state.user);
//     const [FeedCommentValue, setFeedCommentValue] = useState("")
//     const [OpenReply, setOpenReply] = useState(false)

//     const handleChange = (e) => {
//         setFeedCommentValue(e.currentTarget.value)
//     }

//     const openReply = () => {
//         setOpenReply(!OpenReply)
//     }

//     const onSubmit = (e) => {
//         e.preventDefault();

//         const variables = {
//             writer: user.userData._id,
//             postId: props.postId,
//             responseTo: props.comment._id,
//             content: FeedCommentValue
//         }


//         Axios.post('/api/feedComment/saveFeedComment', variables)
//             .then(response => {
//                 if (response.data.success) {
//                     setFeedCommentValue("")
//                     setOpenReply(!OpenReply)
//                     props.refreshFunction(response.data.result)
//                 } else {
//                     alert('Failed to save feedComment')
//                 }
//             })
//     }

//     const actions = [
//         // <LikeDislikes feedComment feedCommentId={props.feedComment._id} userId={localStorage.getItem('userId')} />,
//         <span onClick={openReply} key="feedComment-basic-reply-to">Reply to </span>
//     ]

//     return (
//         <div>
//             <Comment
//                 actions={actions}
//                 author={props.feedComment.writer.name}
//                 avatar={
//                     <Avatar
//                         src={props.feedComment.writer.image}
//                         alt="image"
//                     />
//                 }
//                 content={
//                     <p>
//                         {props.feedComment.content}
//                     </p>
//                 }
//             ></Comment>


//             {OpenReply &&
//                 <form style={{ display: 'flex' }} onSubmit={onSubmit}>
//                     <TextArea
//                         style={{ width: '100%', borderRadius: '5px' }}
//                         onChange={handleChange}
//                         value={FeedCommentValue}
//                         placeholder="write some feedcomments"
//                     />
//                     <br />
//                     <Button style={{ width: '20%', height: '52px' }} onClick={onSubmit}>Submit</Button>
//                 </form>
//             }

//         </div>
//     )
// }

// export default SingleFeedComment;
