#注册hsright路由
- 前端项目根目录static下面必须有一个app_menu.js(导出模块规范:commonjs)
- app_menu.js栗子如下:
  ```
    const appMenu = {
        app: 'rollcall',
        permissions: [
            {
            'item_key': 'gjgl001',
            'parent_key': 'jczl001',
            'item_name': '工具',
            'item_icon': '',
            'item_url': '/mg/mg_branch/mg_toolManger',
            'item_group': 'main_menu',
            'item_row': 1,
            'seq': 2
            },
            {
            'item_key': 'gzgl001',
            'parent_key': 'jczl001',
            'item_name': '工组',
            'item_icon': '',
            'item_url': '/mg/mg_branch/pb_WorkerTeam',
            'item_group': 'main_menu',
            'item_row': 1,
            'seq': 2
            },
            {
            'item_key': 'yccx001',
            'parent_key': 'jczl001',
            'item_name': '异常查询',
            'item_icon': '',
            'item_url': '/mg/mg_branch/mg_exceptionQuery',
            'item_group': 'main_menu',
            'item_row': 1,
            'seq': 2
            }
        ]
    }
    module.exports = { appMenu }
  ```

- 切记 导出module.exports = { appMenu }
## 在nodeJS 中 server.js中如何使用?
- 需要传入一个注册到服务器到地址----authApi
```
// 导入模块
const registerTool = require('hsright-route-register')
registerTool.registerAppMenu(authApi)
```