const printReceipt = require('../main');

it ('should add two numbers', () => {
    expect(printReceipt(['0001', '0003', '0005', '0003'])).toBe("Receipts\nCoca Cola  3  1\nPepsi-Cola  5  2\nDr Pepper  7  1\nPrice: 20");
});