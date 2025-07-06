import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layouts/Layout';
import SignUp from "../src/pages/SignUp";
import Main from '../src/pages/Main';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/shoppingcart" element={<ShoppingCart/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
