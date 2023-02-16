import styled from 'styled-components';

const SelectOptions = styled.div`
  position: relative;
`;

const SelectButtonOpen = styled.button`
  width: 50px;
  height: 30px;
  font-size: 20px;
  color: #fff;
  background-color: #020b41;
  box-shadow: 0 0 3px #999;
  transition: background-color 150ms ease, color 400ms;

  &:hover {
    background-color: #d6dcff;
    color: #020b41;
  }
`;

const Select = styled.ul`
  position: absolute;
  top: 30px;
  left: 0;
`;

const SelectItem = styled.li``;
const SelectButton = styled.button`
  width: 50px;
  height: 30px;
  font-size: 20px;
  color: #fff;
  background-color: #020b41;
  box-shadow: 0 0 3px #999;
  transition: background-color 150ms ease, color 400ms;

  &:hover {
    background-color: #d6dcff;
    color: #020b41;
  }
`;

export { SelectOptions, SelectButtonOpen, Select, SelectItem, SelectButton };
