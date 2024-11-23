const BUY_LEMONADE = "BUY_LEMONADE";
const RESTOCK_LEMONADE = "RESTOCK_LEMONADE";
const buyLemonade = (num) => {
  return {
    type: BUY_LEMONADE,
    payload: num,
  };
};
const restockLemonade = (num) => {
  return {
    type: RESTOCK_LEMONADE,
    payload: num,
  };
};
export { BUY_LEMONADE, RESTOCK_LEMONADE, buyLemonade, restockLemonade };
