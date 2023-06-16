import React from "react";
import { Button, Checkbox, Divider, Form, Input, Typography } from 'antd';
import { GoogleOutlined, FacebookFilled } from '@ant-design/icons';


const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const Signin = () => {
    return (
        <div className="login">
            <Form
                className="loginForm"
                name="basic"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Typography.Title style={{ color: "#f34848" }}>Đăng nhập Poly Food</Typography.Title>
                <Form.Item
                    label="Email"
                    name="username"
                    rules={[{ required: true, message: 'Vui lòng nhập email' }]}
                >
                    <Input placeholder="Email đăng nhập" />
                </Form.Item>

                <Form.Item
                    label="Mật khẩu"
                    name="password"
                    rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
                >
                    <Input.Password placeholder="Mật khẩu đăng nhập" />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox style={{ color: "black" }}>Ghi nhớ tài khoản</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                    <Button type="primary" htmlType="submit" block style={{ backgroundColor: "rgb(255, 213, 98)", color: "black" }}>
                        Đăng nhập
                    </Button>
                </Form.Item>

                <Divider style={{ borderColor: "#f34848", color: "#f34848" }}><a href="/signup">Đăng ký</a> hoặc Đăng nhập với</Divider>

                <div className="socialLogin">
                    <GoogleOutlined style={{ color: "red" }} />
                    <FacebookFilled style={{ color: "blue" }} />
                </div>
            </Form>
        </div>
    );
}
export default Signin;
