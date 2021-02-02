import React, { useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { connect } from "react-redux";
import { userLoginThunk } from "../Thunk/LoginThunk";
import { getUserState } from '../selector';

const Login = ({ logingIn, onLoginPressed, history }) => {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 8 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };
    const onFinish = (values) => {
        console.log('Success:', values);
        onLoginPressed(values, history);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            {...layout}
            style={{
                padding: '30vh',
                alignItems: 'center'
            }}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                 </Button>
            </Form.Item>
        </Form>
    );
};

const mapStateToProps = state => ({
    logingIn: getUserState(state),
});

const mapDispatchToProp = dispatch => ({
    onLoginPressed: (userName, password) => dispatch(userLoginThunk(userName, password)),
});

export default connect(mapStateToProps, mapDispatchToProp)(Login);