import {useState} from "react";
import {useOnClickOutside} from "../../../../../../core/utils/hooks/useOnClickOutside";

export const useHeader = () => {
  const [isLinkCabinet, setLinkCabinet] = useState<boolean>(false)
  const [isPopupNotification, setPopupNotification] = useState<boolean>(false)
  const [refPopupUser] = useOnClickOutside(() => setLinkCabinet(false))
  const [refPopupNotification] = useOnClickOutside(() => setPopupNotification(false))

  const onChangePopupNotification = (value: boolean) => () =>{
    setPopupNotification(value)
  }

  const onChangeLinkCabinet = (value: boolean) => () =>{
    setLinkCabinet(value)
  }

  return [refPopupUser, refPopupNotification, isLinkCabinet, isPopupNotification, onChangeLinkCabinet, onChangePopupNotification] as const
}