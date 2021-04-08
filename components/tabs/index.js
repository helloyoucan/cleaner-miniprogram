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
      value: [{
        title: "tab1",
      }, {
        title: "tab2",
      }]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    _activeIndex: -1
  },
  created(){
    
  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      this.setData({
        _activeIndex: this.data.activeIndex
      })
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handleSwiperChange(e) {
      this.setData({
        _activeIndex: e.detail.current
      })
    },
    handleClick(e) {
      this.setData({
        _activeIndex: e.currentTarget.dataset.index
      })
    }
  }
})