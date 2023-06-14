<template>
  <div>
    <image
      class="w-50vw"
      v-for="(item, index) in imagesList"
      :key="index"
      :src="item.download_url"
      mode="widthFix"
      ref="image"
    ></image>
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

const imagesList = ref<Array<Image>>([])

async function getData() {
  const res = await ImageService.getImageList()
  console.log(res)
  imagesList.value = res.data as Array<Image>
}

getData()
// 瀑布流
const image = ref()
// 每行宽多少 vw
const itemWidth = 25
const columnCount = 100 / 25

onShow(() => {
  console.log('有没有ni', getCurrentInstance()?.proxy?.$refs.image);
});
</script>

<style scoped></style>
