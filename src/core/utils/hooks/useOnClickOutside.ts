import { useEffect, useRef } from 'react';

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  onCallback?: () => void,
) {
  const ref = useRef<any>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        onCallback && onCallback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref]);

  return [ref];
}
