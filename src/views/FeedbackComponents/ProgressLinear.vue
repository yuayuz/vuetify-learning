<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
</script>

<template>
  <title-h1>进度条 (Progress linear)</title-h1>
  <!--
  v-progress-linear 组件通常用于将实例数据化给用户。
  它支持未指定的值，例如显示加载过程，
  也可以表示用于总体确定或者的值（也可以显示加载过程的值）
  -->
  <p class="tw-bg-sky-400">使用</p>
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xs tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-progress-linear model-value="40" color="red"></v-progress-linear>
  </div>

  <p class="tw-bg-sky-400">缓冲值 (Buffering)</p>
  <!-- 主值由 v-model 控制，而缓冲值则由 buffer-value 属性控制 -->
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xs tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-progress-linear model-value="20" color="info" buffer-value="20"></v-progress-linear>
  </div>

  <p class="tw-bg-sky-400">未定式进度条</p>
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xs tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-progress-linear model-value="40" color="purple" indeterminate></v-progress-linear>
  </div>

  <p class="tw-bg-sky-400">反转</p>
  <!-- 组件支持从右到左（RTL），设置 reverse 属性即可开启从右到左模式的进度条 -->
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xs tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-progress-linear reverse model-value="40" color="purple" indeterminate></v-progress-linear>
  </div>
</template>

<style scoped></style>
