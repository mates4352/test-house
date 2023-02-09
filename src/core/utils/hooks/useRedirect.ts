import {useMatch, useNavigate} from "react-router-dom";
import {useEffect} from "react";

export const useRedirect = (pathInitial: string, pathRedirect: string) => {
  const navigate = useNavigate()
  const match = useMatch(pathInitial);

  useEffect(() => {
    if(Boolean(match)) {
      navigate(pathRedirect)
    }
  }, [match])
}