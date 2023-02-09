import React, {FC} from 'react';
import {PersonalDataStyles} from "../lib/styles/Personal-data-styles";
import {FormPersonalData} from "../../../forms/form-personal-data";

type PersonalDataType = {

};

export const PersonalData: FC<PersonalDataType> = ({}) => {
  const {PersonalData} = PersonalDataStyles

  return (
    <PersonalData>
      <FormPersonalData/>
    </PersonalData>
  );
};
