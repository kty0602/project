import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as replyAPI from '../lib/api/reply';
import { takeLatest } from 'redux-saga/effects';

const [
    LIST_REPLY,
    LIST_REPLY_SUCCESS,
    LIST_REPLY_FAILURE
] = createRequestActionTypes('reply/LIST_REPLY');
const [
    SUBMIT_REPLY,
    SUBMIT_REPLY_SUCCESS,
    SUBMIT_REPLY_FAILURE
] = createRequestActionTypes('reply/SUBMIT_REPLY');
const [
    MODIFY_REPLY,
    MODIFY_REPLY_SUCCESS,
    MODIFY_REPLY_FAILURE
] = createRequestActionTypes('reply/MODIFY_REPLY');

export const listReplys = createAction(LIST_REPLY, bno => bno);
export const submitReply = createAction(SUBMIT_REPLY, ({ bno, content, id }) => ({ bno, content, id }));
export const modifyReply = createAction(MODIFY_REPLY, ({ bno, rno, content }) => ({ bno, rno, content }));

const listReplysSaga = createRequestSaga(LIST_REPLY,replyAPI.listReplys);
const submitReplySaga = createRequestSaga(SUBMIT_REPLY, replyAPI.submitReply);
const modifyReplySaga = createRequestSaga(MODIFY_REPLY,replyAPI.modifyReply);

export function* replysSaga() {
    yield takeLatest(LIST_REPLY, listReplysSaga);
    yield takeLatest(SUBMIT_REPLY, submitReplySaga);
    yield takeLatest(MODIFY_REPLY, modifyReplySaga);
}

const initialState = {
    replys : null,
    error : null,
};

const replys = handleActions(
    {
        [LIST_REPLY_SUCCESS] : (state, { payload : replys }) => ({
            ...state,
            replys,
        }),
        [LIST_REPLY_FAILURE] : (state, { payload : error }) => ({
            ...state,
            error,
        }),
        [SUBMIT_REPLY_SUCCESS] : (state, { payload : bno }) => ({
            ...state,
            bno,
        }),
        [SUBMIT_REPLY_FAILURE] : (state, { payload : error }) => ({
            ...state,
            error,
        }),
        [MODIFY_REPLY_SUCCESS] : (state, { payload : reply }) => ({
            ...state,
            reply,
        }),
        [MODIFY_REPLY_FAILURE] : (state, { payload : error }) => ({
            ...state,
            error,
        }),
        
    },
    initialState,
);

export default replys;
