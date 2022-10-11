// components/list/list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  // 样式传递, 拿到父组件传入的样式
  externalClasses: ['tip'],
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // wxml中不能直接调用函数
    reducePrice() {
      return this.properties.list.reduce(function (pre, item) {
        return pre + item.price * item.count
      }, 0)
    },
    // 自定义事件
    changeTitle() {
      console.log('子组件点击title')
      this.triggerEvent('changeTitle', {
        title: '子组件发送事件修改标题'
      })
    }
  },
  pageLifetimes: {
    show() {
      console.log(this.properties.list)
    }
  }
})