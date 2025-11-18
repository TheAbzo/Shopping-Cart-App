import { Link } from 'react-router-dom';
import './style.scss';

export const Navbar = () => (
  <nav className="navbar">
    <div className="navbar__logo">MyShop</div>
    <ul className="navbar__links">
      <li><Link to="/">Products</Link></li>
      <li><Link to="/cart">Cart</Link></li>
    </ul>
  </nav>
);
