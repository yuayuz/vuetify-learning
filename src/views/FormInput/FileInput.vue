<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
</script>

<template>
  <title-h1>File Input</title-h1>
  <!--
  v-file-input 组件是一个特殊的表单，它为选择文件，展示选中文件，
  展示上传进度提供了简洁的界面，旨在取代浏览器默认的文件上传组件
  -->
  <p class="tw-bg-sky-400">使用</p>
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-file-input label="FileInput" variant="solo"></v-file-input>
  </div>
  <!-- 接受文件格式 v-file-input 组件可以根据你的需求设定为接受某几种特定的文件类型。 -->
  <p class="tw-bg-sky-400">限制接受的文件格式</p>
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-file-input label="ImageInput" accpet="image/*" variant="solo"></v-file-input>
  </div>

  <!-- 
  文件显示为纸片 (Chip) 选择的文件可以显示成 chip 组件，
  当设定了 chips 和 multiple 时，每个纸片元素都会展示出来（和文件计数相反） 
  -->
  <p class="tw-bg-sky-400">文件显示为纸片 (Chip)</p>
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-file-input label="ImageInput" accpet="image/*" multiple chips variant="solo"></v-file-input>
  </div>

  <p class="tw-bg-sky-400">计数器 多选 (Multiple)</p>
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-file-input
      label="ImageInput"
      accpet="image/*"
      show-size
      counter
      multiple
      variant="solo"
    ></v-file-input>
  </div>
  <!--  启用 multiple 属性可以使 v-file-input 同时包含多个文件 -->
  <!-- 当 show-size 属性和 counter 属性一同启用时，会下输入框下方显示文件总数和大小 -->
</template>

<style scoped></style>
