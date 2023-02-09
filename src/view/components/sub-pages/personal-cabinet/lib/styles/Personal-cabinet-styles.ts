import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const PersonalCabinetStyles = {
  PersonalCabinet: styled.section`

  `,

  Container: styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 40px;
    box-sizing: content-box;
  `,

  Title: styled.h2`
    font-size: 28px;
    margin-bottom: 28px;
  `,

  List: styled.ul`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(min-content, max-content);
    column-gap: 24px;
    margin-bottom: 48px;
  `,

  Item: styled.li`

  `,


  LinkElement: styled(NavLink)<any>`
    font-size: 22px;

    &.active {
      border-bottom: 1px solid #999;
    }

    &:hover {
      border-bottom: 1px solid #999;
    }
  `,
}