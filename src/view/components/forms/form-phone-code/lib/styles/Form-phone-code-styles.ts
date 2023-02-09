import styled from "styled-components";
import {CustomInput} from "../../../../actions/custom-input";
import {CustomButton} from "../../../../actions/custom-button";

const FormPhoneCode = styled.form`

`

const InputCode = styled(CustomInput)`
  max-width: 250px;
  height: 40px;
  font-size: 20px;
`

const Button = styled(CustomButton)`
  width: 70px;
  height: 40px;
  margin: 20px auto 0 auto;
`

export {FormPhoneCode, InputCode, Button}