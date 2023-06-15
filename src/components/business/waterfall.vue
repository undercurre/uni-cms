<!--
 * @Author: undercurre undercurre@163.com
 * @Date: 2023-06-14 21:43:54
 * @LastEditors: undercurre undercurre@163.com
 * @LastEditTime: 2023-06-15 02:41:57
 * @FilePath: \uni-cms\src\components\business\waterfall.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="flex">
    <div class="w-50vw flex flex-col opacity-0 absolute" :hidden="isHidden">
      <image
        class="w-50vw h-auto image"
        v-for="(item, index) in imagesTotalList"
        :key="index"
        :src="item.download_url"
        mode="widthFix"
        @load="calc"
      ></image>
    </div>
    <div class="w-50vw flex flex-col">
      <image
        class="w-50vw"
        v-for="(item, index) in imagesList1"
        :key="index"
        :src="item.download_url"
        mode="widthFix"
      ></image>
    </div>
    <div class="w-50vw flex flex-col">
      <image
        class="w-50vw"
        v-for="(item, index) in imagesList2"
        :key="index"
        :src="item.download_url"
        mode="widthFix"
      ></image>
    </div>
  </div>
</template>

<script lang="ts" setup>
// 无法在内置组件中使用ref
// 不能在外面使用prerequest
import ImageService from '@/api/image/image'
interface Image {
  download_url: string
  git_url: string
  html_url: string
  name: string
  path: string
  sha: string
  size: number
  type: string
  url: string
  _link: {
    git: string
    html: string
    self: string
  }
}

const imagesTotalList = ref<Array<Image>>([])
const imagesList1 = ref<Array<Image>>([])
let listHeight1 = 0
const imagesList2 = ref<Array<Image>>([])
let listHeight2 = 0

const instance = getCurrentInstance()
const isHidden = ref(false)

async function getData() {
  const res = await ImageService.getImageList()
  imagesTotalList.value = res.data as Array<Image>
  await nextTick()
  calc()
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
            console.log('存入1')
            imagesList1.value.push(imagesTotalList.value[index])
            listHeight1 += curHeight
            // console.log('当前高度1', curHeight)
          } else {
            console.log('存入2')
            imagesList2.value.push(imagesTotalList.value[index])
            listHeight2 += curHeight
            // console.log('当前高度2', curHeight)
          }
        }
      })
    })
    .exec()
  if (imagesList1.value.length + imagesList2.value.length === imagesTotalList.value.length) {
    isHidden.value = true
  }
}

onShow(() => {
  getData()
})
</script>

<style scoped></style>
