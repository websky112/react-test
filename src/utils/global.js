import BigNumber from "bignumber.js";

export const formatNumber = (numStr, decimals = 18) => {
  return BigNumber(numStr)
    .dividedBy(new BigNumber(10).pow(decimals))
    .toNumber();
};
