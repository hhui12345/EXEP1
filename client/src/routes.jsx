import ProductPage from './pages/products/Product';
import ProductDetail from './pages/products/ProductDetail';
import AboutPage from './pages/about/About';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/home/Home_backup';

const routes = [
  //client routes
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'home',
        children: [
          { index: true, element: <HomePage /> }, //index: true tương đương path:''
        ],
      },
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
    ],
  },
];

export default routes;
