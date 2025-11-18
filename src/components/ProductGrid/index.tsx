import { useEffect, useRef } from 'react';
import './style.scss';
import { Spin } from 'antd';
import { useProducts } from '../../hooks/useProducts';
import { ProductCard } from '../ProductCard';

export const ProductGrid = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useProducts();

  const gridRef = useRef<HTMLDivElement>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current || !loadMoreRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      {
        root: gridRef.current,
        rootMargin: '200px',
        threshold: 0.1,
      }
    );

    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [hasNextPage, fetchNextPage]);

  return (
    <div className="product-grid" ref={gridRef}>
      {data?.pages.map((page) =>
        page.data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
      <div ref={loadMoreRef} className="load-more">
        {isFetchingNextPage && <Spin size="large" />}
      </div>
    </div>
  );
};
