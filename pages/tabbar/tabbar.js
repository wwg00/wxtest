
var bar = function (event,self) {
  // debugger
  module.exports.active = event.detail;
  self.setData({
    tabBar:module.exports
  })
}
module.exports = {
  bar: bar,
  active:'home'
};
// module.exports.msg = 1;
