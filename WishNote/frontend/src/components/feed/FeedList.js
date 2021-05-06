import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Avatar, Col, Typography, Row } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";
import CenterBlock from "../../components/common/Center";
const { Title } = Typography;
const { Meta } = Card;

function FeedList() {
  const [feeds, setFeeds] = useState([
    {
      _id: "",
      userId: "",
      title: "",
      description: "",
      category: "",
      views: "",
      image: "",
    },
  ]);
  useEffect(async () => {
    const res = await axios.get("/api/feed/getFeeds");
    // console.log("res ==> ",res)
    const data = res.data.data.map((data) => ({
      _id: data._id,
      userId: data.userId,
      title: data.title,
      description: data.description,
      category: data.category,
      views: data.views,
      image: data.image,
    }));
    // console.log("data ==> ",data)
    setFeeds(feeds.concat(data));
  }, []);

  console.log("feeds", feeds);
  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <Title level={2} style={{ marginTop: "5%" }}>
        {" "}
        챌린지 인증
      </Title>
      <hr />
      {feeds.map((feed) => {
        <Link to={`/feed/${feed._id}`}>
          <div style={{ display: "inline-block", marginLeft: "20px" }}>
            <div>
              <img width={272} alt="logo" src={`/api/${item.challengeImg}`} />
            </div>
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>
              {feed.title}
            </div>
            <div>{feed.userId}</div>
            {/* <div>{feed.description}</div> */}
            {/* <div>{feed.category} </div> */}
            {/* <div>{feed.views}</div> */}
          </div>
        </Link>;
      })}
      {/* <Row gutter={16}>{renderCards}</Row> */}
    </div>
  );
}

export default FeedList;
