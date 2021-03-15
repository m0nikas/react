export default {
    formatCurrency: function (num) {
        return 'MRP Rs.' + Number(num.toFixed(1)).toLocaleString() + ' ';
    }
}

