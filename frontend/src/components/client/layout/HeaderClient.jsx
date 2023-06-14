import { Col, Menu, Row, Layout, Button, Space } from "antd";
import React from "react";
const { Header } = Layout;
function HeaderClient() {
  return (
    <Header style={{}}>
      <Row>
        <Col xs={12} sm={12} md={8} lg={5}>
          <img
            alt="Sản phẩm 1"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          />
        </Col>
        <Col xs={3} sm={12} md={8} lg={10}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">Trang chủ</Menu.Item>
            <Menu.Item key="2">Sản phẩm</Menu.Item>
            <Menu.Item key="3">Giỏ hàng</Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>
  );
}

export default HeaderClient;
