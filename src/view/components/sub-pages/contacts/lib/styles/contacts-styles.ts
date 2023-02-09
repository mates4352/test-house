import styled from "styled-components";
import {Container} from "../../../../../global-styled-components/global-styled-components";

const Contacts = styled.div`

`

const ContactsContainer = styled(Container)`
  display: grid;
  grid-auto-rows: minmax(min-content, max-content);
  row-gap: 24px;
`

export {Contacts, ContactsContainer}