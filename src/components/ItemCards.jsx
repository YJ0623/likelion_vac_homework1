import AddButton from "../components/Button";
import React from "react";
import swal from "sweetalert";

const ItemCards = ({ item }) => {

  const SampleImg="https://cdn-icons-png.flaticon.com/512/582/582929.png"
  return (
    <div 
      className="bg-white rounded-xl shadow-md w-auto h-auto  cursor-pointer hover:shadow-xl ">
      <div
      className="flex justify-center items-center">
        <img
          src={SampleImg}
          alt="상품 이미지"
          width="150"
          height="150"
          className ="object-cover rounded"
        />
      </div>

      <div className="p-4">
        <h2 className=" text-purple-700 font-inter font-bold text-[10px] leading-[16px] tracking-normal">
          {item.category}</h2>
        <h2 className="font-inter font-bold text-[16px] leading-[28px] tracking-normal">
          {item.name}</h2>
        <div className="flex items-center justify-between mt-2">
          <h2 className="font-inter font-bold text-[16px] leading-[28px] tracking-normal ">
            {(item.price).toLocaleString()}원</h2>
          <AddButton onClick={()=>{
            swal("장바구니에 담으시겠습니까?", {
            buttons: ["아니요", "네"],
          });}}/>
        </div>
      </div>

    </div>
    
  );
};

export default ItemCards;