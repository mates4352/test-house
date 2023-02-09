import styled from "styled-components";

export const FieldTextStyles = {
  Wrap: styled.div`
    display: grid;
    grid-auto-rows: minmax(min-content, max-content);
    justify-items: center;
    row-gap: 12px;
    width: 100%;
  `,

  Textarea: styled.textarea<any>`
    width: 100%;
    min-height: 120px;
    padding: 20px;
    border-radius: 12px;
    overflow: hidden;
    resize: none;
  `,
}