// components/slot-header/slot-header.js
Component({
  options: {
    // 设置允许多个插槽
    multipleSlots: true
  },
  // 组件生命周期
  lifetimes: {
    created() {
      console.log('组件被创建')
    },
    attached() {
      console.log('组件被挂载到组件树')
    },
    detached() {
      console.log('组件从组件树移除')
    }
  },
  // 所在页面生命周期
  pageLifetimes: {

  },
  /**
   * 组件的属性列表
   */
  properties: {

  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})