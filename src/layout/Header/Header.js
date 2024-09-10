import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Header.css';
import { Link } from 'react-router-dom';
// import Home from '../../components/Home';
// import Orders from '../../components/order/Orders';
// import AddProduct from '../../components/listProduct/AddProduct'
function Header() {
  return (
    <>
      <nav className='header'>
        <div className='headerTop'>
          <div className='headerLeftNav'>
            <MenuIcon className='menuicon' />
          </div>
          {/* Logo */}
          <Link to="/">
            <img src="https://pngimg.com/d/amazon_PNG25.png" alt="logo image" className='logoimg' />
          </Link>
          {/* search box */}
          <div className='headerSearch'>
            <input type="text" className="headerSearchInput" />
            <SearchIcon className="headerSearchIcon" />
          </div>
          <div className='nav-lang'>
            <select>
              <option value="English" key="English">English</option>
              <option value="Hindi" key="Hindi">हिन्दी </option>
              <option value="Marathi" key="Marathi ">मराठी </option>
            </select>
          </div>
          <div className='nav-options'>
            <Link to="/Login" className="nav-SignIn">
              <span>Hello,</span>
              <span>Sign in</span>
            </Link>
            <Link to="/Orders" className='nav-Orders'>
              <span>Returns</span>
              <span>&Orders</span>
            </Link>
            <Link to="/Cart" className='nav-Cart'>
              <ShoppingCartIcon />
              <span className='cart-span'>4</span>
            </Link>
            <Link to="/Profile" className='nav-Orders'>
              <span>Your</span>
              <span>Profile</span>
            </Link>
          </div>
        </div>

      </nav>
      <div className='header-bottom'>
        <Link to="/ListProduct" className="header-bottom-option">
          <span>All Products</span>
        </Link>
        <Link to="/AddProduct" className="header-bottom-option">
          <span>Sell</span>
        </Link>
        <Link to="/bestsellers" className="header-bottom-option">
          <span>Best Sellers</span>
        </Link>
        <Link to="/mobiles" className="header-bottom-option">
          <span>Mobiles</span>
        </Link>
        <Link to="/deals" className="header-bottom-option">
          <span>Today's Deals</span>
        </Link>
        <Link to="/prime" className="header-bottom-option">
          <span>Prime</span>
        </Link>
        <Link to="/customer-service" className="header-bottom-option">
          <span>Customer Service</span>
        </Link>
        <Link to="/electronics" className="header-bottom-option">
          <span>Electronics</span>
        </Link>
        <Link to="/new-releases" className="header-bottom-option">
          <span>New Releases</span>
        </Link>
        <Link to="/home-kitchen" className="header-bottom-option">
          <span>Home & Kitchen</span>
        </Link>
        <Link to="/fashion" className="header-bottom-option">
          <span>Fashion</span>
        </Link>
        <Link to="/amazon-pay" className="header-bottom-option">
          <span>Amazon Pay</span>
        </Link>
        <Link to="/computers" className="header-bottom-option">
          <span>Computers</span>
        </Link>
        <Link to="/gift-ideas" className="header-bottom-option">
          <span>Gift Ideas</span>
        </Link>
      </div>
     
    </>
  );
}

export default Header;
