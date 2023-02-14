import styled from "styled-components";
import {CustomInputSearch} from "../../../../actions/custom-input-search";
import {TableOrders} from "../../../../statics/table-orders";

const AdminListOrders = styled.div`

`

const InputSearch = styled(CustomInputSearch)`
  margin-bottom: 24px;
`

const Table = styled(TableOrders)`
  margin-bottom: 48px;
`

export {AdminListOrders, InputSearch, Table}