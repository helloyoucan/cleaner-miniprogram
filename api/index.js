import {httpApi} from '../utils/util'
export const getSession = code => httpApi.Get({
  path: "/wx/session",
  code
})