
let routeMenu={}
try {
   routeMenu = require('../../../dist/static/app_menu')
} catch (error) {
   console.log('error',error)
}
import axios from 'axios'
import md5 from 'md5-node'
import UTF8 from 'utf8'
function registerAppMenu (authApi,appMenu=routeMenu.appMenu) {
  if(!authApi){
    console.error('stop----注册时authApi没有传递!请检查调用registerAppMenu时是否传入了authApi')
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
    console.log('appMenu',appMenu)
    axios.post(`${authApi}/permission/`, appMenu).then((res) => {
        console.log('hsright---注册成功---')
    }).catch((e)=>{
        console.log('--路由注册报错啦---',e.code)
    })
  }
export default {registerAppMenu}
