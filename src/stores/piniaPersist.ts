/*
 * @Author: undercurre undercurre@163.com
 * @Date: 2023-06-17 19:49:08
 * @LastEditors: undercurre undercurre@163.com
 * @LastEditTime: 2023-06-17 19:50:51
 * @FilePath: \uni-cms\src\stores\piniaPersist.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { PersistedStateOptions } from "pinia-plugin-persistedstate";

/**
 * @description pinia 持久化参数配置
 * @param {String} key 存储到持久化的 name
 * @param {Array} paths 需要持久化的 state name
 * @return persist
 * */
const piniaPersistConfig = (key: string, paths?: string[]) => {
  const persist: PersistedStateOptions = {
    key,
    storage: localStorage,
    // storage: sessionStorage,
    paths
  };
  return persist;
};

export default piniaPersistConfig;
