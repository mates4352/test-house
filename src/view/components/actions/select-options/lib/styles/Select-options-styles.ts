import styled from "styled-components";

const SelectOptions = styled.div`
  position: relative;
`

const SelectButtonOpen = styled.button`
  width: 50px;
  font-size: 20px;
  background-color: bisque;
  box-shadow: 0 0 3px #999;

  &:hover {
    background-color: #ffd59c;
  }
`

const Select = styled.ul`
  position: absolute;
  top: 30px;
  left: 0;
`

const SelectItem = styled.li`
`
const SelectButton = styled.button`
  width: 50px;
  font-size: 20px;
  background-color: bisque;
  box-shadow: 0 0 3px #999;

  &:hover {
    background-color: #ffd59c;
  }
`

export {SelectOptions, SelectButtonOpen, Select, SelectItem, SelectButton}