import { API_BASE_URL, ACCESS_TOKEN } from "./api/OAuth";

const request = (options) => {
    // 헤더 생성, Content-Type 설정
    const headers = new Headers({
        'Content-Type': 'application/json',
    });
    
    // localStorage에서 ACCESS_TOKEN을 가져와서 헤더에 추가
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
        headers.append('Authorization', 'Bearer ' + token);
    }

    // 기본값으로 headers를 설정하여 options를 업데이트
    const defaults = { headers };
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options) // fetch 사용하여 API 요청
    // 응답이 성공적으로 받아지면 JSON으로 변환하여 반환
    .then(response => 
        response.json().then(json => {
            if (!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};

/** 현재 사용자 정보를 가져오는 API 요청 함수 */
export function getCurrentUser() {
    const token = localStorage.getItem(ACCESS_TOKEN);

    if (!token) {
        return Promise.reject('No access token set.');
    }

    // request 함수 호출하여 현재 사용자 정보 요청
    return request({
        url: API_BASE_URL + '/member/me',
        method: 'GET',
    });
}
