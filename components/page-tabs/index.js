// components/page-tabs/index.js
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
      path: "/pages/aboutUs/index"
    },
    {
      title: "下单",
      path: "/pages/createOrder/index"
    },
    {
      title: "订单",
      path: "/pages/orderList/index"
    },
    {
      title: "个人",
      path: "/pages/personal/index"
    },
    ]
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})