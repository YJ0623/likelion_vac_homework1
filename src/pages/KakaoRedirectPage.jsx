import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../apis/auth";
import { useAuthStore } from "../../stores/useAuthStore";

const KakaoRedirectPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setTokens } = useAuthStore();

  useEffect(() => {
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get('code');

  if (!code) {
    alert('인가코드 없음');
    navigate('/login');
    return;
  }

  console.log("보내는 code:", code);
  
  const kakaoLogin = async () => {
    try {
      console.log('인가코드:', code);
      const { accessToken, refreshToken } = await login(code);
      setTokens(accessToken, refreshToken);
      navigate('/');
      console.log(accessToken, refreshToken);
    } catch (err) {
      console.error(err);
      alert('로그인 실패');
      navigate('/login');
    }
  };

  kakaoLogin();
}, [location.search, navigate]);

  return <>로딩중 ...</>;
};

export default KakaoRedirectPage;