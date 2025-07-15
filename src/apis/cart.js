import instance from './instance';

const userId = 11;

export const getCartData = async (userId) => {
    const res = await instance.get(`/cart?userId=${userId}`);
    return res.data;
}

export const addToCart = async (productId, quantity) => {
    const res = await instance.post(`/cart?userId=${userId}`,{
        productId,
        quantity,
    });
    console.log(res.data);
    return res.data;
}

export const deleteItem = async (productId) => {
  if (!productId) throw new Error("productId 없음");

  const res = await instance.delete(`/cart/${productId}`);
  return res.data;
};
