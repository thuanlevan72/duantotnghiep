import React from "react";
import { Button, Form, Input, Typography } from 'antd';
import Upload from "antd/es/upload/Upload";


const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const Signup = () => {
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
                <Typography.Title style={{ color: "#f34848" }}>Đăng ký Poly Food</Typography.Title>
                <Form.Item
                    label="Họ tên"
                    name="username"
                    rules={[{ required: true, message: 'Vui lòng nhập tên' }]}
                >
                    <Input placeholder="Nhập tên của bạn" />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, type: "email", message: 'Vui lòng nhập email' }]}
                >
                    <Input placeholder="Nhập email của bạn" />
                </Form.Item>

                <Form.Item
                    label="Ảnh"
                    name="image"
                >
                    <Upload
                        multiple
                        listType="picture"
                        accept=".png,.jpg,.jpeg,.webp"
                        action={"http://localhost:3000/signup"}>
                        <Button>Tải lên</Button>
                    </Upload>
                </Form.Item>

                <Form.Item
                    label="Mật khẩu"
                    name="password"
                    rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
                >
                    <Input.Password placeholder="Nhập mật khẩu của bạn" />
                </Form.Item>

                <Form.Item
                    label="Xác nhận"
                    name="repassword"
                    rules={[{ required: true, message: 'Vui lòng nhập lại mật khẩu' }]}
                >
                    <Input.Password placeholder="Nhập lại mật khẩu" />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                    <Button type="primary" htmlType="submit" block style={{ backgroundColor: "rgb(255, 213, 98)", color: "black" }}>
                        Đăng ký
                    </Button>
                </Form.Item>
            </Form>
        </div >
    );
}
export default Signup;
