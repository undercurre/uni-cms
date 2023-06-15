/*
 * @Author: undercurre undercurre@163.com
 * @Date: 2023-06-07 01:46:26
 * @LastEditors: undercurre undercurre@163.com
 * @LastEditTime: 2023-06-16 01:11:21
 * @FilePath: \uni-cms\src\api\user\user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: undercurre undercurre@163.com
 * @Date: 2023-06-07 01:46:26
 * @LastEditors: undercurre undercurre@163.com
 * @LastEditTime: 2023-06-07 02:09:15
 * @FilePath: \uni-cms\src\api\user\user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type * as UserModel from './user.model'
import prequest from '@/utils/request'

class UserService {
  // 获取列表
  static login(params: UserModel.LoginParm) {
    return prequest.post<UserModel.LoginResp>(
      '/auth/login',
      { data: params },
    )
  }
}

export default UserService
