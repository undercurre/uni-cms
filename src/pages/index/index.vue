<!--
 * @Author: undercurre undercurre@163.com
 * @Date: 2023-06-06 22:14:22
 * @LastEditors: undercurre undercurre@163.com
 * @LastEditTime: 2023-06-18 18:03:38
 * @FilePath: \uni-cms\src\pages\index\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <view class="content">
    <waterfall></waterfall>
  </view>
</template>

<script setup lang="ts">
import waterfall from '@/components/business/waterfall.vue'
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
