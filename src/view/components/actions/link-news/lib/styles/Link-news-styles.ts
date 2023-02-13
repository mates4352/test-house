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

const AdminPreviewText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: #ff9f9f;
  border-radius: 4px;
  opacity: 0.5;
  transition: transform 300ms ease, opacity 300ms ease;

  ${LinkNews}:hover & {
    transform: translate(-50%, -50%) scale(1.15);
    opacity: 1;
  }
`

export {LinkNews, PreviewText, AdminPreviewText}