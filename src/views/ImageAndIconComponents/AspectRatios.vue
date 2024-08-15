<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
</script>

<template>
  <title-h1>长宽比 (Aspect ratios)</title-h1>
  <!-- v-responsive 组件可用于将任何部分的宽高比固定为定值 -->

  <p class="tw-bg-sky-400">使用</p>
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-responsive :aspect-ratio="16 / 5">你好,世界</v-responsive>
  </div>
</template>

<style scoped></style>
