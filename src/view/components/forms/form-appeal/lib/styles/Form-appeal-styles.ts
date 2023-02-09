import styled from "styled-components";
import {Button} from "../../../../actions/button";

export const FormAppealStyles = {
  FormAppeal: styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 48px;
  `,

  Button: styled(Button)`
    margin-top: 30px;
    width: 120px;
    height: 60px;
  `,
}