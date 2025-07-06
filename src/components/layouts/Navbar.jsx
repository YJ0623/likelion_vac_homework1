import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HamburgerIcon from '../../assets/hamberger.svg';
import ProfileIcon from '../../assets/profile.svg';
import CartIcon from '../../assets/ShoppingCart.svg';

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

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

  return (
    <header className="w-full bg-white shadow-md px-4 py-3 flex items-center justify-between dt:px-10 relative">
      {/* 왼쪽 영역: 로고 */}
      <div className="flex items-center">
        <Link to="/" className="text-gray-700 text-lg">
          ShopMall
        </Link>
      </div>

      {/* 데스크탑 메뉴 (오른쪽 아이콘) */}
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

      {/* 모바일 메뉴 버튼 (햄버거) */}
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

      {/* 모바일 메뉴 드롭다운 */}
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
