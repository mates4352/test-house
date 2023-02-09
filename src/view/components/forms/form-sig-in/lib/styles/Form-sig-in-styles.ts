import styled from "styled-components";
import {CustomInputMask} from "../../../../actions/input";
import {Button} from "../../../../actions/button";

export const FormSigInStyles = {
  FormSigIn: styled.form`
    
  `,

  InputPhone: styled(CustomInputMask)`
    max-width: 250px;
    height: 40px;
    font-size: 20px;
  `,

  Button: styled(Button)`
    width: 110px;
    height: 40px;
    margin: 20px auto 0 auto;
  `
}