const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}
const BASE_URL = "http://127.0.0.1:8080";

const request = (method, {
  path,
  data
}) => {
  return new Promise((resolve, reject) =>
    wx.request({
      method,
      url: BASE_URL + path,
      data,
      success(resp) {
        // console.log(resp)
        resolve(resp.data)
      },
      fail(err) {
        console.log(err)
        reject(err)
      }
    })
  )
}
const requestBaiduMap = (method, {
  path,
  data
}) => {
  return new Promise((resolve, reject) => {
    wx.request({
      method,
      url: "https://apis.map.qq.com" + path,
      data: {
        ...data,
        key: "PSLBZ-Y6GWU-SQOVF-BPOJK-IESTV-TSBZV"
      },
      success(resp) {
        // console.log(resp)
        resolve(resp.data.result)
      },
      fail(err) {
        console.log(err)
        reject(err)
      }
    })
  })
}
const httpApi = {
  Get: (payload) => request('get', payload),
  Post: (payload) => request('post', payload),
  Delete: (payload) => request('delete', payload),
  Put: (payload) => request('put', payload),
}
const httpBaiduMap = {
  Get: (payload) => requestBaiduMap('get', payload),
  Post: (payload) => requestBaiduMap('post', payload),
  Delete: (payload) => requestBaiduMap('delete', payload),
  Put: (payload) => requestBaiduMap('put', payload),
}
module.exports = {
  formatTime,
  httpApi,
  httpBaiduMap
}