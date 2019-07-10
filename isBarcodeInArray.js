function isObjectInArray (objectid,list) {
    let flag=0;
    for(let i=0;i<list.length;i++){
        if(list[i].id==objectid){
            flag=1;
            return true;
        }
    }
    if(flag==0){
        return false;
    }
    
}
module.exports = isObjectInArray;