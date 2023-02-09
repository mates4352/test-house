import styled from "styled-components";
import {Link} from "react-router-dom";

export const LinkNewsStyles = {
  LinkNews: styled(Link)`
    display: block;
    width: 100%;
    height: 250px;
    background-color: #8989ff;
    transition: background-color 200ms ease;

    &:hover {
      background-color: #5a5aff;
    }
  `,
}