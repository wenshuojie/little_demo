var string = 'j1h342jg24g234j 3g24j1';
var pattern = /\d/g;
var valueArray = [];//值
var indexArray = [];//位置
var temp;
while((temp=pattern.exec(string)) != null){
    valueArray.push(temp[0]);
    indexArray.push(temp.index);  
}