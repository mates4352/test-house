import styled from "styled-components";
import {Link} from "react-router-dom";

const ListOrders = styled.ul`
    display: grid;
    grid-auto-rows: minmax(min-content, max-content);
    row-gap: 24px;
  `

const Item = styled.li`
  
  `

const LinkElement = styled(Link)`
  `

const Order = styled.article`
    display: grid;
    grid-template-columns: 3fr minmax(min-content, max-content) 3fr;
    column-gap: 24px;
    width: 100%;
    padding: 24px 18px;
    background-color: #65f5be;
    border-radius: 12px;
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

export {ListOrders, Item, LinkElement, Order, Status, Name, Date}