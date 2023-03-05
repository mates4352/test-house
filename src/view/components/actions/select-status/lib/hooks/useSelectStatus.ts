import { useState } from 'react';
import { useOnClickOutside } from '../../../../../../core/utils/hooks/useOnClickOutside';
import { StatusOrdersType } from '../../../../../../core/types/global/status/status-orders-type';

export const useSelectStatus = (
  title: string,
  onCallbackStatus: (status: StatusOrdersType) => void,
) => {
  const [valueMainButton, setValueMainButton] = useState<string>(title);
  const [isList, setList] = useState<boolean>(false);
  const [refSelectStatus] = useOnClickOutside(() => setList(false));

  const onChangeStateList = () => {
    setList(el => !el);
  };

  const onChangeValueMainButton = (value: StatusOrdersType) => () => {
    onCallbackStatus(value);
    setValueMainButton(value);
    onChangeStateList();
  };

  return [
    valueMainButton,
    isList,
    refSelectStatus,
    onChangeStateList,
    onChangeValueMainButton,
  ] as const;
};
