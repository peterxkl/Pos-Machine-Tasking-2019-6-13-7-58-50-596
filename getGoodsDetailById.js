const data=[{"id": "0001", "name" : "Coca Cola", "price": 3},
{"id": "0002", "name" : "Diet Coke", "price": 4},
{"id": "0003", "name" : "Pepsi-Cola", "price": 5},
{"id": "0004", "name" : "Mountain Dew", "price": 6},
{"id": "0005", "name" : "Dr Pepper", "price": 7},
{"id": "0006", "name" : "Sprite", "price": 8},
{"id": "0007", "name" : "Diet Pepsi", "price": 9},
{"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
{"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
{"id": "0010", "name" : "Fanta", "price": 12}];
function getGoodsDetailById (id) {
    let flag=0;
    for(let i=0;i<data.length;i++){
        let obj=data[i];
        if(obj.id==id){
            flag=1;
            return obj;
        }
    }
    if(flag==0){
        return null;
    }
}

module.exports = getGoodsDetailById;