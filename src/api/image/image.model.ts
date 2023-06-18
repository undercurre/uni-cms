/*
 * @Author: undercurre undercurre@163.com
 * @Date: 2023-06-13 20:03:33
 * @LastEditors: undercurre undercurre@163.com
 * @LastEditTime: 2023-06-18 17:31:12
 * @FilePath: \uni-cms\src\api\image\image.model.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { ApiResp } from './../types'

export interface Image {
  id: number
  name: string
  description: string
  upload_time: string
  user_id: number
  image_url: string
}

export interface getImageResp extends ApiResp {
  data: Array<Image>
}
