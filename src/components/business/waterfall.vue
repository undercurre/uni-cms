<!--
 * @Author: undercurre undercurre@163.com
 * @Date: 2023-06-14 21:43:54
 * @LastEditors: undercurre undercurre@163.com
 * @LastEditTime: 2023-06-18 23:31:38
 * @FilePath: \uni-cms\src\components\business\waterfall.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="flex">
    <div class="w-50vw flex flex-col opacity-0 absolute" v-if="!isHidden">
      <image
        class="w-50vw h-auto image"
        v-for="(item, index) in imagesTotalList"
        :key="index"
        :src="item.image_url"
        mode="widthFix"
        @load="calc"
      ></image>
    </div>
    <div class="w-50vw flex flex-col">
      <image
        class="w-50vw"
        v-for="(item, index) in imagesList1"
        :key="index"
        :src="item.image_url"
        mode="widthFix"
        @click="expand(item.image_url)"
      ></image>
    </div>
    <div class="w-50vw flex flex-col">
      <image
        class="w-50vw"
        v-for="(item, index) in imagesList2"
        :key="index"
        :src="item.image_url"
        mode="widthFix"
        @click="expand(item.image_url)"
      ></image>
    </div>
    <uni-popup ref="popup" background-color="#fff">
      <view class="w-100vw h-100vh flex justify-center items-center" @click="closeExpand">
        <image class="w-100vw" mode="widthFix" :src="imageExpand"></image> 
      </view>
    </uni-popup>
  </div>
</template>

<script lang="ts" setup>
// 无法在内置组件中使用ref
// 不能在外面使用prerequest
import ImageService from '@/api/image/image'
import type { Image } from '@/api/image/image.model'

const imagesTotalList = ref<Array<Image>>([])
const imagesList1 = ref<Array<Image>>([])
let listHeight1 = 0
const imagesList2 = ref<Array<Image>>([])
let listHeight2 = 0

const instance = getCurrentInstance()
const isHidden = ref(false)

async function getData() {
  console.log('获取数据')
  const res = await ImageService.getImageList()
  console.log(res)
  if (Object.keys(res).length === 0) {
    imagesTotalList.value = res.data.data
    await nextTick()
    calc()
  }
}

async function calc() {
  const query = uni.createSelectorQuery().in(instance)
  query
    .selectAll('.image')
    .boundingClientRect((data) => {
      const imageInfo = data as Array<{ height: number }>
      imageInfo.forEach((item, index) => {
        const curHeight = item.height
        if (
          curHeight !== 0 &&
          !imagesList1.value.includes(imagesTotalList.value[index]) &&
          !imagesList2.value.includes(imagesTotalList.value[index])
        ) {
          if (listHeight1 < listHeight2) {
            imagesList1.value.push(imagesTotalList.value[index])
            listHeight1 += curHeight
          } else {
            imagesList2.value.push(imagesTotalList.value[index])
            listHeight2 += curHeight
          }
        }
      })
    })
    .exec()
}

watchEffect(() => {
  console.log(imagesList1.value.length, imagesList2.value.length, imagesTotalList.value.length)
  if (imagesList1.value.length + imagesList2.value.length === imagesTotalList.value.length && imagesTotalList.value.length !== 0) {
    isHidden.value = true
  }
})

const imageExpand = ref('')

function expand(src: string) {
  const popup = instance?.proxy?.$refs.popup as any
  popup.open('top')
  imageExpand.value = src
}

function closeExpand() {
  const popup = instance?.proxy?.$refs.popup as any
  popup.close()
}

onMounted(() => {
  getData()
})
</script>

<style scoped></style>
