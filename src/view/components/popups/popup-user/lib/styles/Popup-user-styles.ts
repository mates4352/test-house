import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const PopupUserStyles = {
  PopupUser: styled.div`
    min-width: 120px;
    min-height: 80px;
    padding: 24px 16px;
    background-color: #fff;
    border: 1px solid bisque;
    border-radius: 8px;
  `,

  List: styled.ul`
    display: grid;
    grid-auto-rows: minmax(min-content, max-content);
    row-gap: 12px;
  `,

  Item: styled.li`
  
  `,

  LinkElement: styled(NavLink)`
    font-size: 20px;
    transition: color 300ms ease;
    
    &.active {
      color: yellowgreen;
    }
    
    &:hover {
      color: yellowgreen;
    }
  `,
}