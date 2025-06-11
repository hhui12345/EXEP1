import ProductPage from './pages/product/Product';
import ProductDetail from './pages/product/ProductDetail';
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
