import React, {FC} from 'react';
import {SigInStyles} from "../lib/styles/Sig-in-styles";
import {FormSigIn} from "../../../forms/form-sig-in";
type SigInType = {};

export const SigIn: FC<SigInType> = ({}) => {
  const {SigIn, Title} = SigInStyles

  return (
      <SigIn>
        <Title>Sig-in</Title>

        <FormSigIn/>
      </SigIn>
  );
};
