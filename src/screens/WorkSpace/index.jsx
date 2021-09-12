import React, { useMemo } from "react";

import { NameColumn, ActionColumn } from "./components";
import { Label, Table } from "../../components";
import { mockData } from "../../__mock";
import { formatNumber } from "../../utils/global";

const Workspace = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Farm",
        accessor: "name",
        style: { width: "20%", textAlign: "center" },
        Cell: ({ row }) => {
          const { name, symbol } = row.original;
          return <NameColumn name={name} symbol={symbol} />;
        },
      },
      {
        Header: "Interest Rate",
        accessor: "rate",
        style: { width: "20%", textAlign: "center" },
        Cell: ({ row }) => {
          const { rate } = row.original;
          return <Label fontSize={13} weight="400" text={`${rate * 100}%`} />;
        },
      },
      {
        Header: "Staked Amount",
        accessor: "stakedAmount",
        style: { width: "20%", textAlign: "center" },
        Cell: ({ row }) => {
          const { stakedAmount, decimal, symbol } = row.original;
          return (
            <Label
              fontSize={13}
              weight="400"
              text={`${formatNumber(stakedAmount, decimal)} ${symbol}`}
            />
          );
        },
      },
      {
        Header: "Earned Amount",
        accessor: "earnedAmount",
        style: { width: "20%", textAlign: "center" },
        Cell: ({ row }) => {
          const { earnedAmount, decimal, symbol } = row.original;
          return (
            <Label
              fontSize={13}
              weight="400"
              text={`${formatNumber(earnedAmount, decimal)} ${symbol}`}
            />
          );
        },
      },
      {
        Header: "",
        accessor: "w",
        style: { width: "20%", textAlign: "center" },
        Cell: ({ row }) => <ActionColumn data={row.original} />,
      },
    ],
    []
  );

  return <Table columns={columns} data={mockData} />;
};

export default Workspace;
