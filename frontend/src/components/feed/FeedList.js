import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Avatar, Col, Typography, Row } from "antd";
import { Link } from "react-router-dom";
const { Title } = Typography;
const { Meta } = Card;

function FeedList() {
  const [feeds, setFeeds] = useState([]);

  useEffect(async () => {
    const res = await axios.get("/api/feed/getFeeds");
    console.log("res ==> ", res);
    const data = res.data.data.map((data) => ({
      _id: data._id,
      userId: data.userId,
      title: data.title,
      description: data.description,
      category: data.category,
      views: data.views,
      image: data.image,
    }));
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
      {feeds.map((feed) => (
        <Link to={`/feed/${feed._id}`}>
          <div style={{ display: "inline-block", marginLeft: "20px" }}>
            <div>
              <img
                src={`/api/feed/${feed.image}`}
                style={{
                  maxHeight: "250px",
                  maxWidth: "250px",
                  minHeight: "250px",
                }}
              />
            </div>
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>
              {feed.title}
            </div>
            <div>{feed.userId}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default FeedList;
