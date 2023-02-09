import styled from "styled-components";
import {Link} from "react-router-dom";

export const FooterStyles = {
  Footer: styled.div`
    padding: 12px;
    background-color: bisque;
  `,

  Container: styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 40px;
    box-sizing: content-box;
  `,

  List: styled.ul`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(min-content, max-content);
    column-gap: 24px;
  `,

  Item: styled.li`

  `,

  LinkIcon: styled(Link)`
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #999;
  `,
}