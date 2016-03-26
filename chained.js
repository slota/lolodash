var _ = require("lodash");


var worker = function(input) {

  return _.chain(input)
  .sortBy()
  .map(function(chr) {
    return chr.toUpperCase() + 'CHAINED';
  })
}

module.exports = worker;
