<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
import { ref } from 'vue'

const color = ref()
</script>

<template>
  <title-h1>颜色选择器 (Color pickers)</title-h1>
  <!-- v-color-picker 允许你使用各种方法来选择颜色 -->

  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <p>color is: {{ color }}</p>
    <v-color-picker v-model="color"></v-color-picker>
  </div>
</template>

<style scoped></style>
