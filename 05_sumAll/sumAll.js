const sumAll = function(a, b) {
    
    if(a < 0 || b < 0 || 
        typeof(a) != "number" || typeof(b) != "number"){
            return "ERROR";
        }
    
    var sum = 0;
    var c = Math.min(a, b);
    var d = Math.max(a, b);

    for(var i = c; i <= d; i++){
        sum+= i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
