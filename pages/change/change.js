// pages/test/test.js
const util = require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    curLang: {},
    langList: app.globalData.langList
  },

  // 加载当前选择语言
  onShow: function() {
    this.setData({curLang: app.globalData.curLang})
  },

  // 选择语言
  onTapItem: function(e) {
    let lang = e.currentTarget.dataset
    wx.setStorageSync('language', lang)
    this.setData({'curLang': lang})
    app.globalData.curLang = lang
    wx.switchTab({
      url: '/pages/index/index',
    })
  }
})