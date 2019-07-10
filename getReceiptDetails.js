const getGoodsDetailById = require('./getGoodsDetailById');
const isObjectInArray = require('./isBarcodeInArray');
function getReceiptDetails (barcodes) {
    let list=[];
    for(let i=0;i<barcodes.length;i++){
        let obj1=getGoodsDetailById(barcodes[i]);
        if(isObjectInArray(obj1.id,list)){
            for(let j=0;j<list.length;j++){
                if(list[j].id==obj1.id){
                    let obj=list[j];
                    obj.number=obj.number+1;
                }
            }
        }else{
            let obj3={
                id:obj1.id,
                name:obj1.name,
                price:obj1.price,
                number:1
            }
            list.push(obj3);
        }
    }
    return list;
    
}

module.exports = getReceiptDetails;