import styled from "styled-components";
import {Link} from "react-router-dom";
import {TitleAuth} from "../../../../statics/titleAuth";

export const PhoneCodeStyles = {
  PhoneCode: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  Title: styled(TitleAuth)`
    margin-bottom: 24px;
  `,

  LinkElement: styled(Link)`
    margin-top: 8px;
  `
}