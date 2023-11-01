import axios from 'axios';
import { API_BASE_URL } from './OAuth';

//기숙사 baseURL: 'http://192.168.1.6:8070'
//인문관 baseURL: 'http://192.168.0.242:8070'

const client = axios.create({
  baseURL: `${API_BASE_URL}`
});

/*
  글로벌 설정 예시:
  
  // API 주소를 다른 곳으로 사용함
  client.defaults.baseURL = 'https://external-api-server.com/' 

  // 헤더 설정
  client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';

  // 인터셉터 설정
  axios.intercepter.response.use(\
    response => {
      // 요청 성공 시 특정 작업 수행
      return response;
    }, 
    error => {
      // 요청 실패 시 특정 작업 수행
      return Promise.reject(error);
    }
  })  
*/

export default client;