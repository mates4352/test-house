import { useState } from 'react';
import { useOnClickOutside } from '../../../../../../core/utils/hooks/useOnClickOutside';

export const useHeader = () => {
  const [isLinkCabinet, setLinkCabinet] = useState<boolean>(false);
  const [refPopupUser] = useOnClickOutside(() => setLinkCabinet(false));

  const onChangeLinkCabinet = (value: boolean) => () => {
    setLinkCabinet(value);
  };

  return [refPopupUser, isLinkCabinet, onChangeLinkCabinet] as const;
};
