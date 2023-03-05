import React from 'react';
import { WrapperRouterProvider } from './components/wrappers/wrapper-router-provider';
import { WrapperPopups } from './components/wrappers/wrapper-popups';
import { Provider } from 'react-redux';
import { store } from '../core/controller/store';

export const App = () => {
  return (
    <Provider store={store}>
      <WrapperPopups>
        <WrapperRouterProvider />
      </WrapperPopups>
    </Provider>
  );
};
