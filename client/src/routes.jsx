import ProductPage from './pages/products/Product';
import ProductDetail from './pages/products/ProductDetail';
import AboutPage from './pages/about/About';

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
    ],
  },
];

export default routes;
