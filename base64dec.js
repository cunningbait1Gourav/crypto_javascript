'use strict';

let data = '72bca9b68fc16ac7beeb8f849dca1d8a783e8acf9679bf9269f7bf';
let buff = new Buffer(data, 'base64');
let text = buff.toString('ascii');

console.log(text);