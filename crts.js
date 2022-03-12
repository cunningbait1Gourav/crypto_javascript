const { XNOR } = require('./xnor')
const {hexToBytes}= require('./hex2bytes')
const { bin2String }= require('./bytes2string')
const {text2Binary}= require('./text2bin')

msg = '0e0b213f26041e480b26217f27342e175d0e070a3c5b103e2526217f27342e175d0e077e263451150104'
msg = hexToBytes(msg)
console.log(msg)
testkey = 'crypto{'
testkey2 = '}'
testkey2= text2Binary(testkey2)
testkey= text2Binary(testkey)
console.log(testkey)
console.log(testkey2)
let key=[]
testkey.forEach(ele=>{
    ele='0'+ele
    key.push(ele)
})
console.log(testkey2)
testkey=[]
testkey = key
console.log(testkey)
let i=0
let arr=[]
testkey.forEach(ele => {
    arr.push(XNOR(ele,msg[i]))
    i++
});
testkey2.forEach(ele=>{
    arr.push('0' + XNOR(ele,msg[41]))
})
console.log(arr.length)
console.log(arr)

xored=[]
for( i =0 ; i<msg.length;i++){
    for(j=0;j<arr.length;j++){
       if(i%8==j) {xored.push(XNOR(msg[i],arr[j]))}
    }
}

console.log(xored)

console.log(bin2String(xored))