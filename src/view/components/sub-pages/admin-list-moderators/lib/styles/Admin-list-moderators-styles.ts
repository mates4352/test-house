import styled from 'styled-components';
import { TableOrders } from '../../../../statics/table-orders';
import { Pagination } from '../../../../actions/pagination';
import { SelectSearch } from '../../../../actions/select-search';
import { ButtonTextReset } from '../../../../actions/button-text-reset';

const AdminListModerators = styled.div``;

const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, var(--grid-min-max));
  align-items: flex-start;
  column-gap: 24px;
  margin-bottom: 44px;
`;

const Select = styled(SelectSearch)`
  width: 186px;
`;

const ButtonReset = styled(ButtonTextReset)`
  padding-top: 13px;
`;

const Table = styled(TableOrders)`
  margin-bottom: 48px;
  grid-template-columns: 2.2fr 1.2fr 1.9fr repeat(1, var(--grid-min-max));
`;

const PaginationModerators = styled(Pagination)`
  justify-content: center;
`;

export {
  AdminListModerators,
  Wrap,
  Select,
  ButtonReset,
  Table,
  PaginationModerators,
};
