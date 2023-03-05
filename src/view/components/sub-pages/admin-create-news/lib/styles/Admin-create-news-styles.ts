import styled from 'styled-components';
import { AddImage } from '../../../../actions/add-image';
import { CustomButtonBack } from '../../../../actions/custom-button-back';
import { AddTitle } from '../../../../actions/add-title';
import { AddText } from '../../../../actions/add-text';
import { CustomButton } from '../../../../actions/custom-button';

const AdminCreateNews = styled.div``;

const ButtonBack = styled(CustomButtonBack)`
  margin-bottom: 32px;
`;

const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, var(--grid-min-max));
  align-items: start;
  column-gap: 56px;
  margin-bottom: 64px;
`;

const AddImageBig = styled(AddImage)`
  --width-image: 503px;
  --height-image: 300px;
`;

const AddImageSmall = styled(AddImage)`
  --width-image: 292px;
  --height-image: 175px;
`;

const ChangeTitle = styled(AddTitle)`
  margin-bottom: 16px;
`;

const ChangeText = styled(AddText)`
  margin-bottom: 41px;

  &:last-of-type {
    margin-bottom: unset;
  }
`;

const WrapButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 292px);
  column-gap: 24px;
`;

const Button = styled(CustomButton)``;

export {
  AdminCreateNews,
  ButtonBack,
  Wrap,
  AddImageBig,
  AddImageSmall,
  ChangeTitle,
  ChangeText,
  WrapButtons,
  Button,
};
