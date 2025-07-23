import axios from './axios';

export const fetchAllProducts = async () => {
  const res = await axios.get('/products');
  return res.data;
};

export const fetchProductInfo = async (id) => {
  const res = await axios.get(`/products/${id}`);
  return res.data;
};

export const searchProducts = async (keyword) => {
  const res = await axios.get('/products', {
    params: { productName: keyword }
  });
  return res.data;
};