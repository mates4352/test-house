import React, {FC} from 'react';
import {LinkCompanyStyles} from "../lib/styles/Link-company-styles";
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
  const {LinkCompany, Wrap, Image, Text} = LinkCompanyStyles

  return (
    <LinkCompany to={LinkMain.CONTACTS + '/1'} {...props}>
      <Wrap>
        <Image/>
        <Text>{text}</Text>
      </Wrap>
    </LinkCompany>
  );
};
