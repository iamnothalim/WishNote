import React from "react";
import { Button, List, Space, Form, Input } from "antd";
import styled from "styled-components";
import "../../App.css";

const customDiv = styled.div`
  .name {
    font-family: "Hi Melody";
  }
`;
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
const ChallengeComponent = ({ listData, onClickHandler }) => {
  return (
    <Form onFinish={onClickHandler}>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 2,
        }}
        dataSource={listData}
        renderItem={(item) => (
          <List.Item
            key={item.challengeName}
            extra={
              <img width={272} alt="logo" src={`/api/${item.challengeImg}`} />
            }
          >
            <List.Item.Meta
              title={<a onClick={onClickHandler}>*{item.challengeName}*</a>}
              description={item.creator}
            />
            <customDiv>
              <p>비용: {item.deposit}원</p>
              <p>설명: {item.description}</p>
            </customDiv>
          </List.Item>
        )}
      />
    </Form>
  );
};

export default ChallengeComponent;
