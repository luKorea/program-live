// pages/detail/detail.js
Page({
  data: {
    userInfo: {
      name: '',
      age: ''
    }
  },
  onLoad(options) {
    this.setData({
      userInfo: options
    })
  },
  backHome() {
    const page = getCurrentPages();
    // 拿到上一个页面的实例
    const lastPage = page[page.length - 2];
    lastPage.setData({
      info: '这是详情页传递过来的数据'
    });
  },
  goHome1() {
    wx.navigateBack()
  },

  onUnload() {
    // this.backHome();
    this.eventBus()
  },
  eventBus() {
    const event = this.getOpenerEventChannel();
    event.emit('getData', {
      name: 'getOpenerEventChannel传递数据'
    })
  },
  goHome2() {
    this.eventBus()
    wx.navigateBack()
  }
})