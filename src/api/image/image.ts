/*
 * @Author: undercurre undercurre@163.com
 * @Date: 2023-06-07 01:46:26
 * @LastEditors: undercurre undercurre@163.com
 * @LastEditTime: 2023-06-18 17:31:21
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
import type * as ImageModel from './image.model'
import prequest from '@/utils/request'

class ImageService {
  // 获取列表
  static getImageList() {
    console.log('调用接口');
    return prequest.get<ImageModel.getImageResp>(
      '/images/fineOneByUser',
    )
  }
}

export default ImageService
