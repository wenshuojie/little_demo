function allIndexOf(str,value){
    var result = [];
    var pos = str.indexOf(value);
    while(pos > -1){
        result.push(pos);
        pos = str.indexOf(value,pos+value.length);
    }
    return result;
}
console.log(allIndexOf("cat,bat,sat,fat","at"));