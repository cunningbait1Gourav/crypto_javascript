buffer = 11515195063862318899931685488813747395775516287289682636499965282714637259206269n;

number= buffer.toString(16)
console.log(number.length)
number= number.toString()
function hex_to_ascii(str1)
 {
	var hex  = str1.toString();
	var str2 = '';
	for (var n = 0; n < hex.length; n += 2) {
		str2 += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
	return str2;
 }

size_that= number.length
size_this = (number.length)/2
const arr= []

for(var i=0; i< size_that; i+=2){
        var str= '0x'+number[i]+number[i+1]
        arr.push(str)
}
arr.forEach(element => {
    element = hex_to_ascii(element)
    console.log(element)
});

