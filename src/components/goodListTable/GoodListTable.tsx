/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-key */
import React from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { Product } from '../../types/Product';
import { TableDeleteButton } from './TableDeleteButton';
import './GoodListTable.scss';

type Props = {
  data: Product[],
};

const columns: ColumnDef<Product>[] = [
  {
    header: 'ID',
    accessorKey: 'id',
  },
  {
    header: 'Title',
    accessorKey: 'title',
  },
  {
    header: 'Description',
    accessorKey: 'description',
  },
  {
    header: 'Price',
    accessorKey: 'price',
  },
  {
    header: 'Images',
    accessorKey: 'images',
    cell: ({ row }) => {
      const rowInfo = row.original;

      return <img className="prodImg" src={rowInfo.images[0]} alt="img" />;
    },
  },
  {
    header: 'Rating',
    accessorKey: 'rating',
  },
  {
    header: 'Stock',
    accessorKey: 'stock',
  },
  {
    header: 'Category',
    accessorKey: 'category',
  },
  {
    header: 'Delete',
    accessorFn: (row) => row,
    cell: ({ row }) => {
      const rowInfo = row.original;

      return <TableDeleteButton row={rowInfo} />;
    },
  },
];

export const GoodListTable: React.FC<Props> = ({ data }) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  return (
    <div className="box">
      <table className="table">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div className="table-header">
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? 'cursor-pointer select-none'
                              : '',
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                          {{
                            asc: ' 🔼',
                            desc: ' 🔽',
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table
            .getRowModel()
            .rows
            .map(row => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map(cell => {
                    return (
                      <td key={cell.id} style={{ verticalAlign: 'middle' }}>
                        <div className="table-row">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
