import { Button, Modal, Divider } from 'antd';
import { useState } from 'react';
import './style.scss';
import { useCartContext } from '../../context/useCartContext';
import { Navbar } from '../../components/NavBar';

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCartContext();
  const [isModalOpen, setModalOpen] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleConfirm = () => {
    clearCart();
    setModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="cart-page">
        <h1>Shopping Cart</h1>
        {cart.length === 0 && <p>Your cart is empty.</p>}

        {cart.map((item) => (
          <div className="cart-page__item" key={item.id}>
            <div>
              {item.name} × {item.quantity}
            </div>
            <div>
              <span className="cart-page__price">${(item.price * item.quantity).toFixed(2)}</span>
              <Button danger size="small" onClick={() => removeFromCart(item.id)} style={{ marginLeft: 8 }}>
                Remove
              </Button>
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
