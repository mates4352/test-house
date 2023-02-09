import {createAsyncThunk} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

export const any = createAsyncThunk('TemplateName/any', async(_, {
  dispatch,
  rejectWithValue
}) => {
  try {
    // const response = await AppApi.getMe();
    // return response.data;
  } catch(e) {
    const error = e as AxiosError<any>;
    return rejectWithValue(error.response?.data.error);
  }
})