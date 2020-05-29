//index.js  
var app = getApp();
Page({
  data: {
 
  },
  onShow:function(){
    app.editTabBar();    //显示自定义的底部导航
  },
  tologs:function(){     //按钮的绑定事件，点击跳转至logs
    wx.redirectTo({
      url: '../logs/logs',
    })
  },
  onLoad: function () {
  
  }
})  

