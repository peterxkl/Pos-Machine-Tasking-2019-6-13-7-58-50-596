const getReceiptDetails = require('./getReceiptDetails');
const getReceiptPrice = require('./getReceiptPrice');
function printReceipt (borcode) {
    let list=getReceiptDetails(borcode);
    let price=getReceiptPrice(list);
    let result=``;
    for(let i=0;i<list.length;i++){
        result=`${result}${list[i].name}  ${list[i].price}  ${list[i].number}\n`;
    }
    let result_end=`Receipts\n${result}Price: ${price}`;
    return result_end;
}

module.exports = printReceipt;