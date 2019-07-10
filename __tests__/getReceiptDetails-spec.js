const getReceiptDetails = require('../getReceiptDetails');

it ('should add two numbers', () => {
    expect(getReceiptDetails(['0001', '0003', '0005', '0003'])).toEqual([{id: "0001", name : "Coca Cola", price: 3,number:1},{id: "0003", name : "Pepsi-Cola", price: 5,number:2},{id: "0005", name : "Dr Pepper", price: 7,number:1}]);
});