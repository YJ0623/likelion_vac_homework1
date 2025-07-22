import { Link } from "react-router-dom";

const LoginModal = ({ onClose }) => {
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
            <h2 className="text-lg font-semibold mb-4">로그인이 필요한 기능입니다.</h2>
            <div className="flex flex-col gap-3">
                <Link to="/login" className="bg-purple-700 text-white py-2 rounded-md">
                    로그인하러 가기
                 </Link>
            </div>
        </div>
    </div>
  );
};

export default LoginModal;