import React from "react";
import AdminHeader from "./Header";
import AdminFooter from "./Footer";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
        <div>
            <AdminHeader />
            <Outlet />
            <AdminFooter />
        </div>
    );
};

export default AdminLayout;
