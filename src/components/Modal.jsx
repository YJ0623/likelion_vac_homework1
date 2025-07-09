import { Link } from "react-router-dom";

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
        <div className="bg-white rounded-xl p-8 w-[400px] text-center shadow-lg">
            <div className="flex justify-end">            
                <button
                className="flex text-sm text-black cursor-pointer"
                onClick={onClose}
                >X
            </button>
            </div>
            <h2 className="text-lg font-semibold mb-4">장바구니에 추가되었습니다.</h2>
            <div className="flex flex-col gap-3">
                <Link to="/" className="text-purple-700 underline">
                    쇼핑 계속하기
                </Link>
                <Link to="/shoppingcart" className="bg-purple-700 text-white py-2 rounded-md">
                    장바구니 보기
                 </Link>
            </div>
        </div>
    </div>
  );
};

export default Modal;