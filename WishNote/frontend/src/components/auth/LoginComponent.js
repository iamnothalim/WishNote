import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import styles from '../../lib/styles/loginStyle.css';



const LoginComponent = ({onSubmitHandler,onUsernameHandler,onPasswordHandler,Username,Password}) => {
    
    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onClick={onSubmitHandler}
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input 
                prefix={<UserOutlined className="site-form-item-icon" />} 
                placeholder="Username" 
                value={Username} 
                onChange={onUsernameHandler}
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    value={Password} 
                    onChange={onPasswordHandler}
                />
            </Form.Item>
            {/* <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a className="login-form-forgot"  href="">
                    Forgot password
                </a>
            </Form.Item> */}
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                Or <Link to="/register">register now!</Link> 
            </Form.Item>
        </Form>
    );
};

export default LoginComponent;