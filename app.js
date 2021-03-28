// app.js
import {
  getSession
} from './api/index.js'
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log("res.code:", res)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        getSession(res.code)
          .then(resp => {

          }).catch(err => {

          })
      }
    })
  },
  globalData: {
    userInfo: null
  }
})