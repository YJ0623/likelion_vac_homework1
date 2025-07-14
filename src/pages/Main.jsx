import { useEffect, useState } from 'react';
import ItemCards from '../components/ItemCards';
import { fetchAllProducts } from '../apis/products';

export const Main = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchAllProducts();
        setProducts(data);
        setError(null);
      } catch (err) {
        setError('상품을 불러오지 못했습니다.');
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러: {error}</div>;
  if (!products.length) return <div className="font-bold text-2xl flex justify-center items-center h-screen">상품이 없습니다.</div>;

  return (
    <section className="dt:px-20 ph:px-5 mb-20">
      <div className="font-inter font-bold text-[26px] leading-[36px] mt-4">
        Welcome to ShopMall</div>

      <div className="font-inter text-[14px] leading-[24px]">Discover our latest products and deals</div>

      <div className="flex items-center justify-between mt-3 mb-3">
        <div className="font-inter text-[20px] leading-[32px] font-semibold">Featured Products</div>
        <div className="text-[#4f46E5] cursor-pointer">View All</div>
      </div>

      <main className="grid grid-cols-2 dt:grid-cols-4 gap-[20px]">
        {products.map((item) => (
          <ItemCards key={item.id} item={item} />
        ))}
      </main>
    </section>
  );
}
export default Main;