const { XNOR } = require('./xnor')
const {hexToBytes}= require('./hex2bytes')
const { bin2String }= require('./bytes2string')
const {text2Binary}= require('./text2bin')

msg = '0e0b213f26041e480b26217f27342e175d0e070a3c5b103e2526217f27342e175d0e077e263451150104'
msg = hexToBytes(msg)
testkey = 'crypto{'
testkey= text2Binary(testkey)
let i=0
let arr=[]
testkey.forEach(ele => {
    arr= arr +XNOR(ele,msg[i])
    i++
});
console.log(arr)
for(var j =0 ; j<msg.length;j++){
    
}