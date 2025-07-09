import React, { useState } from "react";
import CartData from "../data/cart.json";
import { Link } from "react-router-dom";

export const ShoppingCart = () => {
    const SampleImg="https://cdn-icons-png.flaticon.com/512/582/582929.png"

  // 체크박스 상태
    const [checked, setChecked] = useState(CartData.map(() => true));
    const allChecked = checked.every(Boolean);

  // 전체 선택
    const handleAllCheck = () => setChecked(checked.map(() => !allChecked));
  // 개별 선택
    const handleCheck = idx => setChecked(checked.map((c, i) => i === idx ? !c : c));

    const isEmpty = CartData.length === 0;
    const totalcost = CartData.reduce((sum, item, idx) => checked[idx] ? sum + (item.discountPrice || item.price) * item.quantity : sum, 0);

return (
    <div className="min-h-screen flex flex-col justify-items-center bg-gray-50 px-4">
        <div className="w-full max-w-2xl mx-auto mt-12 mb-6">
        <h1 className="text-2xl font-bold text-left pl-4">장바구니</h1>
        </div>

        {isEmpty ? (
        <div className="flex flex-col items-center">
            <p className="mb-4 text-lg">장바구니가 비었습니다.</p>
            <Link to="/" className="bg-[#4F46E5] text-white px-4 py-2 rounded hover:bg-blue-600">
            쇼핑하러 가기
            </Link>
        </div>
        ) : (
        <div className="w-full max-w-2xl mx-auto bg-white rounded shadow p-8">
          {/* 헤더 */}
            <div className="flex items-center border-b pb-2 font-semibold text-gray-700">
            <div className="w-10 flex justify-center">
                <input type="checkbox" checked={allChecked} onChange={handleAllCheck} className="accent-blue-600 cursor-pointer" />
            </div>
            <div className="w-24"></div>
            <div className="flex-1">상품명</div>
            <div className="w-24 text-center">담은 수량</div>
            <div className="w-32 text-right">가격</div>
            <div className="w-8"></div>
        </div>

          {/* 장바구니 리스트 */}
            {CartData.map((item, idx) => (
            <div key={item.id} className="flex items-center border-b py-6 last:border-b-0">

              {/* 체크박스 */}
                <div className="w-10 flex justify-center">
                <input
                    type="checkbox"
                    checked={checked[idx]}
                    onChange={() => handleCheck(idx)}
                    className="accent-blue-600 cursor-pointer"
                />
            </div>

                <div className="w-24 flex justify-center">
                <img
                src={SampleImg}
                alt="상품 이미지"
                width="50"
                height="50"
                className ="object-cover rounded"
                />
                </div>
                <div className="flex-1 text-left">{item.name}</div>
                <div className="w-24 text-center">{item.quantity}</div>
                <div className="w-32 text-right">{(item.price * item.quantity).toLocaleString()} 원</div>

                <div className="w-8 flex justify-center">
                <button className="text-gray-400 hover:text-red-500 text-xl cursor-pointer">×</button>
                </div>
            </div>
        ))}

            <div className="flex justify-between items-center mt-6">
            <span className="font-bold">총액</span>
            <span className="font-bold text-[#4F46E5]">₩ {totalcost.toLocaleString()}</span>
            </div>
            <button className="w-full mt-6 bg-[#4F46E5] text-white py-2 rounded hover:bg-blue-600 cursor-pointer">
            결제하기
            </button>
        </div>
    )}
    </div>
);
};

export default ShoppingCart;
