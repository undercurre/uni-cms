<!--
 * @Author: undercurre undercurre@163.com
 * @Date: 2023-06-14 21:43:54
 * @LastEditors: undercurre undercurre@163.com
 * @LastEditTime: 2023-06-15 02:33:22
 * @FilePath: \uni-cms\src\components\fakerBasic\fakerImage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <view class="inline">
        <image :style="styObj" :src="url" mode="widthFix"></image>
    </view>
</template>

<script lang="ts" setup>
defineProps({
    styObj: Object,
    url: String,
})
</script>

<style scoped>

</style>