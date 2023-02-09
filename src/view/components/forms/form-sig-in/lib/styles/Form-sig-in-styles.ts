import styled from "styled-components";
import {CustomInputMask} from "../../../../actions/custom-input";
import {CustomButton} from "../../../../actions/custom-button";

const FormSigIn = styled.form`

`

const InputPhone = styled(CustomInputMask)`
  max-width: 250px;
  height: 40px;
  font-size: 20px;
`

const Button = styled(CustomButton)`
  width: 110px;
  height: 40px;
  margin: 20px auto 0 auto;
`

export {FormSigIn, InputPhone, Button}