import { createAction, handleActions } from "redux-actions";
import { createRequestActionTypes } from "../lib/createRequestSaga";
import * as boardsAPI from '../lib/api/board';
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { finishLoading, startLoading } from "./loading";


const [
    LIST_BOARDS,
    LIST_BOARDS_SUCCESS,
    LIST_BOARDS_FAILURE,
] = createRequestActionTypes('boards/LIST_BOARDS');
const CHANGE_FIELD = 'boards/CHANGE_FIELD';


export const listBoards = createAction(LIST_BOARDS, params => params);
export const boardsChangeField = createAction(CHANGE_FIELD, ({ menu , input , page }) => ({
    menu,
    input,
    page,
}))

export function* listBoardsSaga() {
    const { menu, input, page } = yield select(state => state.boards.bTypefilter);

    let apiFunction = boardsAPI.listboards;

    let params = new URLSearchParams();
    params.append('btype',`${menu}${input}`);
    params.append('page',`${page}`);

    console.log(params);
    yield put(startLoading(LIST_BOARDS));
    try {
        const boards = yield call(apiFunction, params);
        yield put({
            type: LIST_BOARDS_SUCCESS,
            payload: boards,
        });
    } catch (error) {
        yield put({
            type: LIST_BOARDS_FAILURE,
            payload: error,
            error: true
        });
    }
    yield put(finishLoading(LIST_BOARDS));
}

export function* boardsSaga() {
    yield takeLatest(LIST_BOARDS, listBoardsSaga);
}

const initialState = {
    boards: null,
    error: null,
    bTypefilter: {
        menu : 't:',
        input : '',
        page: '1',
    },
};

const boards = handleActions(
    {
        [LIST_BOARDS_SUCCESS]: (state, { payload: boards }) => ({
            ...state,
            boards
        }),
        [LIST_BOARDS_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        }),
        [CHANGE_FIELD]: (state, action) => ({
            ...state,
            bTypefilter: {
                ...state.bTypefilter,
                menu: action.payload.menu,
                input: action.payload.input,
                page: action.payload.page,
            }
        })
    },
    initialState
);

export default boards;
