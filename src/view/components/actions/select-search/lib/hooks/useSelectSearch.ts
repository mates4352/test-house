import { useState } from 'react';
import { useOnClickOutside } from '../../../../../../core/utils/hooks/useOnClickOutside';

export const useSelectSearch = (
  onCallbackCheckedInput: (text: string) => void,
) => {
  const [isPopup, setPopup] = useState<boolean>(false);
  const [refSelectSearch] = useOnClickOutside(() => setPopup(false));

  const onChangeStatePopup = () => {
    setPopup(el => !el);
  };

  const onCheckedInput = (text: string) => {
    onCallbackCheckedInput(text);
  };

  return [
    isPopup,
    refSelectSearch,
    onChangeStatePopup,
    onCheckedInput,
  ] as const;
};
