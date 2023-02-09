import styled, {css} from "styled-components";

type InputStylesType = any & {
  isError?: boolean;
  isValid?: boolean;
}

export const InputStyles = {
  Wrap: styled.div`
    display: grid;
    grid-auto-rows: minmax(min-content, max-content);
    row-gap: 12px;
    width: 100%;
  `,

  Input: styled.input<InputStylesType>`
    width: 100%;
    height: 100%;
    padding: 4px 12px;
    border-radius: 4px;
    transition: border 350ms ease;
    border: 2px solid #ffbea6;

    ${props => props.isError &&
            css`
              border: 2px solid red;
            `
    }
    ${props => props.isValid &&
            css`
              border: 2px solid green;
            `
    }
    &::placeholder {
      font-size: 16px;
    }

    &:disabled {
      opacity: 0.7;
      border: 2px solid #e1e3ff;
    }
  `,
}