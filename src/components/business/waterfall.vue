<!--
 * @Author: undercurre undercurre@163.com
 * @Date: 2023-06-14 21:43:54
 * @LastEditors: undercurre undercurre@163.com
 * @LastEditTime: 2023-06-15 02:41:57
 * @FilePath: \uni-cms\src\components\business\waterfall.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <FakerImage
      :styObj="{
        width: `${itemWidth}vw`,
      }"
      v-for="(item, index) in imagesList"
      :key="index"
      :url="item.download_url"
      id="image"
      ref="image"
    ></FakerImage>
  </div>
</template>

<script lang="ts" setup>
// 无法在内置组件中使用ref
// 不能在外面使用prerequest
import ImageService from '@/api/image/image'
import FakerImage from '../fakerBasic/fakerImage.vue'
import type { ComponentInternalInstance } from 'vue'
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

const imagesList = ref<Array<Image>>([])

const instance = getCurrentInstance()

async function getData() {
  const res = await ImageService.getImageList()
  console.log(res)
  imagesList.value = res.data as Array<Image>
  // 一定要让他刷了dom后再获取才能获取到
  await nextTick()
  calc()
}

function calc() {
  // if (instance && instance.proxy) {
  //   let imageDemoList = instance.proxy.$refs.image as Array<any>
  //   console.log('第一个实例', imageDemoList[0])
  // }
  const query = uni.createSelectorQuery().in(instance)
  query
    .selectAll('#image')
    .boundingClientRect((data) => {
      console.log('得到布局位置信息', data)
    })
    .exec((res) => {
      console.log(res)
    })
}

// 瀑布流
// 每行宽多少 vw
const itemWidth = 50
const columnCount = 100 / 25

onShow(() => {
  getData()
})

onMounted(() => {})
</script>

<style scoped></style>
