import React from "react";
import HeaderClient from "./HeaderClient";
import { Layout, Menu, Breadcrumb, Row, Col, Card } from "antd";
import FooterClient from "./FooterClient";

const { Header, Content, Footer } = Layout;

function MainContent() {
  return (
    <Layout>
      <HeaderClient />
      <Content style={{ padding: "0 50px", height: "90vh" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
          <Breadcrumb.Item>Sản phẩm</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-content"
          style={{
            width: "80%",
            margin: "20px 10%",
          }}
        >
          <Row gutter={[16, 8]}>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card
                cover={
                  <img alt="Sản phẩm 1" src="https://example.com/image1.jpg" />
                }
              >
                <Card.Meta title="Sản phẩm 1" description="Mô tả sản phẩm 1" />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card
                cover={
                  <img alt="Sản phẩm 1" src="https://example.com/image1.jpg" />
                }
              >
                <Card.Meta title="Sản phẩm 1" description="Mô tả sản phẩm 1" />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card
                cover={
                  <img alt="Sản phẩm 1" src="https://example.com/image1.jpg" />
                }
              >
                <Card.Meta title="Sản phẩm 1" description="Mô tả sản phẩm 1" />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card
                cover={
                  <img alt="Sản phẩm 1" src="https://example.com/image1.jpg" />
                }
              >
                <Card.Meta title="Sản phẩm 1" description="Mô tả sản phẩm 1" />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card
                cover={
                  <img alt="Sản phẩm 1" src="https://example.com/image1.jpg" />
                }
              >
                <Card.Meta title="Sản phẩm 1" description="Mô tả sản phẩm 1" />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card
                cover={
                  <img alt="Sản phẩm 2" src="https://example.com/image2.jpg" />
                }
              >
                <Card.Meta title="Sản phẩm 2" description="Mô tả sản phẩm 2" />
              </Card>
            </Col>
            {/* Thêm các cột sản phẩm khác tương tự */}
          </Row>
        </div>
      </Content>
      <FooterClient />
    </Layout>
  );
}

export default MainContent;
