import { useEffect, useRef, useState } from 'react';
import uuid from 'react-uuid';

export const useChat = () => {
  const refList = useRef<any>(null);

  const [arrayMessage, setArrayMessage] = useState<
    { id: string; status: 'admin' | 'user'; text: string; time: string }[]
  >([
    {
      id: uuid(),
      status: 'user',
      text: 'Таким образом постоянное информационно-пропагандистское обеспечение нашей ',
      time: '11:45',
    },

    {
      id: uuid(),
      status: 'admin',
      text: 'Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности требуют определения и уточнения системы обучения кадров, соответствует насущным потребностям. ',
      time: '11:45',
    },

    {
      id: uuid(),
      status: 'admin',
      text: 'Все подходит?',
      time: '11:45',
    },

    {
      id: uuid(),
      status: 'user',
      text: 'Таким образом постоянное информационно-пропагандистское обеспечение нашей ',
      time: '11:45',
    },

    {
      id: uuid(),
      status: 'admin',
      text: 'Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности требуют определения и уточнения системы обучения кадров, соответствует насущным потребностям. ',
      time: '11:45',
    },

    {
      id: uuid(),
      status: 'admin',
      text: 'Все подходит?',
      time: '11:45',
    },

    {
      id: uuid(),
      status: 'user',
      text: 'Таким образом постоянное информационно-пропагандистское обеспечение нашей ',
      time: '11:45',
    },

    {
      id: uuid(),
      status: 'admin',
      text: 'Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности требуют определения и уточнения системы обучения кадров, соответствует насущным потребностям. ',
      time: '11:45',
    },

    {
      id: uuid(),
      status: 'admin',
      text: 'Все подходит?',
      time: '11:45',
    },
  ]);

  const date = new Date();

  useEffect(() => {
    refList.current.scrollTop = Math.ceil(
      refList.current.scrollHeight - refList.current.clientHeight,
    );
  }, [arrayMessage]);

  const onSendMessage = (value: string) => {
    setArrayMessage([
      ...arrayMessage,
      {
        id: uuid(),
        status: 'user',
        text: value,
        time: `${date.getHours()}:${date.getMinutes()}`,
      },
    ]);
  };

  return [refList, arrayMessage, onSendMessage] as const;
};
