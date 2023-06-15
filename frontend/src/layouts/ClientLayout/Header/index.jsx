import React from "react";
import { BsFillSuitHeartFill, BsCart3 } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { Layout, Menu, Input, Badge } from "antd";
const { Header } = Layout;
const { Search } = Input;
const ClientHeader = () => {
    return (
        <Header>
            <div className="container-fluid">
                <div className="header">
                    <div className="logo">
                        <a href="/">
                            <img
                                src="https://bizweb.dktcdn.net/100/385/875/themes/763342/assets/logo.png?1683272102986"
                                alt="logo"
                            />
                        </a>
                    </div>
                    <div className="menu">
                        <Search
                            placeholder="Tìm kiếm ở đây..."
                            allowClear
                            enterButton="Tìm kiếm"
                            size="large"
                        />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={["1"]}
                        >
                            <Menu.Item key={1}>Menu nhà hàng</Menu.Item>
                            <Menu.Item key={2}>Mâm cỗ chay</Menu.Item>
                            <Menu.Item key={3}>Hàng chay cấp đông</Menu.Item>
                            <Menu.Item key={4}>Sản phẩm bán chạy</Menu.Item>
                        </Menu>
                    </div>
                    <div className="button-group">
                        <div className="wishlist">
                            <Badge dot count={5} offset={[-5, 5]}>
                                <div className="wishlist-icon">
                                    <BsFillSuitHeartFill/>
                                </div>
                            </Badge>
                            <div className="wishlist-text">Yêu thích</div>
                        </div>
                        <div className="signin">
                            <div className="signin-icon">
                                <BiUser />
                            </div>
                            <div className="signin-text">Đăng nhập</div>
                        </div>
                        <div className="cart">
                            <Badge size="small" count={5} offset={[-6, 3]}>
                                <div className="cart-icon">
                                    <BsCart3 />
                                </div>
                            </Badge>
                            <div className="cart-text">Giỏ hàng</div>
                        </div>
                    </div>
                </div>
            </div>
        </Header>
    );
};

export default ClientHeader;
