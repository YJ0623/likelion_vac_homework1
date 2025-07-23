import axiosInstance from './axios';

export const login = async (code) => {
    const res = await axiosInstance.post('login/oauth2/code/kakao', {
        code,
    });
    return res.data;
}