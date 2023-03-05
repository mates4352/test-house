import styled, { css } from 'styled-components';
import image from './../../../../../../assets/images/union.svg';

type CardImageType = {
  bg?: string;
};

const CardImage = styled.div<CardImageType>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: var(--white);
  border-radius: 24px;

  ${props =>
    props.bg
      ? css`
          background-image: url(${props.bg});
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
        `
      : css`
          background-image: url(${image});
          background-repeat: no-repeat;
          background-position: center center;
          background-size: 148px 148px;
        `}
`;

export { CardImage };
