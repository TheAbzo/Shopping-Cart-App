import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import 'antd/dist/reset.css';
import './styles/global.scss';
import { QueryClientProvider } from '@tanstack/react-query';
import { CartContextProvider } from './context/CartContextProvider.tsx';
import { QueryClient } from '@tanstack/react-query';
import { ToastProvider } from './context/ToastProvider/ToastProvider.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastProvider>
      <QueryClientProvider client={queryClient}>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </QueryClientProvider>
    </ToastProvider>
  </StrictMode>
);
