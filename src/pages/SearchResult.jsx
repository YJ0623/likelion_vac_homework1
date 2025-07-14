import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchProducts } from '../apis/products';
import ItemCards from '../components/ItemCards';


const SearchResultPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');



  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await searchProducts(keyword);
        setProducts(data);
        setError(null);
      } catch (err) {
        setError('검색 결과가 없습니다.');
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [keyword]);

  if (loading) return <div className="font-bold text-2xl flex justify-center items-center h-screen">로딩중...</div>;
  if (error) return <div>에러: {error}</div>;
  if (!products.length) return <div className="font-bold text-2xl flex justify-center items-center h-screen">
    검색 결과가 없습니다.</div>;


  return (
    <main className="mt-8 mx-8 grid grid-cols-2 dt:grid-cols-4 gap-[20px]">
      {products.map(item => (
        <ItemCards key={item.id} item={item} />
      ))}
    </main>
  );
};
export default SearchResultPage;






