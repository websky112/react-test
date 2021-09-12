import React from "react";
import { useTable, useSortBy, usePagination } from "react-table";

import Pagination from "./Pagination";

const Table = ({ columns, data, sortOptions = {} }) => {
  const {
    pageCount,
    gotoPage,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10, ...sortOptions },
    },
    useSortBy,
    usePagination
  );

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        gotoPage={gotoPage}
        pageCount={pageCount}
        pageIndex={state.pageIndex}
      />
    </>
  );
};

export default Table;
