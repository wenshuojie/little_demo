var str = 'aaaaabbbbbdddddaaaaaaaffffffffffffffffffgggggcccccce';
var pattern = /(\w)\1+/g;
var maxLength = 0;
var maxValue = '';
var result = str.replace(pattern,function(match,match1,pos,originalText){
    if(match.length > maxLength){
        maxLength = match.length;
        maxValue = match1;
        console.log("match="+match);
        console.log("match1="+match1);
    }
})
console.log(maxLength,maxValue);//18 "f"