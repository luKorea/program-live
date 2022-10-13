// pages/login/login.js
Page({
  onLoad(options) {
    if (!wx.getStorageSync('token')) this.login()
  },
  async login() {
    const {
      code
    } = await wx.login({})
    wx.request({
      url: 'http://123.207.32.32:3000/login',
      data: {
        code
      },
      method: 'POST',
      success(res) {
        const {
          token
        } = res.data
        wx.setStorageSync('token', token)
      }
    })
  }
})