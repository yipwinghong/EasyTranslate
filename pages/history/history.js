// pages/history/history.js
Page({
  data: {
    history: []
  },

  // 初始化
  onShow: function() {    // 进入Tab时即获取历史记录并展示
    this.setData({history: wx.getStorageSync('history') || []})
  },

  // 点击清除按钮即删除所有历史记录
  onTapDelete: function() {
    wx.setStorageSync('history', [])
    this.setData({ history: []})
    wx.switchTab({
      url: '/pages/history/history',
    })
  }
})