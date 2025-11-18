import { Link } from 'react-router-dom';
import './style.scss';
import type { Product } from '../../api/fakeApi';
import { Button } from 'antd';

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-card__image" />
      <h3 className="product-card__name">{product.name}</h3>
      <p className="product-card__price">${product.price.toFixed(2)}</p>
      <Link to={`/product/${product.id}`}>
        <Button type="primary" block>
          View Details
        </Button>
      </Link>
    </div>
  );
};
