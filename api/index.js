import {
  httpApi
} from '../utils/util'
// 获取微信会话信息
export const getSession = code => httpApi.Get({
  path: "/wx/session",
  data: {
    code
  }
})
//获取所有服务网点
/**
 * 
 * @param {[]number} longitude 经度范围
 * @param {*} latitude 
 * @returns 
 */
export const getBranch = (lng_range, lat_range) => httpApi.Get({
  path: "/wx/branch",
  data: {
    min_lng:lng_range[0],
    max_lng:lng_range[1],
    min_lat:lat_range[0],
    max_lat:lat_range[1],
  }
})