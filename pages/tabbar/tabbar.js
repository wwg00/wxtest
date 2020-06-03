
let tabChange = function (event) {
  // debugger
  module.exports.active = event.detail;
  // self.setData({
  //   tabBar:module.exports
  // })
  wx.redirectTo({
    url:event.detail
  })
}
let tabActive = function (self){
  self.setData({
    tabBar:module.exports
  })
}
module.exports = {
  tabChange: tabChange,
  active:'/pages/pickTask/pickTask',
  tabActive:tabActive
};
// module.exports.msg = 1;
