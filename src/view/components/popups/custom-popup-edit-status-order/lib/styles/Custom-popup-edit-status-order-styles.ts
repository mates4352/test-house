import styled from 'styled-components';

const CustomPopupEditStatusOrder = styled.div`
  padding: 12px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 0 3px #999;
`;

const List = styled.ul`
  display: grid;
  grid-auto-rows: minmax(min-content, max-content);
  row-gap: 10px;
`;

const Item = styled.li``;

const Button = styled.button`
  padding: 4px 8px;
  background-color: #7fe6fd;
  border-radius: 8px;

  &:hover {
    background-color: #31ceee;
  }
`;

export { CustomPopupEditStatusOrder, List, Item, Button };
