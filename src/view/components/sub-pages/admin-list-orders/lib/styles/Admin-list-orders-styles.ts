import styled from 'styled-components';
import { TableOrders } from '../../../../statics/table-orders';
import * as C from '../../../../actions/select-status';
import { Pagination } from '../../../../actions/pagination';

const AdminListOrders = styled.div``;

const Table = styled(TableOrders)`
  margin-bottom: 48px;
  grid-template-columns: repeat(4, 1fr) repeat(1, var(--grid-min-max));
`;

const SelectStatus = styled(C.SelectStatus)`
  margin-bottom: 44px;
`;

const PaginationOrders = styled(Pagination)`
  justify-content: center;
`;

export { AdminListOrders, Table, SelectStatus, PaginationOrders };
