import styled from 'styled-components';
import { CustomButton } from '../../../../actions/custom-button';
import { CustomInput } from '../../../../actions/custom-input';
import { FieldText } from '../../../../actions/field-text';

const FormAppeal = styled.form`
  display: grid;
  grid-auto-rows: var(--grid-min-max);
  row-gap: 16px;
  width: 100%;
  margin-bottom: 112px;
`;

const Input = styled(CustomInput)`
  max-width: 400px;
  height: 48px;
`;

const Textarea = styled(FieldText)`
  width: 820px;
`;

const Button = styled(CustomButton)`
  margin-top: 32px;
  width: 208px;
  height: 48px;
`;

export { FormAppeal, Input, Textarea, Button };
