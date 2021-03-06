
// pages/about/about.js
var app = getApp();
import tabBar from '../tabbar/tabbar.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      "text": "对话",
      "iconPath": "../../../images/tab/book.png",
      "selectedIconPath": "../../../images/tab/book@highlight.png",
      dot: false
      },
      {
        "text": "设置",
        "iconPath": "../../../images/tab/my.png",
        "selectedIconPath": "../../../images/tab/my@highlight.png",
          badge: 'New',
          dot: true
      }] ,
      tabBar:tabBar  ,
      loading:false
  },
  onChange(event){

    tabBar.tabChange(event)

  },
  tabChange(e) {
    console.log('tab change', e)
    wx.navigateTo({
        url:"../index/index"
    })
  },
  tapNav(){
    debugger
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // debugger
    // app.editTabBar();   
    tabBar.tabActive(this)
    console.log(this.data.tabBar)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(tabBar)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})