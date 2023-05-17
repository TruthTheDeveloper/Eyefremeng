export const formatToCurrency = (amount) => {
  console.log(typeof amount, "amount");
  return Number(amount)
    ?.toFixed(2)
    ?.replace(/\d(?=(\d{3})+\.)/g, "$&,")
    ?.split(".")[0];
};

export const formatStr = (str) => {
  return str
    ?.replace(/\s+$/, "")
    ?.replace(/[^A-Z0-9/.']+/gi, "-")
    ?.replace(/[^A-Z0-9-.']+/gi, "'");
};

export const formatPriceToNumber = (amount) => {
  return amount?.replace(/,/g, "");
};
