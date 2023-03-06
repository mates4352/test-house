import styled from 'styled-components';
import { SelectStatus } from '../../../../actions/select-status';
import { TableOrders } from '../../../../statics/table-orders';
import { Pagination } from '../../../../actions/pagination';

const AdminEditPersonListOrders = styled.div``;

const SelectOrder = styled(SelectStatus)`
  margin-bottom: 44px;
`;

const Table = styled(TableOrders)`
  margin-bottom: 48px;
  grid-template-columns: repeat(4, 1fr) repeat(1, var(--grid-min-max));
`;

const PaginationOrders = styled(Pagination)`
  justify-content: center;
`;

export { AdminEditPersonListOrders, SelectOrder, Table, PaginationOrders };
