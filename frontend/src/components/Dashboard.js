import React from 'react';
import { Layout, Menu, Breadcrumb, Row, Col, Card } from 'antd';

const { Header, Content, Footer } = Layout;

function Dashboard() {
  return (
    <Layout>
      <Header>
        <Row>
        <Col  xs={12} sm={12} md={8} lg={5}>
        <img
                    alt="Sản phẩm 1"
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                  />
          </Col >
          <Col  xs={12} sm={12} md={8} lg={15}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Trang chủ</Menu.Item>
          <Menu.Item key="2">Sản phẩm</Menu.Item>
          <Menu.Item key="3">Giỏ hàng</Menu.Item>
        </Menu>
          </Col >
        </Row>
       <div>
       
       </div>
  
      </Header>
      <Content style={{ padding: '0 50px', height:"90vh" }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
          <Breadcrumb.Item>Sản phẩm</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content" style={{
          width: "80%",
          margin: "20px 10%"
        }}>
          <Row gutter={[16, 8]}>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card
                cover={
                  <img
                    alt="Sản phẩm 1"
                    src="https://example.com/image1.jpg"
                  />
                }
              >
                <Card.Meta title="Sản phẩm 1" description="Mô tả sản phẩm 1" />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card
                cover={
                  <img
                    alt="Sản phẩm 1"
                    src="https://example.com/image1.jpg"
                  />
                }
              >
                <Card.Meta title="Sản phẩm 1" description="Mô tả sản phẩm 1" />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card
                cover={
                  <img
                    alt="Sản phẩm 1"
                    src="https://example.com/image1.jpg"
                  />
                }
              >
                <Card.Meta title="Sản phẩm 1" description="Mô tả sản phẩm 1" />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card
                cover={
                  <img
                    alt="Sản phẩm 1"
                    src="https://example.com/image1.jpg"
                  />
                }
              >
                <Card.Meta title="Sản phẩm 1" description="Mô tả sản phẩm 1" />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card
                cover={
                  <img
                    alt="Sản phẩm 1"
                    src="https://example.com/image1.jpg"
                  />
                }
              >
                <Card.Meta title="Sản phẩm 1" description="Mô tả sản phẩm 1" />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card
                cover={
                  <img
                    alt="Sản phẩm 2"
                    src="https://example.com/image2.jpg"
                  />
                }
              >
                <Card.Meta title="Sản phẩm 2" description="Mô tả sản phẩm 2" />
              </Card>
            </Col>
            {/* Thêm các cột sản phẩm khác tương tự */}
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Trang bán hàng ©2023 Created by Tên của bạn</Footer>
    </Layout>
  );
}

export default Dashboard;
