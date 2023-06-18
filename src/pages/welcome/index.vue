<!--
 * @Author: undercurre undercurre@163.com
 * @Date: 2023-06-18 18:36:12
 * @LastEditors: undercurre undercurre@163.com
 * @LastEditTime: 2023-06-18 23:33:06
 * @FilePath: \uni-cms\src\pages\welcome\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: undercurre undercurre@163.com
 * @Date: 2023-06-06 22:14:22
 * @LastEditors: undercurre undercurre@163.com
 * @LastEditTime: 2023-06-18 18:40:34
 * @FilePath: \uni-cms\src\pages\index\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <view class="content">
    <h1 class="text-20px font-bold leading-normal">欢迎使用 Matrix</h1>
    <p class="text-gray-500">登录后可体验、享受优质服务</p>
    <view class="w-full flex justify-center mt-20px">
      <image :src="logo" class="w-200px h-200px"></image>
    </view>
    <button
      plain="true"
      class="flex justify-center items-center mb-20px p-10px"
      @click="auth"
    >
      <image :src="weixinLogo" class="w-20px h-20px"></image
      ><text class="text-green-500 text-16px">微信用户一键登录</text>
    </button>
    <label class="text-#ddd opacity-60 leading-normal">
      <checkbox v-model:checked="watchBeen" @change="checkChange" />
    </label>
    <text> 登录视为您已同意绑定微信账号，且代表您已阅读并同意</text
    ><text class="text-green-500" @click="go2UserAgreement"
      >《用户服务协议》</text
    ><text class="text-green-500" @click="go2PrivacyPolicy"
      >《隐私权政策》</text
    >
    <text>；未注册手机号码在登录后将自动为您创建Matrix账号。 </text>
  </view>
</template>

<script setup lang="ts">
import router from '@/router'
import logo from '@/static/images/themeLogo.png'
import weixinLogo from '@/static/images/weixin.png'
import { useUserStore } from '@/stores/user'
import prequest from '@/utils/request'

const userStore = useUserStore()

const watchBeen = ref(false)

function go2PrivacyPolicy() {
  router.push('privacyPolicy')
}

function go2UserAgreement() {
  router.push('userAgreement')
}

function auth() {
  if (watchBeen.value) {
    uni.login({
      async success(res) {
        if (res.code) {
          console.log(res.code)
          // 登录获取token接口
          prequest('/wechat/login', {
            method: 'post',
            skipTokenCheck: true,
            data: { code: res.code },
          }).then((res1) => {
            console.log('token', res1.data.data.access_token)
            userStore.token = res1.data.data.access_token
            router.push('index');
          }) // 注意这里根据后台返回的token结构取值
        }
      },
    })
  }
}

function checkChange(e: any) {
    console.log(e)
}
</script>

<style scoped>
.content {
  padding: 60px 20px;
}
</style>
