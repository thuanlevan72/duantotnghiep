import React from "react";
import Slider from "../components/Slider";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { Row, Col, Card, Image, Typography, Badge, Rate } from "antd";
const HomePage = () => {
    return (
        <div className="content">
            <Slider />
            <div className="main-home">
                <div className="list-category">
                    <div className="list-category-menu">
                        <h2 className="list-category-title">Thực phẩm chay</h2>
                        <div className="site-layout-content">
                            <Row gutter={[16, 8]}>
                                <Col xs={24} sm={12} md={8} lg={6} className="product-item">
                                    <Badge.Ribbon text="-50%" color="red" title="Giảm giá">
                                        <a
                                            href="#link"
                                            className="bookmarkHeart"
                                            title="Yêu thích"
                                        >
                                            <BsFillSuitHeartFill />
                                        </a>
                                        <Card
                                            cover={
                                                <Image src="https://bizweb.dktcdn.net/thumb/1024x1024/100/385/875/products/heo-quay-chay.jpg?v=1588668134473" />
                                            }
                                        >
                                            <Card.Meta
                                                title={
                                                    <Typography.Paragraph>
                                                        <div className="info-product">
                                                            <Typography.Text className="food-name">
                                                                <a href="#link">
                                                                    Heo quay
                                                                    chay 200g
                                                                </a>
                                                            </Typography.Text>
                                                            <Rate className="rate" />
                                                            <Typography.Text className="food-price">
                                                                40.000₫
                                                            </Typography.Text>
                                                            <Typography.Text
                                                                delete
                                                                type="secondary"
                                                                className="food-discount"
                                                            >
                                                                20.000₫
                                                            </Typography.Text>
                                                        </div>
                                                    </Typography.Paragraph>
                                                }
                                            />
                                        </Card>
                                    </Badge.Ribbon>
                                </Col>
                                <Col xs={24} sm={12} md={8} lg={6}>
                                    <Badge.Ribbon text="-50%" color="red">
                                        <a
                                            href="#link"
                                            className="bookmarkHeart"
                                            title="Yêu thích"
                                        >
                                            <BsFillSuitHeartFill />
                                        </a>
                                        <Card
                                            cover={
                                                <Image src="https://bizweb.dktcdn.net/thumb/1024x1024/100/385/875/products/canh-mang-chay.jpg?v=1588667629713" />
                                            }
                                        >
                                            <Card.Meta
                                                title={
                                                    <Typography.Paragraph>
                                                        <div className="info-product">
                                                            <Typography.Text className="food-name">
                                                                <a href="#link">
                                                                    Canh măng
                                                                    chay hộp
                                                                </a>
                                                            </Typography.Text>
                                                            <Rate className="rate" />
                                                            <Typography.Text className="food-price">
                                                                40.000₫
                                                            </Typography.Text>
                                                            <Typography.Text
                                                                delete
                                                                type="secondary"
                                                                className="food-discount"
                                                            >
                                                                20.000₫
                                                            </Typography.Text>
                                                        </div>
                                                    </Typography.Paragraph>
                                                }
                                            />
                                        </Card>
                                    </Badge.Ribbon>
                                </Col>
                                <Col xs={24} sm={12} md={8} lg={6}>
                                    <Badge.Ribbon text="-50%" color="red">
                                        <a
                                            href="#link"
                                            className="bookmarkHeart"
                                            title="Yêu thích"
                                        >
                                            <BsFillSuitHeartFill />
                                        </a>
                                        <Card
                                            cover={
                                                <Image src="https://bizweb.dktcdn.net/thumb/1024x1024/100/385/875/products/gio-nam-1kg.jpg?v=1588667931927" />
                                            }
                                        >
                                            <Card.Meta
                                                title={
                                                    <Typography.Paragraph>
                                                        <div className="info-product">
                                                            <Typography.Text className="food-name">
                                                                <a href="#link">
                                                                    Giò nấm 1kg
                                                                </a>
                                                            </Typography.Text>
                                                            <Rate className="rate" />
                                                            <Typography.Text className="food-price">
                                                                40.000₫
                                                            </Typography.Text>
                                                            <Typography.Text
                                                                delete
                                                                type="secondary"
                                                                className="food-discount"
                                                            >
                                                                20.000₫
                                                            </Typography.Text>
                                                        </div>
                                                    </Typography.Paragraph>
                                                }
                                            />
                                        </Card>
                                    </Badge.Ribbon>
                                </Col>
                                <Col xs={24} sm={12} md={8} lg={6}>
                                    <Badge.Ribbon text="-50%" color="red">
                                        <a
                                            href="#link"
                                            className="bookmarkHeart"
                                            title="Yêu thích"
                                        >
                                            <BsFillSuitHeartFill />
                                        </a>
                                        <Card
                                            cover={
                                                <Image src="https://bizweb.dktcdn.net/thumb/1024x1024/100/385/875/products/doi-chay-500g.jpg?v=1588667671853" />
                                            }
                                        >
                                            <Card.Meta
                                                title={
                                                    <Typography.Paragraph>
                                                        <div className="info-product">
                                                            <Typography.Text className="food-name">
                                                                <a href="#link">
                                                                    Dồi chay
                                                                    500gr
                                                                </a>
                                                            </Typography.Text>
                                                            <Rate className="rate" />
                                                            <Typography.Text className="food-price">
                                                                40.000₫
                                                            </Typography.Text>
                                                            <Typography.Text
                                                                delete
                                                                type="secondary"
                                                                className="food-discount"
                                                            >
                                                                20.000₫
                                                            </Typography.Text>
                                                        </div>
                                                    </Typography.Paragraph>
                                                }
                                            />
                                        </Card>
                                    </Badge.Ribbon>
                                </Col>
                                {/* Thêm các cột sản phẩm khác tương tự */}
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
