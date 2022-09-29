import BigNumber from "bignumber.js";
// import { ParsedUrlQuery } from "querystring";

export default function calculatePrice(query) {
  let amount = new BigNumber(0);
  amount = amount.plus(parseInt(query.amount))
  return amount
}
