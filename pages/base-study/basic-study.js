// pages/base-study/basic-study.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: '字符串展示',
    movieList: ['案例一', '案例二', '案例三', '案例四'],
    fieldList: [
      { name: '序号', props: 'id'},
      { name: '书名', props: 'name'},
      { name: '日期', props: 'date'},
      { name: '价格', props: 'price'},
      { name: '数量', props: 'count'},
      { name: '操作', props: 'handler'},
    ],
    dataList: [
      {
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
    ]
  },

  getData () {
    console.log(this.data);
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