import React, { useEffect, useState } from "react";
import FeedComments from "./Sections/FeedCommnets";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Moment from "react-moment";

function DetailFeedPage(props) {
    // console.log("디테일 페이지");
    const user = useSelector((state) => state.user);
    const userId = user.userData.id;
    console.log('요게 윰ㄴㅇㅁㄴㅇ',props.match.params)
    const postId = props.match.params.feedId;
    const [Feed, setFeed] = useState([]);
    const [FeedCommentLists, setFeedCommentLists] = useState([]);
    console.log("postId", postId);



    useEffect(async () => {
        const res = await axios.get(`/api/feed/${postId}`);
        setFeed(res.data.data);
        setFeedCommentLists(res.data.comment);


    }, []);

    const updateFeedComment = (newFeedComment) => {
        setFeedCommentLists(FeedCommentLists.concat(newFeedComment));
        // console.log("Feed!!",Feed);
    };

    // console.log("FeedCommentLists", FeedCommentLists);

    return (
        <div
            style={{
                display: "flex",
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                paddingTop: "30px",
            }}
        >
            <div
                style={{
                    flexDirection: "column",
                    paddingBottom: "0px",
                    paddingTop: "0px",
                    display: "grid",
                    gridAutoColumns: "2",
                }}
            >
                <div
                    style={{
                        fontWeight: "bold",
                        height: "60px",
                        padding: "16px",
                        border: " 1px solid #d9d9d9",
                        backgroundColor: "rgba(255,255,255),1)",
                    }}
                >
                    {Feed.userId}
                </div>
                <div>
                    <img
                        src={`/api/feed/${Feed.image}`}
                        style={{
                            maxHeight: "614px",
                            maxWidth: "614px",
                            minHeight: "614px",
                        }}
                    />
                </div>

                <div style={{ border: " 1px solid #d9d9d9" }}>
                    <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                        {Feed.title}{" "}
                    </div>
                    <div> #{Feed.category}</div>
                    <div>{Feed.description}</div>
                    <div style={{ fontSize: "10px" }}>
                        <Moment format="YYYY-MM-DD HH:mm">{Feed.createdAt}</Moment>
                    </div>
                </div>
                <FeedComments
                    FeedCommentLists={FeedCommentLists}
                    postId={Feed._id}
                    refreshFunction={updateFeedComment}
                />
                <div
                    style={{
                        fontSize: "15px",
                        textAlign: "right",
                        textDecoration: "none",
                        color: "#fafafa",
                    }}
                >
                    <Link to={"/feed/upload"}>인증하기</Link> |{" "}
                    <Link to={"/feedlistView"}>목록</Link>
                </div>
                <div>
                    {FeedCommentLists.map((com) => (
                        <div key={com.feedIndex}>
                            <div >
                                <span style={{ fontWeight: "bold" }} >{com.userId} </span>
                                <span>{com.content}</span>
                            </div>
                            <div style={{ fontSize: "8px" }}>
                                <Moment format="YYYY-MM-DD HH:mm">{com.createdAt}</Moment>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default withRouter(DetailFeedPage);