/*
 * @Author: undercurre undercurre@163.com
 * @Date: 2023-06-13 20:03:33
 * @LastEditors: undercurre undercurre@163.com
 * @LastEditTime: 2023-06-18 20:51:17
 * @FilePath: \uni-cms\src\router\pages.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 主包
const mainPackage = {
    index: '/pages/index/index',
    welcome: '/pages/welcome/index',
    userAgreement: '/pages/userAgreement/index',
    privacyPolicy: '/pages/privacyPolicy/index',
  }
  
//   // 分包
//   const subPackage = {
//     subIndex: '/package-sub/pages/index/index',
//   }
  
  const pages = {
    ...mainPackage,
    // ...subPackage,
  }
  
  export default pages
  