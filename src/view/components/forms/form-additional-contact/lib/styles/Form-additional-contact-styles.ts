import styled from "styled-components";
import {CustomInputMask} from "../../../../actions/input";

export const FormAdditionalContactStyles = {
  FormAdditionalContact: styled.form`
  
  `,

  Wrap: styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(min-content, max-content));
    align-items: center;
    column-gap: 24px;
  `,

  Text: styled.p`
  
  `,

  ButtonOpenInput: styled.button`
  
  `,

  InputPhone: styled(CustomInputMask)`
    max-width: 250px;
    height: 40px;
    font-size: 20px;
  `,

  ButtonSubmit: styled.button`
  
  `,
}