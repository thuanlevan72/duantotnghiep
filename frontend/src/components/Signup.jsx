import React, { useEffect, useState } from "react";
import { Button, Form, Input, Typography } from "antd";
import { UserOutlined, MailOutlined, UploadOutlined, LockOutlined } from '@ant-design/icons';
import Upload from "antd/es/upload/Upload";
import UserApi from "../api/security/UserApi";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [dataPost, setDataPost] = useState({
        userName: "",
        email: "",
        avatar: [],
        password: "",
        status: 1,
        decentralizationId: 3,
    });
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await UserApi.getAll(); // Thay đổi '/api/data' thành URL của API thực tế bạn muốn gọi
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    const onFinish = async (values) => {
        console.log("Success:", values);
        const formData = new FormData();
        formData.append("UserName", values.username);
        formData.append("Email", values.email);
        formData.append("Avatar",values.image ? values.image.file.originFileObj : null); // nếu có ảnh thì mới gửi lên không thì không gửi
        formData.append("Password", values.password);
        formData.append("Status", 1);
        formData.append("DecentralizationId", 3);

        console.log(formData)
        try {
            const response = await UserApi.Register(formData); // đưa dữ liệu lên đăng ký
            alert("bạn đã đăng ký thành công");
            navigate("/signin")
            // Xử lý phản hồi từ API tại đây (ví dụ: hiển thị thông báo thành công, điều hướng đến trang khác, vv)
        } catch (error) {
            console.error(error);
            alert(error.response.data);
            // Xử lý lỗi tại đây (ví dụ: hiển thị thông báo lỗi)
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <div className="login">
            <Form
                className="loginForm"
                name="basic"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 500, width: "100%" }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                encType="multipart/form-data"
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
                    Đăng ký Poly Food
                </Typography.Title>
                <Form.Item
                    name="username"
                    rules={[
                        { required: true, message: "Vui lòng nhập tên" },
                        { min: 8, message: "Tên tôi thiểu 8 ký tự" },
                    ]}
                    wrapperCol={{ offset: 4, span: 16 }}
                    hasFeedback
                >
                    <Input
                        prefix={<UserOutlined />}
                        placeholder="Nhập tên của bạn"
                        size={"large"}
                        allowClear
                    />
                </Form.Item>

                <Form.Item
                    name="email"
                    rules={[
                        { required: true, message: "Vui lòng nhập email" },
                        { type: 'email', message: "Email sai định dạng" },
                    ]}
                    wrapperCol={{ offset: 4, span: 16 }}
                    hasFeedback
                >
                    <Input
                        prefix={<MailOutlined />}
                        placeholder="Nhập email của bạn"
                        size={"large"}
                        allowClear
                    />
                </Form.Item>

                <Form.Item
                    name="image"
                    rules={[
                        { required: false }
                    ]}
                    wrapperCol={{ offset: 4, span: 16 }}
                >
                    <Upload
                        listType="picture"
                        accept=".png,.jpg,.jpeg,.webp"
                        maxCount={1}
                    >
                        <Button shape="round" icon={<UploadOutlined />}>Ảnh đại diện</Button>
                    </Upload>
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        { required: true, message: "Vui lòng nhập mật khẩu" },
                        { min: 8, message: "Mật khẩu tối thiểu 8 ký tự" }
                    ]}
                    wrapperCol={{ offset: 4, span: 16 }}
                    hasFeedback
                >
                    <Input.Password
                        prefix={<LockOutlined />}
                        placeholder="Nhập mật khẩu của bạn"
                        size={"large"}
                        allowClear
                    />
                </Form.Item>

                <Form.Item
                    name="repassword"
                    rules={[
                        { required: true, message: "Nhập lại mật khẩu" },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue("password") === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(
                                    'Mật khẩu không khớp'
                                );
                            }
                        })
                    ]}
                    wrapperCol={{ offset: 4, span: 16 }}
                    hasFeedback
                >
                    <Input.Password
                        prefix={<LockOutlined />}
                        placeholder="Nhập lại mật khẩu"
                        size={"large"}
                        allowClear
                    />
                </Form.Item>

                <Form.Item
                    wrapperCol={{ offset: 4, span: 16 }}
                    style={{ width: "100%" }}
                >
                    <Button
                        type="primary"
                        htmlType="submit"
                        block
                        style={{
                            backgroundColor: "rgb(255, 213, 98)",
                            color: "black",
                            width: "100%",
                        }}
                        size={"large"}
                        rules={[
                            { confirm: "Đăng ký thành công" }
                        ]}
                    >
                        Đăng ký
                    </Button>
                </Form.Item>
            </Form>
        </div >
    );
};
export default Signup;