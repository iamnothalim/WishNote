import React, { useState } from "react";
import moment from 'moment';
import {
    Form,
    Input,
    Button,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    Switch,
} from 'antd';

const { RangePicker } = DatePicker;

function onChange(dates, dateStrings) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}

const CreateChallengeComponent = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
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
                    size: 'default',
                }}
                onFinish={onFinish}
            >
                <Form.Item name="Challengename" label="Challengename">
                    <Input />
                </Form.Item>
                <Form.Item label="Category" name="category">
                    <Select>
                        <Select.Option value="asset">Asset</Select.Option>
                        <Select.Option value="health">Health</Select.Option>
                        <Select.Option value="performance">Performance</Select.Option>
                        <Select.Option value="relationship">Relationship</Select.Option>
                        <Select.Option value="hobby">Hobby</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="HowMany" name="howMany">
                    <Cascader
                        options={[
                            {
                                value: 'howMany',
                                label: '일주일',
                                children: [
                                    {
                                        value: '1',
                                        label: '1회',
                                    },
                                    {
                                        value: '2',
                                        label: '2회',
                                    },
                                    {
                                        value: '3',
                                        label: '3회',
                                    },
                                    {
                                        value: '4',
                                        label: '4회',
                                    },
                                    {
                                        value: '5',
                                        label: '5회',
                                    },
                                    {
                                        value: '6',
                                        label: '6회',
                                    },
                                    {
                                        value: '7',
                                        label: '7회',
                                    },
                                ],
                            },
                        ]}
                    />
                </Form.Item>
                <Form.Item label="DatePicker" name="date">
                    <RangePicker
                        ranges={{
                            Today: [moment(), moment()],
                            'This Month': [moment().startOf('month'), moment().endOf('month')],
                        }}
                        onChange={onChange}
                    />
                </Form.Item>
                <Form.Item label="Cost" name="deposit">
                    <InputNumber />
                </Form.Item>
                <Form.Item label="Button">
                    <Button type="primary" htmlType="submit">
                        Post
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default CreateChallengeComponent;