var array = [1, 2, 3, 4, 5];
console.log(array.sort(function () {
    return Math.random() - 0.5
})); //[2,1,5,4,3]


var arr = [1,2,3,4,5];
for(var i = 0 ; i < arr.length; i++){
  var randomIndex = Math.floor(Math.random()*arr.length);
    [arr[i],arr[randomIndex]] = [arr[randomIndex],arr[i]];
}
console.log(arr);//[2, 3, 1, 4, 5]