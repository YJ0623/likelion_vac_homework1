import instance from './instance';

export const fetchAllProducts = async () => {
  const res = await instance.get('/products');
  return res.data;
};

export const fetchProductInfo = async (id) => {
  const res = await instance.get(`/products/${id}`);
  return res.data;
};

export const searchProducts = async (keyword) => {
  const res = await instance.get('/products', {
    params: { productName: keyword }
  });
  return res.data;
};