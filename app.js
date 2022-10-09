// app.js
App({
  globalData: {
    userInfo: {
      name: 'korea',
      age: 20
    }
  },
  onShow(options) {
    console.log(options, 'onShow');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide(options) {
    console.log(options, 'onHide');
  },
})
