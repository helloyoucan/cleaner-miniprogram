// components/personal/index.js
Component({
  options: {
    addGlobalClass: true
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
    phone: '03123688777',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTabKeFu() {
      wx.makePhoneCall({
        phoneNumber: '03123688777',
      })
    }
  },
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行

    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
})