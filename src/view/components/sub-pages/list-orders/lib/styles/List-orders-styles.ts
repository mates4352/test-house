import styled from 'styled-components';
import { TableOrders } from '../../../../statics/table-orders';
import { SelectStatus } from '../../../../actions/select-status';

const ListOrders = styled.div``;

const SelectOrder = styled(SelectStatus)`
  margin-bottom: 44px;
`;

const Table = styled(TableOrders)`
  margin-bottom: 48px;
`;

export { ListOrders, SelectOrder, Table };
