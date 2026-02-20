import dayjs from '@/utils/dayjsConfig';
import type { ColumnDef, Header } from '@tanstack/react-table';
import { ArrowUp, ChevronsUpDown } from 'lucide-react';
import HeaderContainer from '../ContainerComp/HeaderContainer';
import RowContainer from '../ContainerComp/RowContainer';
import type { TableRowType } from './typesAndFieldsDeclaration';
import type { PointsTransactionType } from '@contracts/types/enums/enums';
import TransactionTypeComponent from '../EnumColumns/TransactionType/TransactionTypeComponent';

type ColumnDefCustom<T> = ColumnDef<T> & {
  accessorKey?: keyof T;
  accessorFn?: (row: T) => unknown;
  header: Header<T, unknown>;
};

const columnsRowsDefinition: ColumnDef<TableRowType>[] = [
  {
    id: 'type',
    accessorKey: 'type',
    header: ({ column }) => {
      return (
        <HeaderContainer onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          <span>Type</span>
          {column.getIsSorted() === 'asc' && <ArrowUp />}
          {column.getIsSorted() === 'desc' && <ArrowUp className="rotate-180" />}
          {column.getIsSorted() === false && <ChevronsUpDown />}
        </HeaderContainer>
      );
    },
    cell: ({ getValue }) => {
      const type = getValue<PointsTransactionType>();
      return (
        <RowContainer className="">
          <TransactionTypeComponent value={type} />
        </RowContainer>
      );
    },

    enableSorting: true,
    enableHiding: true,
  },
  {
    id: 'client-username',
    accessorKey: 'user',
    header: ({ column }) => {
      return (
        <HeaderContainer onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          <span>Client Name </span>
          {column.getIsSorted() === 'asc' && <ArrowUp />}
          {column.getIsSorted() === 'desc' && <ArrowUp className="rotate-180" />}
          {column.getIsSorted() === false && <ChevronsUpDown />}
        </HeaderContainer>
      );
    },
    cell: ({ getValue }) => {
      const offerName = getValue<TableRowType['user']>();
      return <RowContainer className="lowercase w-96 ">{offerName?.username ?? 'N/A'}</RowContainer>;
    },

    enableSorting: true,
    enableHiding: true,
    enableGlobalFilter: true,
  },
  {
    id: 'client-email',
    accessorKey: 'user',
    header: ({ column }) => {
      return (
        <HeaderContainer onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          <span>Client Email </span>
          {column.getIsSorted() === 'asc' && <ArrowUp />}
          {column.getIsSorted() === 'desc' && <ArrowUp className="rotate-180" />}
          {column.getIsSorted() === false && <ChevronsUpDown />}
        </HeaderContainer>
      );
    },
    cell: ({ getValue }) => {
      const offerName = getValue<TableRowType['user']>();
      return <RowContainer className="lowercase w-96 ">{offerName?.email ?? 'N/A'}</RowContainer>;
    },

    enableSorting: true,
    enableHiding: true,
    enableGlobalFilter: true,
  },
  {
    id: 'staff-username',
    accessorKey: 'staff',
    header: ({ column }) => {
      return (
        <HeaderContainer onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          <span>Staff Name </span>
          {column.getIsSorted() === 'asc' && <ArrowUp />}
          {column.getIsSorted() === 'desc' && <ArrowUp className="rotate-180" />}
          {column.getIsSorted() === false && <ChevronsUpDown />}
        </HeaderContainer>
      );
    },
    cell: ({ getValue }) => {
      const offerName = getValue<TableRowType['staff']>();
      return <RowContainer className="lowercase w-96 ">{offerName?.username ?? 'N/A'}</RowContainer>;
    },

    enableSorting: true,
    enableHiding: true,
    enableGlobalFilter: true,
  },
  {
    id: 'points',
    accessorKey: 'points',
    header: ({ column }) => {
      return (
        <HeaderContainer onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          <span>Points</span>
          {column.getIsSorted() === 'asc' && <ArrowUp />}
          {column.getIsSorted() === 'desc' && <ArrowUp className="rotate-180" />}
          {column.getIsSorted() === false && <ChevronsUpDown />}
        </HeaderContainer>
      );
    },
    cell: ({ getValue }) => {
      const points = getValue<string>();
      return <RowContainer className=" w-96 truncate whitespace-nowrap ">{points}</RowContainer>;
    },

    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => {
      return (
        <HeaderContainer onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          <span>Created At</span>
          {column.getIsSorted() === 'asc' && <ArrowUp />}
          {column.getIsSorted() === 'desc' && <ArrowUp className="rotate-180" />}
          {column.getIsSorted() === false && <ChevronsUpDown />}
        </HeaderContainer>
      );
    },
    cell: ({ getValue }) => {
      const dateString = getValue<string>();
      const formattedDate = dayjs(dateString).format('LL');
      return <RowContainer className=" w-full">{formattedDate}</RowContainer>;
    },

    enableSorting: true,
    enableHiding: true,
  },
];

export default columnsRowsDefinition;
