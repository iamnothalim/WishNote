import React from "react";
import styled from "styled-components";
import { Form, Button, Select } from "antd";

import GlobalFonts from "../../lib/styles/fonts/fonts";
//import a from url('https://fonts.googleapis.com/css2?family=Itim&display=swap'

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

  // const onGenderChange = (value) => {
  //     switch (value) {
  //         case 'male':
  //             form.setFieldsValue({
  //                 note: 'Hi, man!',
  //             });
  //             return;

  //         case 'female':
  //             form.setFieldsValue({
  //                 note: 'Hi, lady!',
  //             });
  //             return;

  //         case 'other':
  //             form.setFieldsValue({
  //                 note: 'Hi there!',
  //             });
  //     }
  // };

  const onFinish = (values) => {
    console.log(values);
  };

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
            //onChange={onGenderChange}
            allowClear
          >
            <Option value="5000">+5000원</Option>
            <Option value="10000">+10000원</Option>
            <Option value="50000">+50000원</Option>
          </Select>
        </Form.Item>
        {/* <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
            >
                {({ getFieldValue }) =>
                    getFieldValue('gender') === 'other' ? (
                        <Form.Item
                            name="customizeGender"
                            label="Customize Gender"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    ) : null
                }
            </Form.Item> */}
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
