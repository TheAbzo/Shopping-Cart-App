import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchProductById } from '../../api/fakeApi';
import { useCartContext } from '../../context/useCartContext';
import { Button, Spin } from 'antd';
import './style.scss';
import { Navbar } from '../../components/NavBar';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const { addToCart } = useCartContext();

  const { data: product, isLoading } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProductById(Number(id)),
    enabled: !!id,
  });

  if (isLoading) return <Spin style={{ display: 'block', margin: '2rem auto' }} size="large" />;
  if (!product) return <div style={{ padding: '2rem' }}>Product not found.</div>;

  return (
    <>
      <Navbar />
      <div className="product-details">
        <img src={product.image} alt={product.name} className="product-details__image" />
        <div className="product-details__info">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p className="product-details__price">${product.price.toFixed(2)}</p>
          <Button type="primary" size="large" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </div>
      </div>
    </>
  );
}
