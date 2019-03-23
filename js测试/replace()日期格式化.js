var array = ['2015.7.28','2015-7-28','2015/7/28','2015.7-28','2015-7.28','2015/7---28'];
function formatDate(date){
    return date.replace(/(\d+)\D+(\d+)\D+(\d+)/,'$1年$2月$3日')
}
var result = [];
for(var i = 0 ; i < array.length; i++){
    result.push(formatDate(array[i]));
}
console.log(result);//["2015年7月28日", "2015年7月28日", "2015年7月28日", "2015年7月28日", "2015年7月28日", "2015年7月28日"]    