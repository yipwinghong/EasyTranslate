//index.js
//获取应用实例
import {translate} from '../../utils/translate.js'
const app = getApp()

Page({
  data: {
    hideClearIcon: true,
    query: '',
    curLang: {}
  },

  // 初始化
  onShow: function () {
    if (this.data.curLang.lang !== app.globalData.curLang.lang) {
      this.setData({ curLang: app.globalData.curLang })
      this.onConfirm()
    }
  },

  // 设置输入文本
  onInput: function(e) {
    this.setData({'query': e.detail.value})
    this.setData({'hideClearIcon': this.data.query.length === 0})
  },
  
  // 清空编辑框
  onTapClose: function() {
    this.setData({ query: '', hideClearIcon: true})
  },
  
  // 查询翻译
  onConfirm: function () {
    if (!this.data.query)
      return

    // 调用百度翻译API
    translate(this.data.query, { from: 'auto', to: this.data.curLang.lang })
      .then(
        res => {
          this.setData({ 'result': res.trans_result })
          let history = wx.getStorageSync('history') || []
          history.unshift({ query: this.data.query, result: res.trans_result[0].dst })
          history.length = history.length > 10 ? 10 : history.length
          wx.setStorageSync('history', history)   // 保存翻译历史（最多10条）
      }
    )
  }
})
