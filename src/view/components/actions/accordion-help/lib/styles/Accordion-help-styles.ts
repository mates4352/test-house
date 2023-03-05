import styled, { css } from 'styled-components';
import { IconCircleArrow } from '../../../../icons/Icon-circle-arrow';

type ButtonType = {
  isActive: boolean;
};

const AccordionHelp = styled.article``;

const Button = styled.button<ButtonType>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 42px 64px 42px 32px;
  font: var(--text-24-semibold);
  color: var(--black);
  text-align: left;
  background-color: var(--white);
  border-radius: 24px;

  ${props =>
    props.isActive &&
    css`
      ${CircleArrow} {
        transform: rotate(180deg);
        color: var(--light-grey);
      }
    `}
`;

const Content = styled.div`
  max-width: 800px;
  padding: 0 32px;
`;

const CircleArrow = styled(IconCircleArrow)`
  width: 40px;
  height: 40px;
  color: #bac3ca;
  transition: transform 300ms ease, color 300ms ease;
`;

export { AccordionHelp, Button, CircleArrow, Content };
