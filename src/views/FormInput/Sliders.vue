<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
import { ref } from 'vue'

const ticks = ref({
  0: 'A',
  1: 'B',
  2: 'C',
  3: 'D',
  4: 'E',
  5: 'F'
})
</script>

<template>
  <title-h1>Sliders</title-h1>
  <!-- v-slider 组件可以用作某些数字输入的可视化替代 -->
  <p class="tw-bg-sky-400">使用</p>
  <!--
  滑块组件可以根据一个用户选择的轨迹的位置，来表示一个单独的值。
  适合用来作音量，亮度，或者图像的某个滤镜的调整
  -->
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <div class="tw-flex tw-space-x-6">
      <p>color</p>
      <v-slider color="pink"></v-slider>
    </div>
    <div class="tw-flex tw-space-x-6">
      <p>track-color</p>
      <v-slider track-color="green"></v-slider>
    </div>
    <div class="tw-flex tw-space-x-6">
      <p>thumb-color</p>
      <v-slider thumb-color="purple"></v-slider>
    </div>
  </div>
  <p class="tw-bg-sky-400">步长</p>
  <!-- 使用 step 属性可以控制滑块的精度，以及每一次可以移动的距离 -->
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-slider color="pink" step="2" min="0" max="10" thumb-label></v-slider>
  </div>
  <!--
  图标 (Icons)
  可以使用 append-icon 和 prepend-icon 属性在滑块的后面和前面添加图标。
  还能够添加 @click:append 和 @click:prepend 来触发点击这些图标的执行函数
  -->
  <!--
  上方标签
  可以选择在滑块滑动时显示上方标签，或者将 thumb-label 属性设为 always 来始终显示。
  可以设定 thumb-color 属性调整滑块的颜色，也可以设定 thumb-size 属性调整滑块的大小
  -->
  <p class="tw-bg-sky-400">刻度</p>
  <!-- 刻度线决定了用户能将滑块移动到的预定值 -->
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-slider
      step="1"
      show-ticks="always"
      :ticks="ticks"
      :max="5"
      thumb-label
      tick-size="6"
    ></v-slider>
  </div>
</template>

<style scoped></style>
