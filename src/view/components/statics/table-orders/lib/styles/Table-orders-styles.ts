import styled from 'styled-components';

type TableType = {
  admin?: boolean;
};

const Table = styled.table<TableType>`
  display: grid;
  grid-template-columns: repeat(3, 1fr) repeat(1, var(--grid-min-max));
  row-gap: 8px;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  display: contents;
`;

const Tbody = styled.tbody`
  display: contents;
`;

const Tr = styled.tr`
  display: contents;
`;

const Th = styled.th`
  text-align: left;
  padding: 16px 0;
  font: var(--text-16);
  color: var(--silver);

  ${Tr} &:first-of-type {
    padding-left: 32px;
  }

  ${Tr} &:not(&:first-of-type, &:last-of-type) {
    padding: 16px 12px;
  }
`;

const Td = styled.td`
  white-space: nowrap;
  background-color: var(--white);
  padding: 40px 0;
  cursor: pointer;
  transition: background-color 300ms ease;

  ${Tr} &:first-of-type {
    padding-left: 32px;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }

  ${Tr} &:not(&:first-of-type, &:last-of-type) {
    padding: 40px 12px;
  }

  ${Tr} &:last-of-type {
    padding-right: 83px;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }

  ${Tr}:hover & {
    background-color: var(--alice-blue);
  }
`;

const Text = styled.p`
  font: var(--text-16);
  color: var(--silver);
`;

const Name = styled.p`
  font: var(--text-16);
  color: var(--black);
  text-transform: capitalize;
`;

const Date = styled.time`
  font: var(--text-16);
  color: var(--dark-grey);
  justify-self: flex-end;
`;

const ButtonDelete = styled.button`
  color: var(--dark-grey);
  transition: color 300ms ease;

  &:hover {
    color: var(--deep-blue);
  }
`;

export { Table, Thead, Tbody, Tr, Th, Td, Text, Name, Date, ButtonDelete };
