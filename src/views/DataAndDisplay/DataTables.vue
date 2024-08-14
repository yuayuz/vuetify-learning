<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'

const list = Array.from({ length: 30 }, (v, i) => ({
  name: 'A' + i,
  age: i,
  B: 'b',
  C: 'c'
}))
</script>

<template>
  <title-h1>数据表格（Data tables）</title-h1>
  <!--
  v-data-table 组件用于显示表格数据。
  功能包括排序、搜索、分页、内嵌式编辑和行选择
  -->
  <p class="tw-bg-sky-400">使用</p>

  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-data-table :items="list"> </v-data-table>
  </div>
</template>

<style scoped></style>
