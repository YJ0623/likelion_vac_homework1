import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layouts/Layout';
import SignUp from "../src/pages/SignUp";
import Main from '../src/pages/Main';
import ShoppingCart from './pages/ShoppingCart';
import { SocialLogin } from './pages/SocialLogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/shoppingcart" element={<ShoppingCart/>}/>
          <Route path="/socialLogin" element={<SocialLogin/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
