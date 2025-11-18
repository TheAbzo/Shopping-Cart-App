import { faker } from '@faker-js/faker';

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

const TOTAL_PRODUCTS = 10000;

// Generate fake products once on module load
const products: Product[] = Array.from({ length: TOTAL_PRODUCTS }).map(
  (_, i) => ({
    id: i + 1,
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: parseFloat(faker.commerce.price()),
    image: `https://picsum.photos/seed/${i + 1}/200/200`,
  })
);

type FetchProductsResult = {
  data: Product[];
  total: number;
  page: number;
  limit: number;
};

export function fetchProducts({
  page = 1,
  limit = 50,
}): Promise<FetchProductsResult> {
  return new Promise((resolve) => {
    const start = (page - 1) * limit;
    const end = start + limit;
    setTimeout(() => {
      resolve({
        data: products.slice(start, end),
        total: TOTAL_PRODUCTS,
        page,
        limit,
      });
    }, 400); // simulate network delay
  });
}

export function fetchProductById(id: number): Promise<Product> {
  return new Promise((resolve, reject) => {
    const product = products.find((p) => p.id === id);
    setTimeout(() => {
      if (product) resolve(product);
      else reject(new Error('Product not found'));
    }, 300);
  });
}
