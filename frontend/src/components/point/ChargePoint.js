import React from "react";
import styled from "styled-components";
import { Form, Button, Select } from "antd";


const ChargeDivStyled = styled.div`
  margin: 10%;
  color: black;
  font-size: 1rem;
  /* @font-face : {
    font-family: "Itim-Regular";
    src: url("https://fonts.googleapis.com/css2?family=Itim&display=swap");
  } */
`;
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const ChargePoint = ({ onSubmitHandler, userdata }) => {
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      <ChargeDivStyled>
        {userdata.id}님의 보유잔고는 {userdata.point}원입니다.
      </ChargeDivStyled>
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onSubmitHandler}
      >
        <Form.Item
          name="charge"
          label="충전금액"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="충전할 금액을 선택해 주세요."
            allowClear
          >
            <Option value="5000">+5000원</Option>
            <Option value="10000">+10000원</Option>
            <Option value="50000">+50000원</Option>
          </Select>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            충전하기
          </Button>
          <Button htmlType="button" onClick={onReset}>
            초기화
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ChargePoint;
