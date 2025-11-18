import { NavLink } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './style.scss';
import { useCartContext } from '../../context/useCartContext';

export const Navbar = () => {
  const { cart } = useCartContext();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badgeText = totalItems > 9 ? '9+' : totalItems;

  return (
    <nav className="navbar">
      <div className="navbar__logo">MyShop</div>
      <ul className="navbar__links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'active-link' : undefined
            }
          >
            Products
          </NavLink>
        </li>
        <li>
          {totalItems > 0 ? (
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? 'active-link cart-link' : 'cart-link'
              }
              title={`${totalItems} item${totalItems !== 1 ? 's' : ''} in cart`}
            >
              <div className="cart-icon-container">
                <ShoppingCartOutlined className="cart-icon" />
                <span className="cart-badge" key={badgeText}>
                  {badgeText}
                </span>
              </div>
            </NavLink>
          ) : (
            // Disabled cart link (not clickable)
            <span
              className="cart-link disabled"
              title="Your cart is empty"
            >
              <div className="cart-icon-container">
                <ShoppingCartOutlined className="cart-icon" />
              </div>
            </span>
          )}
        </li>
      </ul>
    </nav>
  );
};
