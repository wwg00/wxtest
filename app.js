//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
    //第一种底部  
    editTabBar: function () {
      //使用getCurrentPages可以获取当前加载中所有的页面对象的一个数组，数组最后一个就是当前页面。
   
      var curPageArr = getCurrentPages();    //获取加载的页面
      var curPage = curPageArr[curPageArr.length - 1];    //获取当前页面的对象
      var pagePath = curPage.route;    //当前页面url
      if (pagePath.indexOf('/') != 0) {
        pagePath = '/' + pagePath;
      }
      
      var tabBar = this.globalData.tabBar;
      for (var i = 0; i < tabBar.list.length; i++) {
        tabBar.list[i].active = false;
        if (tabBar.list[i].pagePath == pagePath) {
          tabBar.list[i].active = true;    //根据页面地址设置当前页面状态    
        }
      }
      
      curPage.setData({
        tabBar: tabBar
      });
    },
    //第二种底部，原理同上
    editTabBar1: function () {
      // debugger
      var curPageArr = getCurrentPages();
      var curPage = curPageArr[curPageArr.length - 1];
      var pagePath = curPage.route;
      if (pagePath.indexOf('/') != 0) {
        pagePath = '/' + pagePath;
      }
      var tabBar = this.globalData.tabBar1;
      for (var i = 0; i < tabBar.list.length; i++) {
        tabBar.list[i].active = false;
        if (tabBar.list[i].pagePath == pagePath) {
          tabBar.list[i].active = true; 
        }
      }
      // debugger
      // curPage.setData({
      //   tabBar: tabBar
      // });
    },
  globalData: {
    userInfo: null,
    //第一种底部导航栏显示
    tabBar: {
      "color": "#9E9E9E",
      "selectedColor": "#f00",
      "backgroundColor": "#fff",
      "borderStyle": "#ccc",
      "list": [
        {
          "pagePath": "/pages/index/index",
          "text": "职位",
          "iconPath": "/images/my/my.png",
          "selectedIconPath": "/images/my/my.png",
          "clas": "menu-item",
          "selectedColor": "#4EDF80",
          active: true
        },
        {
          "pagePath": "/pages/about/about",
          "text": "简历",
          "iconPath": "/images/my/my.png",
          "selectedIconPath": "/images/my/my.png",
          "selectedColor": "#4EDF80",
          "clas": "menu-item",
          active: false
        },
        {
          "pagePath": "/pages/classic/classic",
          "text": "我的",
          "iconPath": "/images/my/my.png",
          "selectedIconPath": "/images/my/my.png",
          "selectedColor": "#4EDF80",
          "clas": "menu-item",
          active: false
        }
      ],
      "position": "bottom"
    },
    //第二种底部导航栏显示
    tabBar1: {
      "color": "#9E9E9E",
      "selectedColor": "#f00",
      "backgroundColor": "#fff",
      "borderStyle": "#ccc",
      "list": [
        {
          "pagePath": "/pages/book/book",
          "text": "首页",
          "iconPath": "/images/my/my.png",
          "selectedIconPath": "/images/my/my.png",
          "clas": "menu-item1",
          "selectedColor": "#4EDF80",
          active: false
        },
        {
          "pagePath": "/pages/logs/logs",
          "text": "消息",
          "iconPath": "/images/my/my.png",
          "selectedIconPath": "/images/my/my.png",
          "selectedColor": "#4EDF80",
          "clas": "menu-item1",
          active: true
        },
        {
          "pagePath": "/pages/cont/index",
          "text": "简历",
          "iconPath": "/images/my/my.png",
          "selectedIconPath": "/images/my/my.png",
          "selectedColor": "#4EDF80",
          "clas": "menu-item1",
          active: false
        },
        {
          "pagePath": "/pages/book-detail/index",
          "text": "我的",
          "iconPath": "/images/my/my.png",
          "selectedIconPath": "/images/my/my.png",
          "selectedColor": "#4EDF80",
          "clas": "menu-item1",
          active: false
        }
      ],
      "position": "bottom"
    }    
  },
  
})


