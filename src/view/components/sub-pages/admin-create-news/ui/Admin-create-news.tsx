import React, { FC } from 'react';
import { AdminCreateNewsStyles } from '../lib/styles/Admin-create-news-styles';

type AdminCreateNewsType = {};

export const AdminCreateNews: FC<AdminCreateNewsType> = ({}) => {
  const { AdminCreateNews } = AdminCreateNewsStyles;

  return <AdminCreateNews>AdminCreateNews</AdminCreateNews>;
};
