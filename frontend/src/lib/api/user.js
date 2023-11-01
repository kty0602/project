import axios from "axios";
import { ACCESS_TOKEN } from "./OAuth";

// 기본 헤더 설정
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const userinfo = (data) => {
    const token = localStorage.getItem(ACCESS_TOKEN);

    if (token) {
        console.log("토큰이 있습니다.", token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    return axios.get('http://localhost:5000/member/modify', { params: data });
}
