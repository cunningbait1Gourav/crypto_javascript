const { XNOR } = require('./xnor')
const {hexToBytes}= require('./hex2bytes')
const { combinations }= require('./tns')
const { bin2String }= require('./bytes2string')

var inp= '73626960647f6b206821204f21254f7d694f7624662065622127234f726927756d'
var bytes = hexToBytes(inp)
var arr=[]

arr = combinations('11111111')
arr.push('00000000')

arr.forEach(ele=>{
    var brr=[]
    bytes.forEach(element => {
        brr.push(XNOR(ele,element))
    });
    char = bin2String(brr)
    if(char[0]=='c')
    {
        console.log(char)
    }
})
