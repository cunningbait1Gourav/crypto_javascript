str = 'label'
key = 13
const a=[]
function bin2String(array) {
  var result = "";
  for (var i = 0; i < array.length; i++) {
    result += String.fromCharCode(parseInt(array[i], 2));
  }
  return result;
}

function text2Binary(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    });
}

function requiredXor(string,key1){
    var value =''
    key1 = '000' + key1
    for(i=0;i<7;i++){
        if(key1[i]==1&&string[i]==1){
            value+='0'
         }
        else if(key1[i]==1||string[i]==1){
            value+='1'
        }
         else{
             value+='0'
         }
}
console.log(value)
return value
}

b_key=key.toString(2)
b_str= text2Binary(str)

b_str.forEach(element => {
    a.push(requiredXor(element,b_key))
});

encoded=bin2String(a)
console.log(encoded)

