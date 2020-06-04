import {
  BookModel
} from '../../models/book.js'

import {
  random
} from '../../utils/common.js'

import tabBar from '../tabbar/tabbar.js'
import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify';
const bookModel = new BookModel()
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: [],
    searching: false,
    more: '',
    tabBar:tabBar
  },
  onChange(event){

    tabBar.tabChange(event)

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // bookModel.getHotList()
    //   .then(res => {
    //     this.setData({
    //       books: res
    //     })
    //   })
    // Notify({
    //   message: '自定义颜色',
    //   color: '#ad0000',
    //   background: '#ffe1e1',
    //   duration:0,
    //   top:'78%'
    // });
    tabBar.tabActive(this)
  },

  onSearching (event) {
    this.setData({
      searching: true
    })
  },

  onCancel (event) {
    this.setData({
      searching: false
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      more: random(16)
    })
  },
    /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // debugger
  },

})
