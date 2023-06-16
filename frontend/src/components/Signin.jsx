import React from "react";
import { Button, Divider, Form, Input, Typography } from 'antd';
import { GoogleOutlined, FacebookFilled, MailOutlined, LockOutlined } from '@ant-design/icons';
import UserApi from "../api/security/UserApi";
import { useNavigate } from "react-router-dom";

const Signin = () => {

    const navigate = useNavigate();
    const onFinish = async (values) => {
        console.log('Success:', values);
        try {
            const response = await UserApi.Login(values) // đưa dữ liệu lên đăng ký
            console.log(response);
            if (response.data.decentralizationId !== 3) {
                //nếu đi vào đây thì người đó không phải là người dùng nên phải đưa về admin
                return;
            }
            response.data.password = null;
            const userJSON = JSON.stringify(response.data); // lưu dữ liệu người dùng
            const token = JSON.stringify(response.loginResponse.token); // lưu token vào để sau lấy dữ liệu sẽ cần phải dùng 
            localStorage.setItem("user", userJSON);
            localStorage.setItem("token", token);
            alert("đã đăng nhập thành công");
            navigate("/");
            // Xử lý phản hồi từ API tại đây (ví dụ: hiển thị thông báo thành công, điều hướng đến trang khác, vv)
        } catch (error) {
            alert(error.response.data);
            // Xử lý lỗi tại đây (ví dụ: hiển thị thông báo lỗi)
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
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
                <Typography.Title
                    style={{
                        color: "#b8a45b",
                        fontSize: "32px",
                        fontWeight: "bold",
                        marginBottom: "16px",
                        textAlign: "center",
                        padding: "12px 16px ",
                        textTransform: "uppercase"
                    }}
                >
                    Đăng nhập Poly Food
                </Typography.Title>
                <Form.Item
                    name="email"
                    rules={[
                        { required: true, message: "Vui lòng nhập email" },
                        { type: "email", message: "Email sai định dạng" }
                    ]}
                    wrapperCol={{ offset: 4, span: 16 }}
                    hasFeedback
                >
                    <Input
                        prefix={<MailOutlined />}
                        placeholder="Email đăng nhập"
                        size={"large"}
                        allowClear
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        { required: true, message: "Vui lòng nhập mật khẩu" }
                    ]}
                    wrapperCol={{ offset: 4, span: 16 }}
                    hasFeedback
                >
                    <Input.Password
                        prefix={<LockOutlined />}
                        placeholder="Mật khẩu đăng nhập"
                        size={"large"}
                        allowClear
                    />
                </Form.Item>

                {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox style={{ color: "black" }}>Ghi nhớ tài khoản</Checkbox>
                </Form.Item> */}

                <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                    <Button type="primary" htmlType="submit" size={"large"} block style={{ backgroundColor: "rgb(255, 213, 98)", color: "black" }}>
                        Đăng nhập
                    </Button>
                </Form.Item>

                <Divider style={{ borderColor: "#b8a45b", color: "#f34848" }}><a href="/signup">Đăng ký</a> hoặc Đăng nhập với</Divider>

                <div className="socialLogin">
                    <GoogleOutlined size={"large"} style={{ color: "red" }} />
                    <FacebookFilled size={"large"} style={{ color: "blue" }} />
                </div>
            </Form>
        </div>
    );
}
export default Signin;