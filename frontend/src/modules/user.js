import { takeLatest } from 'redux-saga/effects';
import { createAction, handleActions } from 'redux-actions';
import { getCurrentUser } from '../lib/APIUtils';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import { ACCESS_TOKEN } from '../lib/api/OAuth';
import { finishLoading, startLoading } from './loading';
import { call, put } from 'redux-saga/effects';
import produce from 'immer';
import * as userAPI from '../lib/api/user';


const [FETCH_CURRENT_USER,FETCH_CURRENT_USER_SUCCESS,FETCH_CURRENT_USER_FAILURE] = createRequestActionTypes(
  'user/FETCH_CURRENT_USER'
);

const [SUBMIT_USER_INFO,SUBMIT_USER_INFO_SUCCESS,SUBMIT_USER_INFO_FAILURE] = createRequestActionTypes(
  'user/SUBMIT_USER_INFO'
)

const TEMP_SET_USER = 'user/TEMP_SET_USER'; // 새로고침 이후 임시 로그인 처리
const LOGOUT = 'user/LOGOUT';
const CHANGE_FIELD = 'user/CHANGE_FIELD';

export const tempSetUser = createAction(TEMP_SET_USER, user => user);
export const check = createAction(FETCH_CURRENT_USER);
export const logout = createAction(LOGOUT);
export const submitUserInfo = createAction(SUBMIT_USER_INFO,data => data);
export const changeField = createAction(
  CHANGE_FIELD,
  ({ key, value }) => ({
    key, // sex,year
    value, //실제 바꾸려는 값
  })
)

export const submitUserInfoSaga = createRequestSaga(SUBMIT_USER_INFO,userAPI.userinfo)


export const checkSaga = function* () {
  yield put(startLoading(FETCH_CURRENT_USER)); // 로딩 시작
  try {
    const response = yield call(getCurrentUser);
    console.log(response);
    yield put({
      type: FETCH_CURRENT_USER_SUCCESS,
      payload: response,
    });
  } catch (e) {
    yield put({
      type: FETCH_CURRENT_USER_FAILURE,
      payload: e,
      error: true,
    });
  }
  yield put(finishLoading(FETCH_CURRENT_USER)); // 로딩 끝
};



function logoutSaga() {
  try {
    localStorage.removeItem(ACCESS_TOKEN); // localStorage에서 user를 제거
  } catch (e) {
    console.log(e);
  }
}


// Redux Saga watcher 함수
export function* userSaga() {
    yield takeLatest(FETCH_CURRENT_USER, checkSaga);
    yield takeLatest(FETCH_CURRENT_USER_FAILURE,checkFailureSaga);
    yield takeLatest(LOGOUT,logoutSaga);
    yield takeLatest(SUBMIT_USER_INFO,submitUserInfoSaga);
  }
  
function checkFailureSaga() {
    try {
        localStorage.removeItem(ACCESS_TOKEN);
    } catch (e) {
        console.log('localhost is not working');
    }
}


// 초기 상태 정의
const initialState = {
  currentUser: null,
  authenticated: false,
  error: null,
  userinfo:{
    sex: '',
    year: ''
  },
  setinfo: false,
};

// Redux reducer 함수 정의
const user = handleActions(
  {
    [FETCH_CURRENT_USER]: (state) => ({
      ...state,
      error: null,
    }),
    [FETCH_CURRENT_USER_SUCCESS]: (state, action) => ({
      ...state,
      currentUser: action.payload,
      authenticated: true,
      error: null,
    }),
    [FETCH_CURRENT_USER_FAILURE]: (state, action) => ({
      ...state,
      currentUser: null,
      authenticated: false,
      error: action.payload,
    }),
    [LOGOUT]: (state) => ({
      ...state,
      currentUser: null,
      authenticated: false,
    }),
    [CHANGE_FIELD]: (state, { payload: { key,value }}) =>
      produce(state, draft => {
        draft.userinfo[key] = value;
    }),
    [SUBMIT_USER_INFO_SUCCESS]: (state, { payload }) => ({
      ...state,
      currentUser: payload,
      authenticated: true,
      setinfo: true,
      error: null,
    }),
    [SUBMIT_USER_INFO_FAILURE]: (state, { payload }) => ({
      ...state,
      currentUser: null,
      authenticated: false,
      error: payload,
    }),
  },
  initialState
);

export default user;

