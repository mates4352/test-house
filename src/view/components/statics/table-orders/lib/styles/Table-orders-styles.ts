import styled, {css} from "styled-components";
import {Link} from "react-router-dom";
import {StatusOrder} from "../../../../../../core/utils/enum/status/status-order";
import {
  CustomPopupEditStatusOrder
} from "../../../../popups/custom-popup-edit-status-order/ui/Custom-popup-edit-status-order";

type TrType = {
  status?: StatusOrder.SENT | StatusOrder.IN_PROCESSING | StatusOrder.ACCEPTED
}

const Table = styled.table`
  display: grid;
  grid-template-columns: repeat(3, 1fr) repeat(1, minmax(min-content, max-content));
  row-gap: 12px;
  border-radius: 24px;
  box-shadow: 0 0 3px #c0c8ff;
  background-color: #f8f8ff;
  padding: 0 24px 24px;
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
      background-color: #d4d4ff;
    }
  `}

  ${props => props.status === StatusOrder.IN_PROCESSING && css`
    td {
      background-color: #ffe5bf;
    }
  `}

  ${props => props.status === StatusOrder.ACCEPTED && css`
    td {
      background-color: #bae4e5;
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

const Wrap = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(min-content, max-content);
  column-gap: 12px;
`

const WrapButtons = styled.div`
  position: relative;
`

const LinkElement = styled(Link)`

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

export {Table, Thead, Tbody, Tr, Th, Td, LinkElement, Wrap, WrapButtons, Status, Name, Date, PopupEditStatus}