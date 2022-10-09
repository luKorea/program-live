// pages/base-component/base-component.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    choseImage: null
  },
  handleChoseImage() {
    wx.chooseMedia({
      mediaType: ['image'],
    }).then(res => {
      const {
        tempFiles
      } = res;
      this.setData({
        choseImage: tempFiles[0].tempFilePath
      })
    }).catch(err => {
      console.log(err)
    })
  },
  getuserinfo(info) {
    console.log(info, 'userInfo');
  },
  getUserInfoToApi() {
    wx.getUserProfile({
      desc: '我们将获取您的信息用于记录'
    }).then(res => {
      wx.setStorageSync('userInfo', res.userInfo)
    }).catch(err => {
      console.log(err)
    })
  },
  getPhoneNumber(phone) {
    console.log(phone, 'phone')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})