import {
  useInfiniteQuery,
  type QueryFunctionContext,
} from '@tanstack/react-query';
import { fetchProducts } from '../api/fakeApi';
import type { Product } from '../types/product';

type FetchProductsResult = {
  data: Product[];
  total: number;
  page: number;
  limit: number;
};

export const useProducts = () => {
  return useInfiniteQuery<FetchProductsResult, Error>({
    queryKey: ['products'],
    queryFn: async ({ pageParam = 1 }: QueryFunctionContext) => {
      const page = typeof pageParam === 'number' ? pageParam : 1;
      return fetchProducts({ page, limit: 50 });
    },
    getNextPageParam: (lastPage) => {
      const loadedItems = lastPage.page * lastPage.limit;
      return loadedItems < lastPage.total ? lastPage.page + 1 : undefined;
    },
    initialPageParam: 1,
  });
};
