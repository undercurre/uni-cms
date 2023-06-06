<template>
  <view class="content">
    <image class="logo" src="@img/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <view>{{ userStore.userInfo.name }}</view>
  </view>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import WeatherService from '@/api/weather/weather'


const title = ref('Hello')

const userStore = useUserStore()

async function getData() {
  const res = await WeatherService.getWeather()
  console.log(res)
}
getData()
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
