// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: ''
  },
  goPage() {
    const url = `/pages/detail/detail?name=korea&age=20`
    wx.navigateTo({
      url,
      events: {
        getData(data) {
          console.log(data, '获取其他页面传递的参数')
        }
      }
    })
  }
})