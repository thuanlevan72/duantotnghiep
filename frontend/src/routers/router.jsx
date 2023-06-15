import ClientLayout from "../layouts/ClientLayout";
import AdminLayout from "../layouts/AdminLayout";
import HomePage from "../pages/HomePage";
import ProductList from "../components/ProductList";
import ProductDetail from "../components/ProductDetail";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import Profile from "../components/Profile";
import Contact from "../components/Contact";

const routes = [
    {
        path: "/",
        element: <ClientLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "profile", element: <Profile /> },
            { path: "product", element: <ProductList /> },
            { path: "product/:id", element: <ProductDetail /> },
            { path: "contact", element: <Contact /> },
        ],
    },
    { path: "signup", element: <Signup /> },
    { path: "signin", element: <Signin /> },
    { path: "/admin", element: <AdminLayout />, children: [] },
];

export default routes;
