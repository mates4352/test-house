import styled from "styled-components";
import {Link} from "react-router-dom";
import {TitleAuth} from "../../../../statics/titleAuth";

export const WelcomeStyles = {
  Welcome: styled.div`

  `,

  Title: styled(TitleAuth)`
    margin-bottom: 32px;
  `,

  Wrap: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 24px;
    width: 100%;
    max-width: 800px;
  `,

  Link: styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 200px;
    padding: 20px;
    font-size: 32px;
    background-color: aliceblue;
    transition: background-color 400ms ease;

    &:hover {
      background-color: #d7ecfd;
    }
  `,
}