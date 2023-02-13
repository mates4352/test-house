import styled from "styled-components";
import {Link} from "react-router-dom";

const ListOrders = styled.div`
  
`

const Table = styled.table`
  display: grid;
  grid-template-columns: repeat(3, 1fr) repeat(3,  minmax(min-content, max-content));
  row-gap: 12px;
  background-color: #a8ffd5;

  border-radius: 24px;
`

const Thead = styled.thead`
  display: contents;
`

const Tbody = styled.tbody`
  display: contents;
`

const Tr = styled.tr`
  display: contents;
`

const Th = styled.th`
  text-align: left;
  padding: 16px 0;

  ${Tr} &:first-of-type {
    padding-left: 24px;
  }

  ${Tr} &:not(&:first-of-type, &:last-of-type) {
    padding: 16px 12px;
  }
`

const Td = styled.td`
  white-space: nowrap;
  background-color: #65f5be;
  padding: 16px 0;

  ${Tr} &:first-of-type {
    padding-left: 24px;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }

  
  ${Tr} &:not(&:first-of-type, &:last-of-type) {
    padding: 16px 12px;
  }

  ${Tr} &:last-of-type {
    padding-right: 24px;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`

const LinkElement = styled(Link)`

`

const Status = styled.div`
    font-size: 18px;
  `

const Name = styled.p`
    font-size: 18px;
  `

const Date = styled.time`
    font-size: 18px;
    justify-self: flex-end;
  `

export {ListOrders, Table, Thead, Tbody, Tr, Th, Td, LinkElement, Status, Name, Date}