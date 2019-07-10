function getReceiptPrice (list) {
    let price=0; 
    for(let i=0;i<list.length;i++){
        let obj=list[i];
        price=price+obj.price*obj.number;
    }
    return price;
}  

module.exports = getReceiptPrice;