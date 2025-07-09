import axios from "axios";

//상품검색
export const searchProducts = async (search) => {
  const response = await axios.get(`Link/products`, {
    params: { name: search },
  });

  //api 명세서 따라서 product만 반환
  return response.data.products;
};
