const {bin2String} = require('./bytes2string')

var matrix = [
    [99, 114, 121, 112],
    [116, 111, 123, 105],
    [110, 109, 97, 116],
    [114, 105, 120, 125],
]

function convertToBinary(x) {
    let bin = 0;
    let rem, i = 1, step = 1;
    while (x != 0) {
        rem = x % 2;
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    console.log(bin)
    return bin;
}

str=[]

matrix.forEach(ele=>{
    ele.forEach(e=>{
        var b = convertToBinary(e);
        str.push(b)
    })
})

console.log(bin2String(str))