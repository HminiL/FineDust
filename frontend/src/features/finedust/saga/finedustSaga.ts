import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import finedustAPI from "features/finedust/reducer/finedustAPI";
import { fineDustPayload, cityParamType, fineDustSuccess, fineDustFailure, fineDustRequest } from "features/finedust/reducer/finedustReducer";

function* fineDustSearch(action: PayloadAction<cityParamType>){
    try {
        const result: fineDustPayload = yield call(
            finedustAPI.fineDustSearchAPI,
            action.payload
        );
        
        yield put(fineDustSuccess(result));
    }
    catch (error:any){
        yield put(fineDustFailure(error))
    };
}

export function* WatchfineDustCity(){
    yield takeLatest(fineDustRequest.type, fineDustSearch)
}