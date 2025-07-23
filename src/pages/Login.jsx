import KakaoLogo from '../assets/KakaoTalk_logo.png';

export const Login = () => {
    const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
    const REST_API_KEY = import.meta.env.VITE_KAKAO_API_KEY;

    // 인가코드 받는 함수 작성
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
    console.log(REDIRECT_URI);

    const handleLogin = () => {
        window.location.href = "https://yeogaeng.shop/login/oauth2/code/kakao";
    };

    return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className='flex flex-col items-center justify-center w-140 h-180 rounded-xl bg-[#FFFFFF] shadow gap-20'>
                        <div className='font-semibold text-lg'>
                            카카오톡으로 간편하게 로그인하고 서비스를 이용해보세요!
                        </div>

                        <button 
                        className="flex items-center bg-[#FFE808] w-100 h-16 cursor-pointer rounded-2xl"
                        onClick={handleLogin}>
                            <img src={KakaoLogo} className='pl-16 pr-8 h-12'/>
                            <span className='font-semibold'>카카오톡으로 로그인하기</span> 
                        </button>
                </div>
            </div>
    )
}

export default Login;