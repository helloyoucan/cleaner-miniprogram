// pages/selectBranch/index.js
import {
  getBranch
} from '../../api/index'
import {
  getRegion
} from '../../api/baiduMap'
const branchList = [{
    latitude: 23.02295,
    longitude: 113.12192,
    name: '网点1',
    contact: '张生',
    phone: 15603011304,
  },
  {
    latitude: 23.03586,
    longitude: 113.12192,
    name: '网点2',
    contact: '张生',
    phone: 15603011304,
  },
  {
    latitude: 23.04287,
    longitude: 113.12192,
    name: '网点3',
    contact: '张生',
    phone: 15603011304,
  },
  {
    latitude: 23.05388,
    longitude: 113.12192,
    name: '网点4',
    contact: '张生',
    phone: 15603011304,
  },
  {
    latitude: 23.06489,
    longitude: 113.12192,
    name: '网点5',
    contact: '张生',
    phone: 15603011304,
  },
  {
    latitude: 23.05388,
    longitude: 113.12192,
    name: '网点4',
    contact: '张生',
    phone: 15603011304,
  },
  {
    latitude: 23.06489,
    longitude: 113.12192,
    name: '网点5',
    contact: '张生',
    phone: 15603011304,
  },
  {
    latitude: 23.05388,
    longitude: 113.12192,
    name: '网点4',
    contact: '张生',
    phone: 15603011304,
  },
  {
    latitude: 23.06489,
    longitude: 113.12192,
    name: '网点5',
    contact: '张生',
    phone: 15603011304,
  },
]
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
    branchList,
    map: {
      longitude: 0,
      latitude: 0,
      scale: 16, //16->100m
      markers: [],
      circles: []
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.layoutNavbarBtn();
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        // console.log(res, this.data.map)
        const circles = this.data.branchList.map(item => ({
          latitude: item.latitude,
          longitude: item.longitude,
          color: '#FF0000DD',
          fillColor: '#7cb5ec88',
          radius: 200,
          strokeWidth: 1
        }));
        const branchList = this.data.branchList.map(item => ({
          ...item,
          distance: this.getDistance(res.latitude, res.longitude, item.latitude, item.longitude)
        }));
        const markers = this.data.branchList.map((item, index) => ({
          id: index,
          zindex: 99,
          latitude: item.latitude,
          longitude: item.longitude,
          width: '100rpx',
          height: '100rpx',
          iconPath: '../../assets/images/location.png'
        }));
        this.setData({
          branchList,
          map: {
            latitude: res.latitude,
            longitude: res.longitude,
            circles,
            markers
          }
        })
        getRegion({
          lat: res.latitude,
          log: res.longitude
        }).then(res => {
          // todo
          console.log(res)
          getBranch({
            province: res.address_component.province,
            city: res.address_component.city,
            area: res.address_component.district,
          }).then(res => {
            if (res.code == 0) {
              console.log(res)
            }
          })
        })


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