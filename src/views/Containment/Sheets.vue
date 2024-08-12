<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
</script>

<template>
  <title-h1>Sheets</title-h1>
  <!-- v-sheet 组件是一块可改变的 paper ，它支持 Vuetify 组件的一些基本特性 -->
  <p class="tw-bg-sky-400">
    工作区组件支持强调效果，圆角，自定义颜色等功能。它既可以作为其他组件的容器也可以单独使用
  </p>

  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-sheet
      class="tw-flex tw-aspect-square tw-w-full tw-items-center tw-justify-center tw-rounded-md tw-bg-pink-400/20 tw-shadow-2xl"
      >sheet
    </v-sheet>
  </div>
</template>

<style scoped></style>
