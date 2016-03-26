var _ = require("lodash");

var worker = function(collection){
        _.forEach(collection,
          function(row) {
            if (row.population > 1.58) {
              row.size = "big"
            }
            else if (row.population > 0.5) {
              row.size = "med"
            }
            else {
              row.size = "small"
            }
          })
          return collection
        }
module.exports = worker;
 // var worker = function(x){
 //   return (_.filter(x, { active: true }));
 // }
