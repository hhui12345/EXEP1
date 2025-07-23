import { useRoutes } from 'react-router-dom';
import routes from './routes';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const content = useRoutes(routes);

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>{content}</Suspense>
      <ToastContainer />
    </>
  );
}

export default App;