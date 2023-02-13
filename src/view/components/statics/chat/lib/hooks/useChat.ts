import {useEffect, useRef} from "react";

export const useChat = () => {
  const refContent = useRef<any>(null)

  useEffect(() => {
    refContent.current.scrollTop = Math.ceil(refContent.current.scrollHeight - refContent.current.clientHeight);
  }, [])

  return [refContent]
}