import React, {FC} from 'react';
import * as S from "../lib/styles/Link-company-styles";

type LinkCompanyType = {
  srcImage: string
  text: string
  link: string
};

export const LinkCompany: FC<LinkCompanyType> = ({
  srcImage,
  text,
  link,
  ...props
}) => {

  return (
    <S.LinkCompany to={link } {...props}>
      <S.Wrap>
        <S.Image/>
        <S.Text>{text}</S.Text>
      </S.Wrap>
    </S.LinkCompany>
  );
};
