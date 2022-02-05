import {
  configureStore,
  combineReducers, // redux의 Reducer 의 집합과 같다.
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import logger from 'redux-logger'
import fineDust from 'features/finedust/reducer/finedustReducer'

export const rootReducer = combineReducers({ fineDust
}) 

// export const myCustomApiService = ({})

export const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) =>
  // getDefaultMiddleware({
  //   thunk: {
  //     extraArgument: myCustomApiService,
  //   },
  //   serializableCheck: false,
  // }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});