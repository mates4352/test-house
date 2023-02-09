import styled from "styled-components";
import {CustomInputMask, Input} from "../../../../actions/input";
import {Button} from "../../../../actions/button";

export const FormRegistrationAdminStyles = {
  FormRegistrationAdmin: styled.form`
  
  `,

  Wrap: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(min-content, max-content);
    gap: 24px;
  `,

  Input: styled(Input)`
    max-width: 250px;
    height: 40px;
    font-size: 20px;
  `,

  InputPhone: styled(CustomInputMask)`
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