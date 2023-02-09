import styled from "styled-components";
import {TitleAuth} from "../../../../statics/titleAuth";
import {Link} from "react-router-dom";

export const RegistrationAdminStyles = {
  RegistrationAdmin: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  Title: styled(TitleAuth)`
    margin-bottom: 24px;
  `,

  LinkElement: styled(Link)`
    margin-top: 8px;
  `,
}