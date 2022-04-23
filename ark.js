const {bin2String} = require('./bytes2string')

var state = [
    [206, 243, 61, 34],
    [171, 11, 93, 31],
    [16, 200, 91, 108],
    [150, 3, 194, 51],
]

var round_key = [
    [173, 129, 68, 82],
    [223, 100, 38, 109],
    [32, 189, 53, 8],
    [253, 48, 187, 78],
]

st = []
rows = []
kt = []
rowk = []


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
function ark(s,k){
    for(i=0;i<4;i++){
        for(j=0;j<4;j++){
            rows.push(s[i][j]^k[i][j])
            console.log(rows)
        }
        st.push(rows)
        rows=[]
    }
    return st
}

const matrix = ark(state,round_key)
console.log(matrix)
str=[]
matrix.forEach(ele=>{
    ele.forEach(e=>{
        var b = convertToBinary(e);
        str.push(b)
    })
})

console.log(bin2String(str))
