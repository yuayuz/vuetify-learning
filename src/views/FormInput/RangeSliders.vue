<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
import { ref } from 'vue'

const value = ref()
</script>

<template>
  <title-h1>Range Sliders</title-h1>
  <p class="tw-bg-sky-400">使用</p>
  <!--
  滑块组件可以根据一个用户选择的轨迹的位置，来表示一个单独的值。
  适合用来作音量，亮度，或者图像的某个滤镜的调整
  -->

  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <p>slider value is: {{ value }}</p>
    <v-range-slider v-model="value"></v-range-slider>
  </div>
  <!-- 严格模式 (Strict) 在使用了 strict 属性之后，范围滑块的滑块就无法越过另一个滑块了 -->
  <!-- 最小值和最大值 可以通过 min 和 max 设置滑块的最小值和最大值 -->
</template>

<style scoped></style>
