import styled from 'styled-components';
import { CustomInput, CustomInputMask } from '../../../../actions/custom-input';
import { CustomButton } from '../../../../actions/custom-button';

const FormModerator = styled.form`
  display: grid;
  grid-auto-rows: var(--grid-min-max);
  row-gap: 16px;
  width: 100%;
  margin-bottom: 112px;
`;

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 397px 187px;
  align-items: start;
  column-gap: 24px;
`;

const Input = styled(CustomInput)`
  max-width: 397px;
  height: 48px;
`;

const InputPhone = styled(CustomInputMask)`
  max-width: 397px;
  height: 48px;
`;

const Button = styled(CustomButton)`
  margin-top: 32px;
  width: 397px;
  height: 48px;
`;

export { FormModerator, Wrap, Input, InputPhone, Button };
