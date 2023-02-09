import styled from "styled-components";
import {CustomInputMask, Input} from "../../../../actions/input";
import {Button} from "../../../../actions/button";

export const FormPersonalDataStyles = {
  PersonalData: styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(min-content, max-content));
    column-gap: 48px;
  `,

  FormPersonalData: styled.form`
    max-width: 550px;
  `,

  Wrap: styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-content: start;
    gap: 12px 24px;
    margin-bottom: 24px;
  `,

  Input: styled(Input)`
    height: 40px;
    font-size: 20px;
  `,

  InputPhone: styled(CustomInputMask)`
    height: 40px;
    font-size: 20px;
  `,

  Button: styled(Button)`
    width: 250px;
    height: 55px;
    margin-left: auto;
    font-size: 18px;
    font-weight: 600;
  `
}