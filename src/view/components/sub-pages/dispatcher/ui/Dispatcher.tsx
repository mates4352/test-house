import React, {FC} from 'react';
import {DispatcherStyles} from "../lib/styles/Dispatcher-styles";

type DispatcherType = {};

export const Dispatcher: FC<DispatcherType> = ({}) => {
  const {Dispatcher} = DispatcherStyles

  return (
    <Dispatcher>
      Dispatcher
    </Dispatcher>
  );
};
