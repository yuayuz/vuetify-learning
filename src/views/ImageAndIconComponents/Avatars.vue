<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
</script>

<template>
  <title-h1>头像 (Avatars)</title-h1>
  <!--
  v-avatar 组件通常用于显示圆形用户个人资料图片。
  此组件允许动态调整响应式图像、图标和文本的大小并添加边框半径。
  当 rounded 属性设置为0时，将显示没有边框半径的头像
  -->

  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-avatar color="info"></v-avatar>
  </div>
</template>

<style scoped></style>
