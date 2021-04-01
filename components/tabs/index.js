// components/tabs/index.js
Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    activeIndex: {
      type: Number,
      value: 0
    },
    tabs: {
      type: Array,
      value: [
        {
          title: "tab1",
        }, {
          title: "tab2",
        }
      ]
    }
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
    handleSwiperChange() {

    }
  }
})