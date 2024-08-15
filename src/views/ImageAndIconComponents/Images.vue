<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
</script>

<template>
  <title-h1>图像 (Images)</title-h1>
  <!--
  该 v-img 组件具有支持富媒体的功能。结合 vuetify-loader ，
  可以添加动态渐进式图像以提供更好的用户体验
  -->

  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-img
      :width="300"
      aspect-ratio="16/9"
      cover
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    ></v-img>
  </div>
</template>

<style scoped></style>
