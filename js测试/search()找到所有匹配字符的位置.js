function fnAllSearch(str,pattern){
    var pos = str.search(pattern); 
    var length = str.match(pattern)[0].length;
    console.log(length);
    var index = pos+length;
    var result = [];
    var last = index;
    result.push(pos);
    while(true){
        str = str.substr(index);                    
        pos = str.search(pattern);
        if(pos === -1){
            break;
        }
        length = str.match(pattern)[0].length;
        index = pos+length;
        result.push(last+pos);
        last += index;    
    }
    return result;
}    
console.log(fnAllSearch('cat23fbat246565sa3dftf44at',/\d+/));//[3,9,17,22]