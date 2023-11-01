import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'write/INITIALIZE'; // 모든 내용 초기화
const CHANGE_FIELD = 'write/CHANGE_FIELD'; // 특정 key 값 바꾸기
const [WRITE_POST,WRITE_POST_SUCCESS, WRITE_POST_FAILURE] = createRequestActionTypes('write/WRITE_POST'); // 포스트 작성
const CHECK_OPTION = 'write/CHECK_OPTION'; // 체크 옵션
const SET_ORIGINAL_BOARD = 'write/SET_ORIGINAL_BOARD';
const [UPDATE_POST,
      UPDATE_POST_SUCCESS,
      UPDATE_POST_FAILURE] = createRequestActionTypes('write/UPDATE_POST');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const writePost = createAction(WRITE_POST, (params) => params);
export const updatePost = createAction(UPDATE_POST, (params) => params);
export const checkOption = createAction(CHECK_OPTION, ({category,option}) => ({
  category,
  option,
}));
export const setOriginalBoard = createAction(SET_ORIGINAL_BOARD, board => board);

// 사가 생성
const writePostSaga = createRequestSaga(WRITE_POST, (payload) => {
  const { options1, options2, options3, options4, options5, ...rest } = payload; // 문자열로 바꿔야하기 때문에 배열을 payload에서 가져옴

  const options = {
    options1: options1.join(', '),
    options2: options2.join(', '),
    options3: options3.join(', '),
    options4: options4.join(', '),
    options5: options5.join(', '),
  }; // 문자열로 변경

  return postsAPI.writePost({ ...rest, ...options }); // 바뀐 문자열로 요청
});

const updatePostSaga = createRequestSaga(UPDATE_POST, (payload) => {
  const { options1, options2, options3, options4, options5, ...rest } = payload; // 문자열로 바꿔야하기 때문에 배열을 payload에서 가져옴

  return postsAPI.updatePost({ ...rest }); // 바뀐 문자열로 요청
});

export function* writeSaga() {
  yield takeLatest(WRITE_POST, writePostSaga);
  yield takeLatest(UPDATE_POST, updatePostSaga);
}

const initialState = {
  title: '',
  content: '',
  post: null,
  postError: null,
  options1:[],
  options2:[],
  options3:[],
  options4:[],
  options5:[],
  originalBoardId: null,
};

const write = handleActions(
  {
    [INITIALIZE]: state => initialState, // initialState를 넣으면 초기 상태로 바뀜
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값을 업데이트
    }),
    [CHECK_OPTION]: (state, { payload: { category,option }}) => {
      const updatedOptions = [...state[category]]; // 해당 카테고리의 옵션 배열을 복사
      const index = updatedOptions.indexOf(option); // 선택한 옵션의 인덱스를 확인합니다

      if (index === -1){
        updatedOptions.push(option); // 선택한 옵션이 없으면 배열에 추가
      } else {
        updatedOptions.splice(index,1); // 선택한 옵션이 이미 있다면 배열에서 제거
      }

      return {
        ...state,
        [category]: updatedOptions, // 업데이트된 옵션 배열로 해당 카테고리의 상태를 업데이트
      }
    },
    [WRITE_POST]: (state, { payload }) => ({
      ...state,
      // payload에서 필요한 파라미터 추출
      id: payload.id,
      title: payload.title,
      content: payload.content,
      options1: payload.options1,
      options2: payload.options2,
      options3: payload.options3,
      options4: payload.options4,
      options5: payload.options5,
      // post와 postError를 초기화
      post: null,
      postError: null,
    }),
    // 포스트 작성 성공
    [WRITE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    // 포스트 작성 실패
    [WRITE_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
    [SET_ORIGINAL_BOARD]: (state, { payload: board }) => ({
      ...state,
      writerId: board.writerId,
      title: board.title,
      content: board.content,
      options1: board.options1,
      options2: board.options2,
      options3: board.options3,
      options4: board.options4,
      options5: board.options5,
      originalBoardId: board.bno,
    }),
    [UPDATE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [UPDATE_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    })
  },
  initialState,
);

export default write;