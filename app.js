//app.js
App({

  // 进入程序即执行，设置当前翻译语言
  onLaunch: function() {
    this.globalData.curLang = wx.getStorageSync('curLang') || this.globalData.langList[0]
  },
  globalData: {
    curLang: {},
    langList: [
      {
        'chs': '汉语',
        'lang': 'zh',
        "index": 1
      },
      {
        'chs': '英语',
        "lang": 'en',
        "index": 0
      },
      {
        'chs': '日语',
        'lang': 'jp',
        "index": 2
      },
      {
        'chs': '韩语',
        'lang': 'kor',
        "index": 3
      },
      {
        'chs': '法语',
        'lang': 'fra',
        "index": 4
      },
      {
        'chs': '西班牙语',
        'lang': 'spa',
        "index": 5
      },
      {
        'chs': '阿拉伯语',
        'lang': 'ara',
        "index": 6
      }
    ]
  }
})