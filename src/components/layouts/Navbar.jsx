import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HamburgerIcon from '../../assets/hamberger.svg';
import ProfileIcon from '../../assets/profile.svg';
import CartIcon from '../../assets/ShoppingCart.svg';
import SearchBar from '../SearchBar';
import { useAuthStore } from '../../../stores/useAuthStore';

export const NavBar = () => {
  const { isLoggedIn, clearAuth  } = useAuthStore();

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleCartClick = () => {
    if (!isLoggedIn) {
      alert("로그인이 필요합니다. 로그인 페이지로 이동합니다.");
      navigate('/login');
    } else {
      navigate('/cart');
    }
  };

  console.log(isLoggedIn);
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
      navigate(`/search?keyword=${encodeURIComponent(search)}`);
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
        {isLoggedIn ? (
        <button
        className=' text-gray-700 pr-[20px]'
        onClick={() => {
          clearAuth();
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
        }}>
          로그아웃
        </button>
      ) : (
        <Link to="/login">로그인</Link>
      )}
        <Link to="/profile">
          <img src={ProfileIcon} alt="profile" className="w-6 h-6" />
        </Link>
        <Link to="/signup">Sign up</Link>
      <button onClick={handleCartClick}>
        <img src={CartIcon} alt="cart" className="w-6 h-6" />
      </button>
      <button onClick={handleCartClick}>Go to Cart</button>
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
          <Link to="/" className="block py-2">Home</Link>
          <Link to="/signup" className="block py-2">Sign Up</Link>
          <button onClick={handleCartClick} className="block py-2">Cart</button>
          {isLoggedIn ? (
            <button
              onClick={() => {
                clearAuth();
                localStorage.removeItem("auth-storage");
              }}
              className="block py-2"
            >
              로그아웃
            </button>
          ) : (
            <Link to="/login" className="block py-2">로그인</Link>
          )}
        </div>
      )}
    </header>
  );
};