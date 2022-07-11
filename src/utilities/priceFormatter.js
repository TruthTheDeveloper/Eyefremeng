export const formatToCurrency = amount => {
    return  amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,").split(".")[0];
};

export const formatStr = (str) => {
    return str.replace(/\s+$/, '').replace(/[^A-Z0-9/.']+/ig, "-").replace(/[^A-Z0-9-.']+/ig, '\'')
}

export const formatPriceToNumber = amount => {
    return  parseFloat(amount.replace(/\,/g,''))
};

