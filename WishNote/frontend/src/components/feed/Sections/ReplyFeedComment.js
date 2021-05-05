import React, { useEffect, useState } from 'react';
import SingleFeedComment from './SingleFeedComment';

function ReplyFeedComment(props) {

    const [ChildFeedCommentNumber, setChildFeedCommentNumber] = useState(0)
    const [OpenReplyFeedComments, setOpenReplyFeedComments] = useState(false)
    useEffect(() => {

        let feedCommentNumber = 0;
        props.FeedCommentLists.map((feedComment) => {

            if (feedComment.responseTo === props.parentFeedCommentId) {
                feedCommentNumber++
            }
        })
        setChildFeedCommentNumber(feedCommentNumber)
    }, [props.FeedCommentLists, props.parentFeedCommentId])


    let renderReplyFeedComment = (parentFeedCommentId) =>
        props.FeedCommentLists.map((feedComment, index) => (
            <React.Fragment>
                {feedComment.responseTo === parentFeedCommentId &&
                    <div style={{ width: '80%', marginLeft: '40px' }}>
                        <SingleFeedComment feedComment={feedComment} postId={props.postId} refreshFunction={props.refreshFunction} />
                        <ReplyFeedComment FeedCommentLists={props.FeedCommentLists} parentFeedCommentId={feedComment._id} postId={props.postId} refreshFunction={props.refreshFunction} />
                    </div>
                }
            </React.Fragment>
        ))

    const handleChange = () => {
        setOpenReplyFeedComments(!OpenReplyFeedComments)
    }


    return (
        <div>

            {ChildFeedCommentNumber > 0 &&
                <p style={{ fontSize: '14px', margin: 0, color: 'gray' }}
                    onClick={handleChange} >
                    View {ChildFeedCommentNumber} more comment(s)
             </p>
            }

            {OpenReplyFeedComments &&
                renderReplyFeedComment(props.parentFeedCommentId)
            }

        </div>
    )
}

export default ReplyFeedComment;
