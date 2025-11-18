import { createBrowserRouter } from 'react-router-dom';
import CartPage from './pages/CartPage';
import ProductDetailsPage from './pages/ProductDetails';
import { ProductListPage } from './pages/ProductList';


export const router = createBrowserRouter([
  { path: '/', element: <ProductListPage /> },
  { path: '/product/:id', element: <ProductDetailsPage /> },
  { path: '/cart', element: <CartPage /> },
]);
