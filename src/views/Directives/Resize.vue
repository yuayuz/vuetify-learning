<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
import { ref } from 'vue'

const windowSize = ref()

const onResize = function () {
  windowSize.value = { x: window.innerWidth, y: window.innerHeight }
}
</script>

<template>
  <title-h1>缩放指令</title-h1>
  <!-- v-resize 指令可用于在窗口尺寸发生变化时调用指定的函数 -->
  <div class="tw-mx-auto tw-mt-4 tw-flex tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-card v-resize="onResize"> Window Size is: {{ windowSize }} </v-card>
  </div>
</template>

<style scoped></style>
