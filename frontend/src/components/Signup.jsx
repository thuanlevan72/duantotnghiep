import React, { useEffect, useState } from "react";
import { Button, Form, Input, Typography } from "antd";
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
    values.image ?? formData.append("Avatar", values.image.file); // nếu có ảnh thì mới gửi lên không thì không gửi
    formData.append("Password", values.password);
    formData.append("Status", 1);
    formData.append("DecentralizationId", 3);
    
    console.log(dataPost)
    try {
      const response = await UserApi.Register(formData); // đưa dữ liệu lên đăng ký
      alert("bạn đã đăng ký thành công");
      navigate("signin")
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
            color: "#f34848",
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "16px",
            textAlign: "center",
            padding: "10px 0",
          }}
        >
          Đăng ký Poly Food
        </Typography.Title>
        <Form.Item
          label="Họ tên"
          name="username"
          rules={[{ required: true, message: "Vui lòng nhập tên" }]}
        >
          <Input placeholder="Nhập tên của bạn" size={"large"} />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, type: "email", message: "Vui lòng nhập email" },
          ]}
        >
          <Input placeholder="Nhập email của bạn" size={"large"} />
        </Form.Item>

        <Form.Item label="Ảnh" name="image">
          <Upload
            listType="picture"
            accept=".png,.jpg,.jpeg,.webp"
            maxCount={1}
          >
            <Button>Tải lên</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
        >
          <Input.Password placeholder="Nhập mật khẩu của bạn" size={"large"} />
        </Form.Item>

        <Form.Item
          label="Xác nhận"
          name="repassword"
          rules={[{ required: true, message: "Vui lòng nhập lại mật khẩu" }]}
        >
          <Input.Password placeholder="Nhập lại mật khẩu" size={"large"} />
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
          >
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Signup;
