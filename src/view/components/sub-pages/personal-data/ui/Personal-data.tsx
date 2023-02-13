import React, {FC} from 'react';
import * as S from "../lib/styles/Personal-data-styles";
import {FormPersonalData} from "../../../forms/form-personal-data";

type PersonalDataType = {

};

export const PersonalData: FC<PersonalDataType> = ({}) => {

  return (
    <S.PersonalData>
      <FormPersonalData/>
    </S.PersonalData>
  );
};
