import React, { useState } from "react";
import moment from "moment";
import {
  Form,
  Input,
  Button,
  Select,
  Upload,
  Cascader,
  DatePicker,
  InputNumber,
  Switch,
} from "antd";
import { InboxOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const { RangePicker } = DatePicker;

function onChange(dates, dateStrings) {
  console.log("From: ", dates[0], ", to: ", dates[1]);
  console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
}
const normFile = (e) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const CreateChallengeComponent = ({ onSubmitHandler }) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", normFile);
  };
  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: "default",
        }}
        onFinish={onSubmitHandler}
      >
        <Form.Item name="Challengename" label="챌린지 이름">
          <Input />
        </Form.Item>
        <Form.Item label="카테고리를 선택해주세요" name="category">
          <Select>
            <Select.Option value="asset">Asset</Select.Option>
            <Select.Option value="health">Health</Select.Option>
            <Select.Option value="performance">Performance</Select.Option>
            <Select.Option value="relationship">Relationship</Select.Option>
            <Select.Option value="hobby">Hobby</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="챌린지 인증 횟수" name="howMany">
          <Cascader
            options={[
              {
                value: "howMany",
                label: "일주일",
                children: [
                  {
                    value: "1",
                    label: "1회",
                  },
                  {
                    value: "2",
                    label: "2회",
                  },
                  {
                    value: "3",
                    label: "3회",
                  },
                  {
                    value: "4",
                    label: "4회",
                  },
                  {
                    value: "5",
                    label: "5회",
                  },
                  {
                    value: "6",
                    label: "6회",
                  },
                  {
                    value: "7",
                    label: "7회",
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="챌린지 기간" name="date">
          <RangePicker
            ranges={{
              Today: [moment(), moment()],
              "This Month": [
                moment().startOf("month"),
                moment().endOf("month"),
              ],
            }}
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item label="챌린지 보증금 (단위:  원)" name="deposit">
          <InputNumber />
        </Form.Item>
        <Form.Item label="챌린지 대문">
          <Form.Item
            name="dragger"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            noStyle
          >
            <Upload.Dragger name="img" action="/api/upload" method="POST">
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload.
              </p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
        <Form.Item name="description" label="챌린지 안내">
          <TextArea showCount maxLength={100} />
        </Form.Item>
        <Form.Item label="챌린지 등록!">
          <Button type="primary" htmlType="submit">
            Post
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateChallengeComponent;
