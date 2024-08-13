<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
import { ref } from 'vue'

const message = ref(['one'])
const num = ref()
</script>

<template>
  <title-h1>Checkboxes</title-h1>
  <!--
  该v-checkbox组件让用户能够在两个不同的值之间进行选择。
  它们与开关非常相似，可用于复杂的表格和清单
  -->
  <p class="tw-bg-sky-400">使用</p>
  <v-checkbox label="checkbox" color="blue"></v-checkbox>

  <p class="tw-bg-sky-400">多个 v-checbox 可以通过后端共享相同的 v-model</p>

  <div
    class="tw-mx-auto tw-mt-4 tw-flex tw-max-w-xl tw-place-content-evenly tw-items-center tw-bg-slate-50 tw-p-6 tw-shadow"
  >
    <p>{{ message }}</p>
    <v-checkbox
      label="one"
      color="blue"
      value="one"
      v-model="message"
      class="tw-flex tw-items-center"
    ></v-checkbox>
    <v-checkbox
      class="tw-flex tw-items-center"
      label="two"
      color="blue"
      value="two"
      v-model="message"
    ></v-checkbox>
  </div>

  <p class="tw-bg-sky-400">布尔模型 单个 v-checbox 将有一个布尔值作为其 value。</p>
  <div
    class="tw-mx-auto tw-mt-4 tw-flex tw-max-w-xl tw-place-content-evenly tw-items-center tw-bg-slate-50 tw-p-6 tw-shadow"
  >
    <p>{{ num }}</p>
    <v-checkbox label="one" color="blue" v-model="num" class="tw-flex tw-items-center"></v-checkbox>
  </div>
</template>

<style scoped></style>
