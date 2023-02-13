import styled from "styled-components";

const Contacts = styled.div`

`

const List = styled.ul`
  display: grid;
  grid-auto-rows: minmax(min-content, max-content);
  row-gap: 24px;
  margin-bottom: 32px;
`


const Item = styled.li`
  
`

const Button = styled.button`
  display: block;
  padding: 12px 8px;
  margin: 0 auto;
  background-color: bisque;
  border-radius: 8px;
  transition: background-color 300ms ease;

  &:hover {
    background-color: #ffdb9c;
  }
`

export {Contacts, List, Item, Button}