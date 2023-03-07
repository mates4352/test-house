import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const useListLinks = () => {
  const refList = useRef<any>(null);
  const refLine = useRef<any>(null);
  const location = useLocation();

  useEffect(() => {
    for (let i = 0; i < refList.current.childNodes.length; i++) {
      const elementLink = refList.current.childNodes[i].children[0];

      if (
        refList.current.childNodes[i].nodeName === 'LI' &&
        elementLink.classList.contains('active')
      ) {
        refLine.current.style.left =
          Math.floor(
            (elementLink.offsetLeft / refList.current.clientWidth) * 100,
          ) +
          0.5 +
          '%';
        refLine.current.style.width = elementLink.clientWidth + 'px';
      }
    }
  }, [location.pathname]);

  const onClickList = (e: any) => {
    if (e.target.nodeName === 'A') {
      refLine.current.style.width =
        Math.floor((e.target.clientWidth / refList.current.clientWidth) * 100) +
        0.5 +
        '%';
      refLine.current.style.left =
        (e.target.offsetLeft / refList.current.clientWidth) * 100 + '%';
    }
  };

  return [refList, refLine, onClickList] as const;
};
