import styled, { css } from 'styled-components';
import { CustomButtonPlus } from '../../../custom-button-plus';
import image from './../../../../../../assets/images/union.svg';

type ImageType = {
  src?: string;
};

const AddImage = styled.div``;

const Image = styled.div<ImageType>`
  max-width: var(--width-image);
  width: 100%;
  height: var(--height-image);
  margin-bottom: 16px;
  background-color: var(--white);
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 148px 148px;
  border-radius: 24px;

  ${props =>
    props.src &&
    css`
      background-image: url(${props.src});
      background-size: cover;
    `}
  |
`;

const Wrap = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: var(--grid-min-max);
  align-items: center;
`;

const ButtonEditImage = styled(CustomButtonPlus)`
  width: 218px;
`;

const TextRecommendation = styled.p`
  max-width: 240px;
  margin-left: 25px;
  font: var(--text-14);
  color: var(--silver);
`;

const ButtonDeleteImage = styled.button`
  width: max-content;
  margin-left: 8px;
  font: var(--text-16);
  color: var(--error);
`;

export {
  AddImage,
  Image,
  Wrap,
  ButtonEditImage,
  TextRecommendation,
  ButtonDeleteImage,
};
