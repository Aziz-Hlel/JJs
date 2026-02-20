import dayjs from '@/utils/dayjsConfig';
import type { ColumnDef } from '@tanstack/react-table';
import { ArrowUp, ChevronsUpDown } from 'lucide-react';
import HeaderContainer from '../ContainerComp/HeaderContainer';
import RowContainer from '../ContainerComp/RowContainer';
import type { TableRowType } from './typesAndFieldsDeclaration';
import ActionsColumn from '../columns/ActionsColumn';
import IsFeatured from '../EnumColumns/IsFeatured/IsFeatured';

type ColumnDefCustom<T> = ColumnDef<T> & { accessorKey?: keyof T };

const columnsRowsDefinition: ColumnDefCustom<TableRowType>[] = [
  {
    id: 'name',
    accessorFn: (row: TableRowType) => ({
      name: row.name,
      isFeatured: row.isFeatured,
    }),
    header: ({ column }) => {
      return (
        <HeaderContainer onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          <span>Name </span>
          {column.getIsSorted() === 'asc' && <ArrowUp />}
          {column.getIsSorted() === 'desc' && <ArrowUp className="rotate-180" />}
          {column.getIsSorted() === false && <ChevronsUpDown />}
        </HeaderContainer>
      );
    },
    cell: ({ getValue }) => {
      const { name, isFeatured } = getValue<{
        name: string;
        isFeatured: boolean;
      }>();
      return (
        <RowContainer className="lowercase w-96 ">
          <IsFeatured isFeatured={isFeatured} />
          &nbsp;
          {name}
        </RowContainer>
      );
    },

    enableSorting: true,
    enableHiding: true,
    enableGlobalFilter: true,
  },
  {
    id: 'description',
    accessorKey: 'description',
    header: ({ column }) => {
      return (
        <HeaderContainer onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          <span>Description</span>
          {column.getIsSorted() === 'asc' && <ArrowUp />}
          {column.getIsSorted() === 'desc' && <ArrowUp className="rotate-180" />}
          {column.getIsSorted() === false && <ChevronsUpDown />}
        </HeaderContainer>
      );
    },
    cell: ({ getValue }) => {
      const description = getValue<string>();
      return <RowContainer className=" w-96 truncate whitespace-nowrap ">{description}</RowContainer>;
    },

    enableSorting: true,
    enableHiding: true,
  },

  {
    id: 'date',
    accessorKey: 'date',
    header: ({ column }) => {
      return (
        <HeaderContainer onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          <span>Date</span>
          {column.getIsSorted() === 'asc' && <ArrowUp />}
          {column.getIsSorted() === 'desc' && <ArrowUp className="rotate-180" />}
          {column.getIsSorted() === false && <ChevronsUpDown />}
        </HeaderContainer>
      );
    },
    cell: ({ getValue }) => {
      const dateString = getValue<string>();
      return <RowContainer className=" w-full">{dateString}</RowContainer>;
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
  {
    accessorKey: 'updatedAt',
    header: ({ column }) => {
      return (
        <HeaderContainer onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          <span>Updated At</span>
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
  {
    id: 'actions',
    cell: ({ row }) => <ActionsColumn row={row} />,
    size: 32,
    minSize: 32,
    maxSize: 32,
    enableSorting: false,
    enableHiding: false,
  },
];

export default columnsRowsDefinition;
