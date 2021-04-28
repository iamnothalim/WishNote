import React from 'react';
import { Form, Button, Select } from 'antd';
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

const ChargePoint = ({onSubmitHandler,userdata}) => {
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
            <p>{userdata.id}님</p>
            <p>보유잔고: {userdata.point}원</p>
        <Form {...layout} form={form} name="control-hooks" onFinish={onSubmitHandler}>
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