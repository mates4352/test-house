import React, {FC} from 'react';
import * as S from "../lib/styles/Link-company-styles";
import {LinkMain} from "../../../../../core/utils/enum/links/link-main";

type LinkCompanyType = {
  srcImage: string
  text: string
};

export const LinkCompany: FC<LinkCompanyType> = ({
  srcImage,
  text,
  ...props
}) => {

  return (
    <S.LinkCompany to={LinkMain.CONTACTS + '/1'} {...props}>
      <S.Wrap>
        <S.Image/>
        <S.Text>{text}</S.Text>
      </S.Wrap>
    </S.LinkCompany>
  );
};
