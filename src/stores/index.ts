/*
 * @Author: undercurre undercurre@163.com
 * @Date: 2023-06-06 22:14:22
 * @LastEditors: undercurre undercurre@163.com
 * @LastEditTime: 2023-06-17 19:50:38
 * @FilePath: \uni-cms\src\stores\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate);

export default pinia
