import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/home/Home_backup";
import AdminApp from "../src/pages/admin/AdminApp";
import ProductPage from './pages/product/Product';
import ProductDetail from './pages/product/ProductDetail';
import AboutPage from './pages/about/About';
import LoginPage from './pages/login/Login';
import RegisterPage from './pages/login/Register';
import CartPage from "./pages/cart/CartPage";

const routes = [
  //client routes
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        children: [
          { index: true, element: <HomePage /> },
        ],
      },
      {
        path: "products",
        children: [
          { index: true, element: <ProductPage /> }, //index: true tương đương path:''
          { path: "detail/:id", element: <ProductDetail /> },
        ],
      },
      {
        path: "about",
        children: [{ index: true, element: <AboutPage /> }],
      },
      {
        path: 'user/login',
        children: [{ index: true, element: <LoginPage /> }],
      },
      {
        path: 'user/register',
        children: [{ index: true, element: <RegisterPage /> }],
      },
      {
        path: 'cart',
        children: [{ index: true, element: <CartPage /> }],
      },
    ],
  },
  {
    path: "admin",
    children: [{ index: true, element: <AdminApp /> }],
  },
];

export default routes;
