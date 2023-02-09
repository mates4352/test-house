import React, {FC} from 'react';
import {AuthStyles} from "../lib/styles/Auth-styles";
import {Outlet} from "react-router-dom";

type AuthType = {

};

export const Auth: FC<AuthType> = ({}) => {
  const {Auth} = AuthStyles

  return (
    <Auth>
      <Outlet/>
    </Auth>
  );
};
