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
export const getBranch = ({
  province,
  city,
  area
}) => httpApi.Get({
  path: "/wx/branch",
  // todo 中文文字变乱码了
  data: {
    province,
    city,
    area
  }
})