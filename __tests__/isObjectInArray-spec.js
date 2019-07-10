const isObjectInArray = require('../isBarcodeInArray');

it ('should add two numbers', () => {
    expect(isObjectInArray("0001",[{id:"0001",name:"oocl",price:20,number:1}])).toEqual(true);
});