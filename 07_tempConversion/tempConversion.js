const convertToCelsius = function(F) {
  var C = (F -32)*(5/9);

  return Math.round((C + Number.EPSILON) * 10) / 10;
};

const convertToFahrenheit = function(C) {
  var F = C*(9/5) + 32;

  return Math.round((F + Number.EPSILON) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
