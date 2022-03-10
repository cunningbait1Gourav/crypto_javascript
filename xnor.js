exports.XNOR = (string,string2)=>{
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
