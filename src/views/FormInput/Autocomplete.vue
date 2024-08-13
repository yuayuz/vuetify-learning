<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'

const lists = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
</script>

<template>
  <title-h1>自动补全 (Autocpmpletes)</title-h1>
  <!--
  v-autocomplete 组件提供了简单且弹性的填充功能。
  在需要在大量数据中寻找结果或者需要请求后端 API 时很有用
  -->
  <p class="tw-bg-sky-400">使用</p>
  <!--  自动补全组件拓展了 v-select 并且添加了过滤项目的功能 -->

  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-autocomplete label="autocomplete" variant="outlined" :items="lists"> </v-autocomplete>
  </div>
</template>

<style scoped></style>
