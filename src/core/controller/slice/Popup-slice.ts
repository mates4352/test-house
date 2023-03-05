import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { NoInfer } from 'react-redux';
import { StatusPopupType } from '../../types/global/status/status-popup-type';

export interface PopupSliceStateType {
  isPopup: StatusPopupType;
}

const initialState: PopupSliceStateType = {
  isPopup: null,
};

const popupSliceSlice = createSlice({
  name: 'popupSlice',
  initialState,
  reducers: {
    showPopup: (state, action: PayloadAction<StatusPopupType>) => {
      state.isPopup = action.payload;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<NoInfer<any>>) => {},
});

const { reducer } = popupSliceSlice;
export const { showPopup } = popupSliceSlice.actions;
export const popupSliceReducer = reducer;
