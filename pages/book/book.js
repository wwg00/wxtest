import {
  BookModel
} from '../../models/book.js'

import {
  random
} from '../../utils/common.js'

import tabBar from '../tabbar/tabbar.js'

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

    tabBar.bar(event,this)

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
