import styled from 'styled-components';
import { CustomButton } from '../../../../actions/custom-button';

const CustomPopupDelete = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100000;
  display: flex;
  width: 100%;
  height: 100%;
`;

const Bg = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: #c5c5c5a6;
`;

const Body = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 397px;
  min-height: 225px;
  padding: 40px 62px;
  margin: auto;
  text-align: center;
  background: var(--white);
  border-radius: 24px;
`;

const Title = styled.h2`
  margin-bottom: 16px;
  font: var(--text-24-semibold);
  color: var(--black);
`;

const Text = styled.p`
  margin-bottom: 32px;
  font: var(--text-16);
  color: var(--black);
`;

const ButtonDelete = styled(CustomButton)`
  width: 208px;
`;

export { CustomPopupDelete, Bg, Body, Title, Text, ButtonDelete };
