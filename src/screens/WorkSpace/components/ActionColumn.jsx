import React, { useState } from "react";

import DepositModal from "./DepositModal";
import { Button, Label, Space } from "../../../components";

const ActionColumn = ({ data }) => {
  const [openDepositModal, setOpenDepositModal] = useState(false);
  const [openWithdrawModal, setOpenWithdrawModal] = useState(false);

  const handleOpenDepositDlg = () => setOpenDepositModal(true);
  const handleCloseDepositDlg = () => setOpenDepositModal(false);

  const handleOpenWithdrawDlg = () => setOpenWithdrawModal(true);
  const handleCloseWithdrawDlg = () => setOpenWithdrawModal(false);

  return (
    <>
      <Button onPress={handleOpenDepositDlg}>
        <Label text="Deposit" fontSize={12} weight="600" />
      </Button>
      <Space size={0} />
      <Button onPress={handleOpenWithdrawDlg}>
        <Label text="Withdraw" fontSize={12} weight="600" />
      </Button>
      <DepositModal
        open={openDepositModal}
        data={data}
        onClose={handleCloseDepositDlg}
      />
    </>
  );
};

export default ActionColumn;
