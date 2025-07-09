import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HamburgerIcon from '../../assets/hamberger.svg';
import ProfileIcon from '../../assets/profile.svg';
import CartIcon from '../../assets/ShoppingCart.svg';
import SearchBar from '../SearchBar';

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/products?name=${encodeURIComponent(search)}`);
    }
  };

  return (
    <header className="w-full bg-white shadow-md px-4 py-3 flex items-center justify-between dt:px-10 relative">
      <div className="flex items-center">
        <Link to="/" className="text-gray-700 text-lg">
          ShopMall
        </Link>
      </div>

      <div className="flex-1 flex justify-center mx-4">
        <SearchBar
          value={search}
          onChange={e => setSearch(e.target.value)}
          onSearch={handleSearch}
        />
      </div>

      <div className="hidden dt:flex items-center gap-4 text-gray-700 ml-auto">
        <Link to="/profile">
          <img src={ProfileIcon} alt="profile" className="w-6 h-6" />
        </Link>
        <Link to="/signup">Sign up</Link>
        <Link to="/shoppingcart">
          <img src={CartIcon} alt="cart" className="w-6 h-6" />
        </Link>
        <Link to="/shoppingcart">Go to Cart</Link>
      </div>

      <button
        className="dt:hidden ml-auto"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <img
          src={HamburgerIcon}
          alt="menu"
          className="w-6 h-6 cursor-pointer"
        />
      </button>

      {menuOpen && (
        <div 
        ref={menuRef}
        className="absolute top-full left-0 w-full bg-white shadow-md py-2 px-4 dt:hidden z-10">
          <Link to="/" className="block py-2">
            Home
          </Link>
          <Link to="/signup" className="block py-2">
            Sign Up
          </Link>
          <Link to="/shoppingcart" className="block py-2">
            Cart
          </Link>
        </div>
      )}
    </header>
  );
};
