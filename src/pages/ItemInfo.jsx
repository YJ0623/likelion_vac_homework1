import { useParams } from "react-router-dom"
import itemData from "../data/items.json";
import { useState } from "react";
import Modal from "../components/Modal";

export const ItemInfo = () => {
  const SampleImg = "https://cdn-icons-png.flaticon.com/512/582/582929.png"
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = () => {
    setShowModal(true);
  };

  const onIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const onDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const filteredItem = itemData.filter((item) => String(item.id) === String(id));

  return (
    <div className="flex justify-center items-start p-10">
      {filteredItem.length > 0 ? (
        filteredItem.map((item) => (
          <div
            key={item.id}
            className="flex w-[1000px] gap-20 p-10 shadow-md rounded-xl"
          >
            <img src={SampleImg} alt={item.name} className="w-[280px] h-[280px]" />

            <div className="grid grid-cols-2 w-full gap-x-12">
              <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <p className="text-gray-500 text-sm">{item.category}</p>
                  <h1 className="text-2xl font-bold">{item.name}</h1>
                  <p className="text-gray-600">description</p>

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
                className="w-full h-12 bg-purple-700 text-white rounded-md mt-4"
                onClick={handleAddToCart}
              >
                장바구니
                </button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-red-600 font-bold">상품을 찾을 수 없습니다.</div>
      )}
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
};
