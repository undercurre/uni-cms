<template>
    <view>
        <image v-for="item in imagesList" :key="item.download_url" src="item.download_url"></image>
    </view>
</template>

<script lang="ts" setup>
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
    }
}

const imagesList = ref<Array<Image>>([])
const repository = 'undercurre/Image'; // 替换为你的仓库拥有者和仓库名
const token = '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'; // 替换为你的 GitHub 访问令牌
</script>

<style scoped></style>