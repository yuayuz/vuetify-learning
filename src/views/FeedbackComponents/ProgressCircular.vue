<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
</script>

<template>
  <title-h1>环状进度 (Progress circular)</title-h1>
  <!--
  该v-progress-circular组件用于循环向用户传达数据。
  它也可以处于不确定状态以表示加载
  -->

  <p class="tw-bg-sky-400">使用</p>

  <div
    class="tw-mx-auto tw-mt-4 tw-flex tw-max-w-xs tw-place-content-evenly tw-bg-slate-50 tw-p-6 tw-shadow"
  >
    <!-- 使用indeterminate属性，v-progress-circular将会一直是一个动画中  -->
    <v-progress-circular color="purple" indeterminate></v-progress-circular>
    <!-- 也可以使用 model-value 来控制进度  -->
    <v-progress-circular color="purple" model-value="20"></v-progress-circular>
  </div>
</template>

<style scoped></style>
