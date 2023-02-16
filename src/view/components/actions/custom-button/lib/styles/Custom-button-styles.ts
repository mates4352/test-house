import styled from 'styled-components';

const CustomButton = styled.button<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  background-color: aliceblue;
  border: 1px solid antiquewhite;
  border-radius: 8px;
  transition: background-color 200ms ease;

  &:hover {
    background-color: #dbf1ff;
  }

  &:disabled:hover {
    background-color: aliceblue;
  }
`;
export { CustomButton };
