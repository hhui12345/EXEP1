import ProductPage from './pages/product/Product';
import ProductDetail from './pages/product/ProductDetail';
import AboutPage from './pages/about/About';
import LoginPage from './pages/login/Login';
import RegisterPage from './pages/login/Register';

const routes = [
  //client routes
  {
    path: '/',

    children: [
      {
        path: 'products',
        children: [
          { index: true, element: <ProductPage /> }, //index: true tương đương path:''
          { path: 'detail/:id', element: <ProductDetail /> },
        ],
      },
      {
        path: 'about',
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
    ],
  },
];

export default routes;
