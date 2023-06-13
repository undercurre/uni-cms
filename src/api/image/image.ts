/*
 * @Author: undercurre undercurre@163.com
 * @Date: 2023-06-07 01:46:26
 * @LastEditors: undercurre undercurre@163.com
 * @LastEditTime: 2023-06-14 01:24:07
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
import prerequest from '@/utils/request'

class ImageService {
  // 获取列表
  static getImageList() {
    const repository = 'undercurre/Image' // 替换为你的仓库拥有者和仓库名
    const token = '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' // 替换为你的 GitHub 访问令牌
    return prerequest.get(`https://api.github.com/repos/${repository}/contents`, {
        header: {
          Authorization: `Bearer ${token}`,
        },
      })
  }
}

export default ImageService
