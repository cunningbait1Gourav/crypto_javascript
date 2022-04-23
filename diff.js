const { num2bin } = require('./num2bin')
const { bin2String } = require('./bytes2string')

state = [[99, 114, 121, 112], [116, 111, 123, 100], [49, 102, 102, 85], [115, 51, 82, 125]]
s=[]

state.forEach(element => {
    element.forEach(ele=>{
       s.push(num2bin(ele))
    })
    element=s
});
console.log(bin2String(s))
