// pages/createOrder/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showTopTips: false,
    isAgree: false,
    timeIndex:0,
    timeList:[
      { time:'2021/03/01 21:00-22:00'},
      { time:'2021/03/01 22:00-23:00'},
      { time:'2021/03/02 21:00-22:00'},
      { time:'2021/03/02 22:00-23:00'},
      { time:'2021/03/03 21:00-22:00'},
      { time:'2021/03/03 22:00-23:00'},
    ],
    formData: {
      region: ['广东省', '广州市', '海珠区'],
      date: '2016-09-01',
    }
  },
  bindAgreeChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    this.setData({
      isAgree: e.detail.value.length > 0
    })
  },
  formInputChange(e) {
    const { field } = e.currentTarget.dataset
    console.log(field, e.detail.value)
    this.setData({
      [`formData.${field}`]: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})