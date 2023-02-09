import {ActionReducerMapBuilder, createSlice} from "@reduxjs/toolkit";
import {NoInfer} from "react-redux";

export interface TemplateNameStateType {
}

const initialState: TemplateNameStateType = {

}

const templateNameSlice = createSlice({
  name: 'templateName',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<NoInfer<any>>) => {

  }
})

const {reducer} = templateNameSlice;
export const templateNameReducer = reducer;