import styled from "styled-components";
import {Link} from "react-router-dom";

const LinkNews = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  height: 250px;
  background-color: #8989ff;
  overflow: hidden;
  transition: background-color 200ms ease;

  &:hover {
    background-color: #5a5aff;
  }
`

const PreviewText = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  padding: 20px;
  background-color: #ff9f9f;
  transition: transform 300ms ease;
  
  ${LinkNews}:hover & {
    transform: translateY(0);
  }
`

export {LinkNews, PreviewText}