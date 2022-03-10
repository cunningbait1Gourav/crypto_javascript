exports.combinations=( input )=>{
    var number = parseInt( input, 2 );
    var combinations = [];
    var zeroes = (new Array(input.length)).join(0);
    for(var i=1;i<=number;i++){
      if((i&number) == i){ combinations.push( i ) }
    }
    return combinations.map( function(dec){
       return  (zeroes + dec.toString(2)).substr( -zeroes.length-1 );
    });
 }