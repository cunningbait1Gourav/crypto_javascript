function XNOR(string,string2){
    var bytes =''
    for(let i=0; i<string.length; i++){
        if(string[i]=='0' && string2[i]=='0'){
            bytes = bytes+'1'
        }
        else if(string[i]=='1'&&string2[i]=='1'){
            bytes = bytes+'1'
        }
        else{
            bytes= bytes+'0'
        }
    }
    return bytes
}

function bin2String(array) {
    var result = "";
    for (var i = 0; i < array.length; i++) {
      result += String.fromCharCode(parseInt(array[i], 2));
    }
    return result;
  }


key1= 'a6c8b6733c9b22de7bc0253266a3867df55acde8635e19c73313'
m1 = '37dcb292030faa90d07eec17e3b1c6d8daf94c35d4c9191a5e1e'
m2 = 'c1545756687e7573db23aa1c3452a098b71a7fbf0fddddde5fc1'
m3= '04ee9855208a2cd59091d04767ae47963170d1660df7f56f5faf'
var i

function hexToBytes(hex) {
    for (var bytes = [], c = 0; c < hex.length; c += 2)
        {bytes.push(parseInt(hex.substr(c, 2), 16));}
    i=0
    return bytes;
}
const extra=''
var conv= []
k1= hexToBytes(key1)
k1.forEach(element => {
    var substr2=''
    var ele=element.toString(2)
    for(j=1;j<9;j++)
    {
        if(ele.length<j)
        {
            substr2 = substr2 + '0'
        }
    }
    ele = substr2 + ele
    conv.push(ele)
    i++
});

k1 = conv
console.log(k1[1])
conv= []

m1 = hexToBytes(m1)
m1.forEach(element => {
    var substr2=''
    var ele=element.toString(2)
    for(j=1;j<9;j++)
    {
        if(ele.length<j)
        {
            substr2 = substr2 + '0'
        }
    }
    ele = substr2 + ele
    conv.push(ele)
    i++
});

m1 = conv
conv =[]

m2 = hexToBytes(m2)
m2.forEach(element => {
    var substr2=''
    var ele=element.toString(2)
    for(j=1;j<9;j++)
    {
        if(ele.length<j)
        {
            substr2 = substr2 + '0'
        }
    }
    ele = substr2 + ele
    conv.push(ele)
    i++
});
m2 = conv
conv=[]

m3 = hexToBytes(m3)
m3.forEach(element => {
    var substr2=''
    var ele=element.toString(2)
    for(j=1;j<9;j++)
    {
        if(ele.length<j)
        {
            substr2 = substr2 + '0'
        }
    }
    ele = substr2 + ele
    conv.push(ele)
    i++
});

m3= conv
conv=[]

size= m2.length
let k2 = []

for(let g=0;g<k1.length;g++){
    conv = XNOR(k1[g],m1[g])
    k2.push(conv)
}
let k3 =[]

for(let g=0;g<m1.length;g++){
    conv = XNOR(k2[g],m2[g])
    k3.push(conv)
}

// finding flag in binary form 

let temp=[]
for(let g=0;g<m3.length;g++){
    conv = XNOR(k1[g],m3[g])
    temp.push(conv)
}

let temp2=[]
for(let g=0;g<m3.length;g++){
    conv = XNOR(k2[g],temp[g])
    temp2.push(conv)
}

let flag =[]
for(let g=0;g<m3.length;g++){
    conv = XNOR(k3[g],temp2[g])
    flag.push(conv)
}

let a = bin2String(flag)
console.log(a)