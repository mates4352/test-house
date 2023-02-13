import {ActionReducerMapBuilder, createSlice} from "@reduxjs/toolkit";
import {NoInfer} from "react-redux";

export interface AppStateType {
}

const initialState: AppStateType = {

}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<NoInfer<any>>) => {

  }
})

const {reducer} = appSlice;
export const appReducer = reducer;