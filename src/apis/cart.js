import axiosInstance from './axios';

const userId = 11;

export const getCartData = async (userId) => {
    const res = await axiosInstance.get(`/cart?userId=${userId}`);
    return res.data;
}

export const addToCart = async (productId, quantity) => {
    const res = await  axiosInstance.post(`/cart?userId=${userId}`,{
        productId,
        quantity,
    });
    console.log(res.data);
    return res.data;
}

export const deleteItem = async (productId) => {
  if (!productId) throw new Error("productId 없음");

  const res = await axiosInstance.delete(`/cart/${productId}?userId=${userId}`);
  return res.data;
};
