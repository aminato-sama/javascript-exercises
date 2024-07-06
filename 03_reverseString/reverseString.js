const reverseString = function(string) {
    var returnValue = "";

    for(var i = string.length - 1; i >= 0; i--){
        returnValue+= string[i];
    }

    return returnValue;
};

// Do not edit below this line
module.exports = reverseString;
