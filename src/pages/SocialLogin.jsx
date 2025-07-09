import KakaoLogo from '../assets/KakaoTalk_logo.png';

export const SocialLogin = () => {
    return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className='flex flex-col items-center justify-center w-140 h-180 rounded-xl bg-[#FFFFFF] shadow gap-20'>
                        <div className='font-semibold text-lg'>
                            카카오톡으로 간편하게 로그인하고 서비스를 이용해보세요!
                        </div>

                        <button 
                        className="flex items-center bg-[#FFE808] w-100 h-16 cursor-pointer rounded-2xl"
                        onClick={() => alert("기능 구현 예정입니다")}>
                            <img src={KakaoLogo} className='pl-16 pr-8 h-12'/>
                            <span className='font-semibold'>카카오톡으로 로그인하기</span> 
                        </button>
                </div>
            </div>
    )
}