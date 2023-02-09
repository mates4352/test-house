import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const MenuDesktopStyles = {
  MenuDesktop: styled.nav`
  
  `,

  List: styled.ul`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(min-content, max-content);
    column-gap: 24px;
  `,

  Item: styled.li`

  `,

  LinkElement: styled(NavLink)`
    font-size: 20px;

    &.active {
      color: yellowgreen;
    }
  `,
}