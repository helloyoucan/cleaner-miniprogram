// components/createOrder/index.js
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
    showTopTips: false,
    isAgree: false,
    timeIndex: 0,
    timeList: [{
        time: '2021/03/01 21:00-22:00'
      },
      {
        time: '2021/03/01 22:00-23:00'
      },
      {
        time: '2021/03/02 21:00-22:00'
      },
      {
        time: '2021/03/02 22:00-23:00'
      },
      {
        time: '2021/03/03 21:00-22:00'
      },
      {
        time: '2021/03/03 22:00-23:00'
      },
    ],
    files: [{
      url: 'http://mmbiz.qpic.cn/mmbiz_png/VUIF3v9blLsicfV8ysC76e9fZzWgy8YJ2bQO58p43Lib8ncGXmuyibLY7O3hia8sWv25KCibQb7MbJW3Q7xibNzfRN7A/0',
    }, {
      loading: true
    }, {
      error: true
    }],
    formData: {
      region: ['广东省', '广州市', '海珠区'],
      date: '2016-09-01',
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindAgreeChange: function (e) {
      console.log('checkbox发生change事件，携带value值为：', e.detail.value)
      this.setData({
        isAgree: e.detail.value.length > 0
      })
    },
    formInputChange(e) {
      const {
        field
      } = e.currentTarget.dataset
      console.log(field, e.detail.value)
      this.setData({
        [`formData.${field}`]: e.detail.value
      })
    },
    chooseImage: function (e) {
      var that = this;
      wx.chooseImage({
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          that.setData({
            files: that.data.files.concat(res.tempFilePaths)
          });
        }
      })
    },
    previewImage: function (e) {
      wx.previewImage({
        current: e.currentTarget.id, // 当前显示图片的http链接
        urls: this.data.files // 需要预览的图片http链接列表
      })
    },
    selectFile(files) {
      console.log('files', files)
      // 返回false可以阻止某次文件上传
    },
    uplaodFile(files) {
      console.log('upload files', files)
      // 文件上传的函数，返回一个promise
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject('some error')
        }, 1000)
      })
    },
    uploadError(e) {
      console.log('upload error', e.detail)
    },
    uploadSuccess(e) {
      console.log('upload success', e.detail)
    },
  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      this.setData({
        selectFile: this.selectFile.bind(this),
        uplaodFile: this.uplaodFile.bind(this)
      })
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },  
})