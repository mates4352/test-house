import styled from "styled-components";
import {CustomButton} from "../../../../actions/custom-button";

const FormAppeal = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 48px;
  `

const ButtonForm = styled(CustomButton)`
    margin-top: 30px;
    width: 120px;
    height: 60px;
  `

export {FormAppeal, ButtonForm}