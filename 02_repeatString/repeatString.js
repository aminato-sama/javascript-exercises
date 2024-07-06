const repeatString = function(s, n) {
    var res = n >= 0 ? "":"ERROR";

    for(var i = 0; i < n; i++){
        res+= s;
    }

    return res;
};

// Do not edit below this line
module.exports = repeatString;
