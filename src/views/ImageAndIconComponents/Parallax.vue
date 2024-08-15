<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
</script>

<template>
  <title-h1>视差 (Parallax)</title-h1>
  <!-- v-parallax 组件创建一个 3d 效果，使图像的滚动速度看起来比窗口慢 -->

  <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
    <div class="justify-center tw-h-full tw-place-content-center">
      <p class="tw-text-center tw-text-2xl tw-text-white">你好</p>
      <p class="tw-text-center tw-text-2xl tw-text-white">世界</p>
    </div>
  </v-parallax>
</template>

<style scoped></style>
