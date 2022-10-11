// pages/base-components/base-components.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '这是从父组件拿到数据渲染',
    dataList: [{
        id: 1,
        name: '《海底两万里》',
        price: 99,
        count: 3,
        date: new Date().toLocaleString()
      },
      {
        id: 2,
        name: '《狂人日记》',
        price: 66,
        count: 1,
        date: new Date().toLocaleString()
      },
      {
        id: 3,
        name: '《石头记》',
        price: 210,
        count: 2,
        date: new Date().toLocaleString()
      },
      {
        id: 4,
        name: '《骆驼祥子》',
        price: 430,
        count: 1,
        date: new Date().toLocaleString()
      }
    ],
  },
  handleChangeTitle(data) {
    this.setData({
      title: data.detail.title
    })
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