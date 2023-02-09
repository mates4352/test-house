import styled from "styled-components";
import {Link} from "react-router-dom";

export const LinkCompanyStyles = {
  LinkCompany: styled(Link)`
    
  `,

  Wrap: styled.div`
    display: grid;
    grid-template-columns: 120px 1fr;
    align-items: center;
    column-gap: 24px;
  `,

  Image: styled.div`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: #999;
  `,

  Text: styled.p`
    font-size: 20px;
  `,
}