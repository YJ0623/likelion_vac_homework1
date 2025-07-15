import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import Modal from "../components/Modal";
import { fetchProductInfo } from "../apis/products";
import { addToCart } from "../apis/cart";

export const ItemInfo = () => {
  const SampleImg = "https://cdn-icons-png.flaticon.com/512/582/582929.png"
  const { id } = useParams();
  const [item, setItem] = useState(null);        // 상품 정보
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null);     // 에러 상태
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);


  useEffect(() => {
    const loadItem = async () => {
      try {
        setLoading(true);
        const data = await fetchProductInfo(id);
        setItem(data);
        setError(null);
      } catch (err) {
        if (err.response && err.response.status === 404) {
          setError('해당 상품이 존재하지 않습니다.');
        } else {
          setError('상품 정보를 불러오는 중 오류가 발생했습니다.');
        }
        setItem(null);
      } finally {
        setLoading(false);
      }
    };
    loadItem();
  }, [id]);

  useEffect(()=>{
    console.log()
  },[])


  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;
  if (!item) return null;

  const handleAddToCart = async () => {
  try {
    const result = await addToCart(item.id, quantity);
    console.log("장바구니 응답 결과:", result);
    setShowModal(true);
    } catch (err) {
    console.error("장바구니 추가 실패:", err);
    alert("장바구니에 상품을 담는 데 실패했습니다.");
    }
  };

  const onIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const onDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <div className="flex justify-center items-start p-10">
      <div className="flex w-[1000px] gap-20 p-10 shadow-md rounded-xl">
        <img src={SampleImg} alt={item.name} className="w-[280px] h-[280px]" />

        <div className="grid grid-cols-2 w-full gap-x-12">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <p className="text-gray-500 text-sm">{item.category}</p>
              <h1 className="text-2xl font-bold">{item.name}</h1>
              <p className="text-gray-600">{item.description}</p>

              <div>
                <p className="mt-4 font-medium text-gray-700">구매 수량</p>
                <div className="flex items-center gap-4 mt-1">
                  <button
                    onClick={onDecrease}
                    disabled={quantity <= 1}
                    className="cursor-pointer text-xl px-2 disabled:text-gray-300"
                  >
                    -
                  </button>
                  <span className="text-lg">{quantity}</span>
                  <button onClick={onIncrease} className="cursor-pointer text-xl px-2">
                    +
                  </button>
                </div>
              </div>

              <div>
                <p className="mt-4 font-medium text-gray-700">총 상품 금액</p>
                <p className="text-2xl font-bold">
                  {(item.price * quantity).toLocaleString()}원
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end gap-4">
            <button className="cursor-pointer text-2xl">♡</button>
            <p className="text-xl font-bold">{item.price.toLocaleString()}원</p>
          </div>
          <button
            className="w-full h-12 bg-purple-700 text-white rounded-md mt-4 cursor-pointer"
            onClick={handleAddToCart}
          >
            장바구니
          </button>
        </div>
      </div>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default ItemInfo;