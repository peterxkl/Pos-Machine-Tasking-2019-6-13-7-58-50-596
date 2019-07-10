const getGoodsDetailById = require('../getGoodsDetailById');

it ('should add two numbers', () => {
    expect(getGoodsDetailById("0001")).toEqual({"id": "0001", "name" : "Coca Cola", "price": 3});
});