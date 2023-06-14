<template>
    <view>
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