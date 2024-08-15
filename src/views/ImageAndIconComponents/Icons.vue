<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
</script>

<template>
  <title-h1>图标 (Icons)</title-h1>
  <!-- v-icon 组件提供了大量的，可以从各个方面覆盖到应用程序的字符形状。 -->
  <p class="tw-bg-sky-400">使用</p>
  <!--
  图标有两个主题（浅色和深色）和
  五个不同的大小（x-small、small、 medium （默认）、large 和 x-large）
  -->

  <div class="tw-mx-auto tw-mt-4 tw-max-w-xs tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-icon icon="mdi-home" size="x-large" color="info"></v-icon>
  </div>
</template>

<style scoped></style>
