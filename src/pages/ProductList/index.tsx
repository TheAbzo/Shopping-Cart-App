import { Navbar } from '../../components/NavBar';
import { ProductGrid } from '../../components/ProductGrid';
import './style.scss';

export const ProductListPage = () => {
  console.log('Rendering ProductListPage');
  return (
    <div className="product-list-page-container">
      <Navbar />
      <div className="product-list">
        <main>
          <h1>Products</h1>
          <ProductGrid />
        </main>
      </div>
    </div>
  );
};
