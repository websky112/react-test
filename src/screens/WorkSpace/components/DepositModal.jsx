import React, { useState, useMemo } from "react";
import { Modal } from "react-responsive-modal";

import { FlexView, Label, Space, TextInput, Button } from "../../../components";
import { formatNumber } from "../../../utils/global";
import "react-responsive-modal/styles.css";

const DepositModal = ({ open, onClose, data }) => {
  const { symbol, rate, stakedAmount } = data;
  const [depositingAmount, setDepositingAmount] = useState("");

  const projectedAnnualAmount = useMemo(() => {
    if (!isNaN(depositingAmount)) {
      return depositingAmount * (1 + rate);
    }

    return 0;
  }, [depositingAmount, rate]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      center
      classNames={{ modal: "custom-modal" }}
    >
      <Label text="Deposit" size={18} weight="bold" />
      <Space size={20} />
      <TextInput
        label="Deposit Amount"
        height={40}
        value={depositingAmount}
        onChange={setDepositingAmount}
      />
      {Number(depositingAmount) > formatNumber(stakedAmount) && (
        <Label
          text="Insufficient Balance"
          fontSize={12}
          weight="bold"
          color="red"
        />
      )}
      <Space size={20} />
      <FlexView direction="row" justify="space-between" align="center">
        <FlexView direction="row">
          <Label text={`Annual amount:`} fontSize={12} weight="bold" />
          <Space size={12} />
          <Label text={`${projectedAnnualAmount} ${symbol}`} fontSize={12} />
        </FlexView>
        <FlexView direction="row">
          <Label text={`Rate:`} fontSize={12} weight="bold" />
          <Space size={12} />
          <Label text={rate} fontSize={12} />
        </FlexView>
      </FlexView>
      <Space size={20} />
      <FlexView direction="row" justify="flex-end" align="center">
        <Button onPress={onClose}>
          <Label text="OK" fontSize={16} weight="500" />
        </Button>
        <Space size={10} />
        <Button onPress={onClose}>
          <Label text="Cancel" color="grey" fontSize={16} weight="500" />
        </Button>
      </FlexView>
    </Modal>
  );
};

export default DepositModal;
