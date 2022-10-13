// pages/base-request/base-request.js
import {
  hgRequest
} from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentPage: 1,
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getData()
  },
  async getData() {
    const {
      data: {
        data: {
          cityGroup
        }
      }
    } = await hgRequest.get({
      url: '/city/all',
      data: {
        page: this.data.currentPage
      }
    })
    const newData = [...this.data.list, ...cityGroup.hotCities]
    this.setData({
      list: newData
    })
    console.log(cityGroup, 'data')
    this.data.currentPage++
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
    this.getData()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})