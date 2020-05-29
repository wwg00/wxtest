//logs.js  
var app = getApp();
Page({
  data: {
   
  },
  //点击按钮跳转页面
  toindex: function () {
    wx.redirectTo({
      url: '../index/index',
    })
  },
  onLoad: function () {
    //加载本页面的tabBar样式
    app.editTabBar1();
  },

})  