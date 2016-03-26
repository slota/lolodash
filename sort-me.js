var _ = require("lodash");

 var worker = function(x){
   return (_.sortBy(x, "quantity")).reverse();
 }
module.exports = worker;
