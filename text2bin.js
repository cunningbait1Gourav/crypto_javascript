exports.text2Binary=(string)=> {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    });
}