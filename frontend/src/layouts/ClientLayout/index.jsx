import React from "react";
import ClientHeader from "./Header";
import ClientFooter from "./Footer";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
const ClientLayout = () => {
    return (
        <div>
            <Layout className="mainLayout">
                <ClientHeader />
                <Outlet />
                <ClientFooter />
            </Layout>
        </div>
    );
};

export default ClientLayout;
