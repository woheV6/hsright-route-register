
let routeMenu={}
try {
   routeMenu = require('../../../dist/static/app_menu')
} catch (error) {
   console.log('error',error)
}
import axios from 'axios'
import md5 from 'js-md5'
import UTF8 from 'utf8'
function registerAppMenu (apiObj,appMenu=routeMenu.appMenu) {
  const type = typeof apiObj
  var var_data = {}
  var registerApi = ''
  if(type==='object'){
    registerApi = apiObj.registerApi
    var_data=Object.assign(apiObj)
  }else{
    registerApi=apiObj
    var_data={
      registerApi
    }
  }

  if(!registerApi){
    console.error('stop----注册时authApi没有传递!请检查调用registerAppMenu时是否传入了authApi',`authApi:${authApi}`)
    return
  }
  if(!appMenu||!Object.keys(appMenu).length){
    console.error('stop----appMenu内容为空---',appMenu)
    return
  } 
    var time = new Date().getTime()
    var a = '018f162e804f945ee6b23aebfa863639|' + time
    var aa = md5(a, '018f162e804f945ee6b23aebfa863639').toString(
      UTF8.Utfd
    )
    aa = aa + '|' + time
    axios.defaults.headers.common['authkey'] = aa
    appMenu.var_data = JSON.stringify(var_data)
    return axios.post(`${registerApi}/permission/`, appMenu)
  }
export default {registerAppMenu}
