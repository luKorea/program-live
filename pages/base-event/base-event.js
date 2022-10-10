// pages/base-event/base-event.js
Page({
  data: {
    markData: {
      namer: '这是Mark数据',
      age: 20,
      height: 30,
      code: 'fjsklsdjf'
    }
  },
  handleClick(e) {
    console.log(e, '事件')
  },
  eventObject(e) {
    console.log(e, '事件对象')
  },
  markEvent(e) {
    console.log(e, 'markUse')
  }
})