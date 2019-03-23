var str1 = 'j1h342jg24g234j 3g24j1';
var array = [];
var temp = '';
for(var i = 0; i < str1.length; i++){
    var value = parseInt(str1.charAt(i));//如果用Number()将无法排除空格
    if(!isNaN(value)){
        temp += str1.charAt(i);
    }else{
        if(temp != ''){
            array.push(temp);
            temp = '';    
        }
    }
}
if(temp != ''){
    array.push(temp);
    temp = '';    
}
console.log(array);//["1", "342", "24", "234", "3", "24", "1"]