var _ = require("lodash");

var worker = function(item){
  var counted = []
  comments = _.groupBy(item, 'username')
  _.forEach(comments, function (item, name) {
    counted.push({
      username: name,
      comment_count: _.size(item)
    })
  })
  return _.sortBy(counted, "comment_count").reverse();

}

module.exports = worker;
