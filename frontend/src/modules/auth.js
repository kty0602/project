import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';

// 액션 생성 함수
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginFailure = createAction(LOGIN_FAILURE);

// 초기 상태 정의
const initialState = {
  auth: null,
  authError: null
};

// 리듀서 함수
const auth = handleActions(
  {
    [LOGIN_SUCCESS]: (state, { payload: token }) => ({
      ...state,
      auth: token,
      authError: null
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      auth: null,
      authError: error
    })
  },
  initialState
);

export default auth;
