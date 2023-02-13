import styled, {css} from "styled-components";
import {Link} from "react-router-dom";
import {
  CustomPopupEditStatusOrder
} from "../../../../../popups/custom-popup-edit-status-order/ui/Custom-popup-edit-status-order";
import {StatusOrder} from "../../../../../../../core/utils/enum/status/status-order";

type TrType = {
  status?: StatusOrder.SENT | StatusOrder.IN_PROCESSING | StatusOrder.ACCEPTED
}

const ListOrders = styled.div`
`

const Table = styled.table`
  display: grid;
  grid-template-columns: repeat(3, 1fr) repeat(3, minmax(min-content, max-content));
  row-gap: 12px;
  background-color: #a8ffd5;
  border-radius: 24px;
  border-collapse: collapse;
`

const Thead = styled.thead`
  display: contents;
`

const Tbody = styled.tbody`
  display: contents;
`

const Tr = styled.tr<TrType>`
  display: contents;
  
  ${props => props.status === StatusOrder.SENT && css`
    td {
      background-color: #ff8080;
    }
  `}

  ${props => props.status === StatusOrder.IN_PROCESSING && css`
    td {
      background-color: #ffd27f;
    }
  `}

  ${props => props.status === StatusOrder.ACCEPTED && css`
    td {
      background-color: #5fbd5f;
    }
  `}
`

const Th = styled.th`
  text-align: left;
  padding: 16px 0;
  font-size: 20px;
  
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

const WrapStatus = styled.div`
  position: relative;
`

const PopupEditStatus = styled(CustomPopupEditStatusOrder)`
  position: absolute;
  top: 15px;
  left: -113%;
  z-index: 999;
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

export {ListOrders, Table, Thead, Tbody, Tr, Th, Td, LinkElement, WrapStatus, Status, Name, Date, PopupEditStatus}