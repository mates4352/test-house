import styled from "styled-components";
import {Input} from "../../../../actions/input";
import {Button} from "../../../../actions/button";

export const FormPhoneCodeStyles = {
  FormPhoneCode: styled.form`
  
  `,

  InputCode: styled(Input)`
    max-width: 250px;
    height: 40px;
    font-size: 20px;
  `,

  Button: styled(Button)`
    width: 70px;
    height: 40px;
    margin: 20px auto 0 auto;
  `
}