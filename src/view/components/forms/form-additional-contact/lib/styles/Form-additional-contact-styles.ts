import styled from "styled-components";
import {CustomInputMask} from "../../../../actions/custom-input";

const FormAdditionalContact = styled.form`

`

const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, max-content));
  align-items: center;
  column-gap: 24px;
`

const Text = styled.p`

`

const ButtonOpenInput = styled.button`

`

const InputPhone = styled(CustomInputMask)`
  max-width: 250px;
  height: 40px;
  font-size: 20px;
`

const ButtonSubmit = styled.button`

`

export {FormAdditionalContact, Wrap, Text, ButtonOpenInput, InputPhone, ButtonSubmit}