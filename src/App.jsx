import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layouts/Layout';
import SignUp from "../src/pages/SignUp";
import Main from '../src/pages/Main';
import Cart from './pages/Cart';
import { Login } from './pages/Login';
import { ItemInfo } from './pages/ItemInfo';
import SearchResultPage from './pages/SearchResult';
import KakaoRedirectPage from './pages/KakaoRedirectPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/search" element={<SearchResultPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path='/item/:id' element={<ItemInfo />} />
          <Route path="/oauth2/callback/kakao" element={<KakaoRedirectPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
