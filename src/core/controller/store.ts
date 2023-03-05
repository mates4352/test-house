import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { appReducer } from './slice/App-slice';
import { popupSliceReducer } from './slice/Popup-slice';

const rootReducer = combineReducers({
  appReducer: appReducer,
  popupReducer: popupSliceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
