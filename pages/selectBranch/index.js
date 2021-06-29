// pages/selectBranch/index.js
import {
  getBranch
} from '../../api/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarBtn: { // 胶囊位置信息
      height: 0,
      width: 0,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    branchList: [],
    map: {
      longitude: 0,
      latitude: 0,
      scale: 16, //16->100m
      markers: [],
      circles: [],
    },
    mapContext: null
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.layoutNavbarBtn();
    this.setData({ mapContext: wx.createMapContext("map", this) })
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        this.setData({
          map: {
            latitude: res.latitude,
            longitude: res.longitude,
          }
        },()=>this.getBranchByRegion())
      }
    })
  },
  bindregionchange(e) {
    if (e.type == "end" && e.causedBy != "update") {
      this.getBranchByRegion();
    }
  },
  /**
   * 根据视野获取网点
   */
  getBranchByRegion() {
    this.data.mapContext.getRegion({
      success: ({ southwest, northeast }) => {
        getBranch([southwest.longitude, northeast.longitude].sort(), [southwest.latitude, northeast.latitude].sort()).then(res => {
          if (res.code == 0) {
            const circles = res.data.map(item => ({
              latitude: item.latitude,
              longitude: item.longitude,
              color: '#FF0000DD',
              fillColor: '#7cb5ec88',
              radius: item.range,
              strokeWidth: 1
            }));
            const branchList = res.data.map(item => ({
              ...item,
              distance: this.getDistance(this.data.map.latitude, this.data.map.longitude, item.latitude, item.longitude)
            }));
            const markers = res.data.map((item) => ({
              id: item.id,
              zindex: 99,
              latitude: item.latitude,
              longitude: item.longitude,
              width: '50rpx',
              height: '50rpx',
            }));
            this.setData({
              branchList,
              map: {
                ...this.data.map,
                circles,
                markers
              }
            })
          }
        })
      },
      fail: () => {

      }
    })
  },
  goBack() {
    wx.navigateBack()
  },
  // 计算距离函数
  Rad(d) {
    //根据经纬度判断距离
    return d * Math.PI / 180.0;
  },
  getDistance(lat1, lng1, lat2, lng2) {
    // lat1用户的纬度
    // lng1用户的经度
    // lat2商家的纬度
    // lng2商家的经度
    var radLat1 = this.Rad(lat1);
    var radLat2 = this.Rad(lat2);
    var a = radLat1 - radLat2;
    var b = this.Rad(lng1) - this.Rad(lng2);
    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
    s = s * 6378.137;
    s = Math.round(s * 10000) / 10000;
    s = s.toFixed(1) + 'km' //保留两位小数
    // console.log('经纬度计算的距离:' + s)
    return s
  },
  layoutNavbarBtn() {
    const navbarBtn = wx.getMenuButtonBoundingClientRect()
    // console.log(wx.getSystemInfoSync().windowWidth, navbarBtn)
    this.setData({
      navbarBtn: {
        ...navbarBtn,
        left: wx.getSystemInfoSync().windowWidth - navbarBtn.right
      }
    })
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