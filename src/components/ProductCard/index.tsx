import { Link } from 'react-router-dom';
import './style.scss';
import type { Product } from '../../api/fakeApi';
import { Button } from 'antd';
import { useCartContext } from '../../context/useCartContext';

export const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCartContext();

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-card__link">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/images/fallback.jpg';
          }}
        />
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__price">${product.price.toFixed(2)}</p>
      </Link>

      <Button type="primary" block onClick={() => addToCart(product)}>
        Add to Cart
      </Button>
    </div>
  );
};
