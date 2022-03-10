exports.hexToBytes=(hex)=> {
    for (var bytes = [], c = 0; c < hex.length; c += 2)
        {bytes.push(parseInt(hex.substr(c, 2), 16));}
    i=0
    var byted=[]
    bytes.forEach(ele=>{
       var str=''
       ele = ele.toString(2)
       for(j=8;j>ele.length;j--){
            str= str +'0'
       }
       ele= str+ele
       byted.push(ele)
    })
    return byted;
}