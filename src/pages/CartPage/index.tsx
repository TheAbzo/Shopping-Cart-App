import { Button, Modal, Divider } from 'antd';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';
import { useCartContext } from '../../context/useCartContext';
import { Navbar } from '../../components/NavBar';
import { useToast } from '../../context/ToastProvider/ToastProvider';

export default function CartPage() {
  const { cart, removeFromCart, addToCart, clearCart } = useCartContext();
  const { showToast } = useToast(); // get showToast from your context
  const [isModalOpen, setModalOpen] = useState(false);
  const [isPurchasing, setIsPurchasing] = useState(false);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    if (cart.length === 0 && !isPurchasing) {
      navigate('/');
    }
  }, [cart, isPurchasing, navigate]);

  const handleConfirm = () => {
    setIsPurchasing(true);
    setModalOpen(false);

    showToast('Purchase successful! Redirecting to homepage...', 'success');

    setTimeout(() => {
      clearCart();
      setIsPurchasing(false);
      navigate('/');
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <div className="cart-page">
        <h1>Shopping Cart</h1>
        {cart.length === 0 && <p>Your cart is empty.</p>}

        {cart.map((item) => (
          <div className="cart-page__item" key={item.id}>
            <div className="cart-page__item-info">
              {item.name} × {item.quantity}
            </div>
            <div className="cart-page__item-controls">
              <span className="cart-page__price">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
              <div className="cart-page__buttons">
                <Button size="small" onClick={() => removeFromCart(item.id)}>
                  -
                </Button>
                <Button size="small" onClick={() => addToCart(item)}>
                  +
                </Button>
              </div>
            </div>
          </div>
        ))}

        {cart.length > 0 && (
          <>
            <Divider />
            <div className="cart-page__total">Total: ${total.toFixed(2)}</div>
            <Button type="primary" onClick={() => setModalOpen(true)}>
              Complete Purchase
            </Button>
          </>
        )}

        <Modal
          title="Confirm Purchase"
          open={isModalOpen}
          onCancel={() => setModalOpen(false)}
          footer={[
            <Button key="cancel" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>,
            <Button key="confirm" type="primary" onClick={handleConfirm}>
              Confirm
            </Button>,
          ]}
        >
          <p>Total amount: ${total.toFixed(2)}</p>
        </Modal>
      </div>
    </>
  );
}
