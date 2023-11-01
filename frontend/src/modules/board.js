import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as boardApi from '../lib/api/board';
import { takeLatest } from 'redux-saga/effects';

const [
  READ_BOARD,
  READ_BOARD_SUCCESS,
  READ_BOARD_FAILURE,
] = createRequestActionTypes('board/READ_BOARD');
const UNLOAD_BOARD = 'board/UNLOAD_BOARD'; // 보드 페이지에서 벗어날 때 데이터 비우기

export const readBoard = createAction(READ_BOARD, bno => ({ bno }));
export const unloadBoard = createAction(UNLOAD_BOARD);

const readBoardSaga = createRequestSaga(READ_BOARD, boardApi.readBoard);

export function* boardSaga() {
  yield takeLatest(READ_BOARD, readBoardSaga);
}

const initialState = {
  board: null,
  error: null,
};

const board = handleActions(
  {
    [READ_BOARD_SUCCESS]: (state, { payload: board }) => ({
      ...state,
      board,
    }),
    [READ_BOARD_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_BOARD]: () => initialState,
  },
  initialState
);

export default board;
