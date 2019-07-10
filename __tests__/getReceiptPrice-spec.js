const getReceiptPrice = require('../getReceiptPrice');

it ('should add two numbers', () => {
    expect(getReceiptPrice([{id: "0001", name : "Coca Cola", price: 3,number:1},{id: "0003", name : "Pepsi-Cola", price: 5,number:2},{id: "0005", name : "Dr Pepper", price: 7,number:1}])).toEqual(20);
});