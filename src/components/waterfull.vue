<template>
  <div>
    <image v-for="(item,index) in imagesList"
      :key="index" :src="item.download_url" mode="widthFix"></image>
  </div>
</template>

<script lang="ts" setup>
// 不能在外面使用prerequest
import ImageService from '@/api/image/image'
interface Image {
  download_url: string;
  git_url: string;
  html_url: string;
  name: string;
  path: string;
  sha: string;
  size: number;
  type: string;
  url: string;
  _link: {
    git: string;
    html: string;
    self: string;
  };
}

const imagesList = ref<Array<Image>>([])
// 每行宽多少 vw
const itemWidth = 20
const columnCount = 5

async function getData() {
  const res = await ImageService.getImageList()
  console.log(res)
  imagesList.value = res.data as Array<Image>
}

getData()
</script>

<style scoped></style>
