var _ = require("lodash");

// var characters = [
//   { id: 22, username: "martin", active: true},
//   { id: 23, username: "max",    active: false},
//   { id: 24, username: "linda",  active: false}
// ]
 var worker = function(x){
   return (_.filter(x, { active: true }));
 }
module.exports = worker;
