import {AppApi} from "../../api/App-api";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

export const getDataUser = createAsyncThunk('App/getDataUser', async(_, {
  rejectWithValue
}) => {
  try {
    const response = await AppApi.getMe();
    return response.data;
  } catch(e) {
    const error = e as AxiosError<any>;
    return rejectWithValue(error.response?.data.error);
  }
})