import { useState } from 'react';
import uuid from 'react-uuid';

export const useListMainNews = () => {
  const [arrayNews, setArrayNews] = useState<any>([
    {
      id: uuid(),
      status: 'area',
      image: '',
      previewText:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eius eos est expedita fugiat maxime nam provident tempore vitae, volupt...',
    },

    {
      id: uuid(),
      status: 'area',
      image: '',
      previewText:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eius eos est expedita fugiat maxime nam provident tempore vitae, volupt...',
    },

    {
      id: uuid(),
      status: 'area',
      image: '',
      previewText:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eius eos est expedita fugiat maxime nam provident tempore vitae, volupt...',
    },

    {
      id: uuid(),
      status: 'area',
      image: '',
      previewText:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eius eos est expedita fugiat maxime nam provident tempore vitae, volupt...',
    },

    {
      id: uuid(),
      status: 'area',
      image: '',
      previewText:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eius eos est expedita fugiat maxime nam provident tempore vitae, volupt...',
    },

    {
      id: uuid(),
      status: 'area',
      image: '',
      previewText:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eius eos est expedita fugiat maxime nam provident tempore vitae, volupt...',
    },
  ]);

  const getArrayNews = () => {
    setArrayNews(
      arrayNews.concat([
        {
          id: uuid(),
          status: 'area',
          image: '',
          previewText:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eius eos est expedita fugiat maxime nam provident tempore vitae, volupt...',
        },

        {
          id: uuid(),
          status: 'area',
          image: '',
          previewText:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eius eos est expedita fugiat maxime nam provident tempore vitae, volupt...',
        },

        {
          id: uuid(),
          status: 'area',
          image: '',
          previewText:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eius eos est expedita fugiat maxime nam provident tempore vitae, volupt...',
        },
      ]),
    );
  };

  return [arrayNews, getArrayNews] as const;
};
