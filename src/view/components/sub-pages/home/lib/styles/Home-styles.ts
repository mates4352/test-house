import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

type BlockType = {
  bg: string
}

export const HomeStyles = {
  Home: styled.div`
  `,

  Container: styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 40px;
    box-sizing: content-box;
  `,

  Block: styled(Link)<BlockType>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 48px;
    margin-bottom: 44px;
    font-size: 20px;
    text-align: center;
    background-color: ${props => props.bg};
    border-radius: 12px;
    
    &:last-of-type {
      margin-bottom: unset;
    }
  `,
}