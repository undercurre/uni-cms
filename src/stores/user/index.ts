/*
 * @Author: undercurre undercurre@163.com
 * @Date: 2023-06-06 22:14:22
 * @LastEditors: undercurre undercurre@163.com
 * @LastEditTime: 2023-06-17 19:51:26
 * @FilePath: \uni-cms\src\stores\user\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'
import type { RootState } from './types'
import piniaPersistConfig from "@/stores/piniaPersist";

export const useUserStore = defineStore('user', {
  state: (): RootState => ({
    userInfo: {
        id: '',
        name: 'stores test'
    },
    token: '',
  }),
  getters: {
    // 示例返回大写字符
    capName(state) {
      return state.userInfo.name.toUpperCase()
    },
  },
  actions: {
    async setUserInfo() {
      // 这里可以发起请求
      console.log('发起getUserInfo请求')
    },
  },
  persist: piniaPersistConfig("userStorage")
})
