// pages/base-api/base-api.js
Page({
  showInfo() {
    wx.showToast({
      title: '这里展示信息',
      mask: true
    })
  },
  showInfoModal() {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      confirmText: '确认按钮',
      cancelText: '取消按钮',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  showAction() {
    wx.showActionSheet({
      itemList: ['QQ', '微信', '微博', '抖音'],
      alertText: '看看出现在那里',
      success(res) {
        console.log(res, 'showActionSheet, 根据点击的索引做判断')
      },
      fail(res) {
        console.log(res.errMsg, 'showActionSheet')
      }
    })
  },
  getSystemInfo() {
    wx.getSystemInfo({
      success: (result) => {
        console.log(result, 'result')
      },
    })
  },
  // 获取位置信息
  getLoaction() {
    // 数据解密
    wx.getStorage({
      key: 'loaction',
      encrypt: true,
      success(res) {
        console.log(res.data)
      }
    })
    console.log(enctyctData, 'enctyctData')
    wx.getLocation({
      success(res) {
        // 数据加密
        wx.setStorage({
          key: 'loaction',
          data: {
            latitude: res.latitude,
            longitude: res.longitude,
          },
          encrypt: true
        })
      },
      fail(err) {
        console.log(err)
      }
    })
  },
  // 分享功能
  onShareAppMessage() {
    return {
      title: '这是我自定义的标题',
      path: '/pages/base-request/base-request',
      imageUrl: 'https://img11.360buyimg.com/babel/s320x320_jfs/t1/119627/18/32013/91324/63451aeeE98dff558/0c55f97b745305ac.jpg!cc_320x320.webp'
    }
  }
})