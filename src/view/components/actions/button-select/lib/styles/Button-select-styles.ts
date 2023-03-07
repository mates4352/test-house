import styled, { css } from 'styled-components';
import { IconArrow } from '../../../../icons/Icon-arrow';

type ButtonSelectType = {
  isActive?: boolean;
};

const ButtonSelect = styled.button<ButtonSelectType>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: var(--width-button-select, 255px);
  margin-bottom: 8px;
  padding: 13px 16px 17px 16px;
  font: var(--text-16);
  color: var(--black);
  background-color: var(--white);
  border: 1px solid var(--light-grey);
  border-radius: 8px;
  transition: color 300ms ease, border-color 300ms ease,
    transform 350ms cubic-bezier(0, 1.64, 0, 1.9);

  &:hover {
    border-color: var(--deep-blue);
    color: var(--deep-blue);
  }

  &:active {
    transform: scale(0.96);
  }

  ${props =>
    props.isActive &&
    css`
      border-color: var(--deep-blue);
      color: var(--deep-blue);

      ${Arrow} {
        transform: translateY(2px) rotate(180deg);
      }
    `}
`;

const Arrow = styled(IconArrow)`
  transform: translateY(2px);
  width: 16px;
  height: 16px;
  transition: transform 300ms ease;
`;

export { ButtonSelect, Arrow };
