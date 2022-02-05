import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface fineDustPayload {
    pm10Value: string,
    pm10Grade: string,
    pm25Value: string,
    pm25Grade: string
  
}

export interface fineDustState {
    dustLoading: boolean;
    dustData: any;
    error: any;
  }

export interface cityParamType {
city: string;
}

const initialState: fineDustState = {
    dustLoading : false,
    dustData: null,
    error: null,
  };

  const fineDustSlice = createSlice({
    name: "fineDusts",
    initialState,
    reducers: {
  
      //suggestion
      fineDustRequest(state: fineDustState, _action: PayloadAction<cityParamType>) {
        state.dustLoading = true;
        state.error = null;
      },

      fineDustSuccess(state: fineDustState, action: PayloadAction<fineDustPayload>) {
        state.dustLoading = false;
        state.dustData = action.payload;
      },
  
      fineDustFailure(state: fineDustState, action: PayloadAction<{ error: any }>) {
        state.dustLoading = true;
        state.error = action.payload;
      } 
    }
  })

  const store = configureStore({
    reducer: {
        fineDust: fineDustSlice.reducer,
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  const { reducer, actions } = fineDustSlice;
  
  export const {
    fineDustRequest,
    fineDustSuccess,
    fineDustFailure
  } = actions;
  
  export default reducer;
      