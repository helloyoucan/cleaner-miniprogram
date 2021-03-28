// components/tabs/index.js
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    activeIndex: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabs: [{
        title: "我们",
        path: ""
      },
      {
        title: "下单",
        path: ""
      },
      {
        title: "订单",
        path: ""
      },
      {
        title: "个人",
        path: ""
      },
    ]
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})